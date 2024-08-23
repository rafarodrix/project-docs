---
title: Detecção e Leitura de Arquivos XML
description: Este script foi desenvolvido para processar arquivos XML de notas fiscais eletrônicas
---

Este script extrai informações importantes, como chave de acesso, data de emissão, modelo, série, número da NF, e valores relacionados aos CFOPs (Código Fiscal de Operações e Prestações). Além de extrair esses dados, o script valida se a soma dos valores dos CFOPs corresponde ao valor total da nota fiscal.

::steps

### Principais Funcionalidades

1. **Detecção e Leitura de Arquivos XML**:

   - O script detecta automaticamente a codificação dos arquivos XML, garantindo que possam ser lidos corretamente, mesmo que não estejam em UTF-8.

2. **Extração de Dados**:

   - As principais informações das notas fiscais, como chave de acesso, data de emissão, e valores de produtos agrupados por CFOP, são extraídas de cada arquivo XML.
   - Para cada CFOP encontrado, o script soma os valores dos produtos e verifica se essa soma corresponde ao valor total da nota.

3. **Validação de Dados**:

   - O script realiza uma validação para garantir que a soma dos valores dos CFOPs corresponda ao valor total da nota. Qualquer discrepância é registrada como um erro.

4. **Geração de Relatório em Excel**:

   - Os dados extraídos são organizados em um relatório Excel, com colunas dinâmicas para cada CFOP encontrado. O relatório inclui também uma coluna de validação que indica se os valores dos CFOPs batem com o valor total da nota.

5. **Registro de Logs**:
   - O script mantém um log detalhado de todo o processo, registrando eventos importantes, erros e avisos em um arquivo de log, facilitando o rastreamento e a correção de problemas.

### Instalação das Dependências

Para garantir que o script funcione corretamente, é necessário instalar algumas bibliotecas Python. Siga as instruções abaixo para configurar o ambiente.

- `openpyxl` Usada para criar e manipular arquivos Excel (.xlsx).

- `chardet` Utilizada para detectar automaticamente a codificação de arquivos, garantindo que arquivos XML em diferentes codificações possam ser lidos corretamente.

- `xml.etree.ElementTree` Biblioteca padrão do Python para parsing de arquivos XML. Não necessita de instalação adicional, pois é parte integrante da instalação padrão do Python.

```bash [Instalação Dependências]
  pip install openpyxl chardet
```

### Código

Antes de executar o script, certifique-se de ter o Python instalado (versão 3.6 ou superior) e de ter executado o comando pip install openpyxl chardet para instalar as dependências necessárias. Uma vez configurado o ambiente, o script estará pronto para processar os arquivos XML e gerar o relatório Excel conforme especificado.

```bash [Pyton]
import os
import xml.etree.ElementTree as ET
from openpyxl import Workbook
import chardet  # Biblioteca para detecção de codificação
import logging  # Biblioteca para logging detalhado
from datetime import datetime

# Configuração do logging
logging.basicConfig(
    filename='log_processamento.log',
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)

def detectar_codificacao(file_path):
    with open(file_path, 'rb') as f:
        result = chardet.detect(f.read())
        return result['encoding'] or 'utf-8'

def extrair_dados_xml(xml_path):
    try:
        # Verificar se o arquivo está vazio
        if os.path.getsize(xml_path) == 0:
            logging.warning(f"O arquivo {os.path.basename(xml_path)} está vazio e será ignorado.")
            return None

        # Detectar codificação do arquivo
        encoding = detectar_codificacao(xml_path)

        # Ler o conteúdo do arquivo com a codificação detectada
        with open(xml_path, 'r', encoding=encoding) as file:
            xml_content = file.read()

        # Parse do XML
        root = ET.fromstring(xml_content)
        namespace = {'ns': 'http://www.portalfiscal.inf.br/nfe'}

        # Dicionário para armazenar as informações extraídas
        dados = {}

        # Informações principais
        dados['arquivo'] = os.path.basename(xml_path)
        dados['chave_acesso'] = root.find('.//ns:chNFe', namespace)
        if dados['chave_acesso'] is not None:
            dados['chave_acesso'] = dados['chave_acesso'].text
        else:
            logging.warning(f"Chave de acesso não encontrada no arquivo {dados['arquivo']}.")
            dados['chave_acesso'] = 'N/A'

        dados['data_emissao'] = root.find('.//ns:dhEmi', namespace)
        if dados['data_emissao'] is not None:
            dados['data_emissao'] = dados['data_emissao'].text
        else:
            dados['data_emissao'] = root.find('.//ns:dEmi', namespace)
            if dados['data_emissao'] is not None:
                dados['data_emissao'] = dados['data_emissao'].text
            else:
                logging.warning(f"Data de emissão não encontrada no arquivo {dados['arquivo']}.")
                dados['data_emissao'] = 'N/A'

        dados['modelo'] = root.find('.//ns:mod', namespace)
        if dados['modelo'] is not None:
            dados['modelo'] = dados['modelo'].text
        else:
            logging.warning(f"Modelo não encontrado no arquivo {dados['arquivo']}.")
            dados['modelo'] = 'N/A'

        dados['serie'] = root.find('.//ns:serie', namespace)
        if dados['serie'] is not None:
            dados['serie'] = dados['serie'].text
        else:
            logging.warning(f"Série não encontrada no arquivo {dados['arquivo']}.")
            dados['serie'] = 'N/A'

        dados['numero_nf'] = root.find('.//ns:nNF', namespace)
        if dados['numero_nf'] is not None:
            dados['numero_nf'] = dados['numero_nf'].text
        else:
            logging.warning(f"Número NF não encontrado no arquivo {dados['arquivo']}.")
            dados['numero_nf'] = 'N/A'

        valor_total_element = root.find('.//ns:vNF', namespace)
        if valor_total_element is not None and valor_total_element.text:
            dados['valor_total'] = float(valor_total_element.text)
        else:
            logging.warning(f"Valor total não encontrado ou inválido no arquivo {dados['arquivo']}.")
            dados['valor_total'] = 0.0

        # Inicializa dicionário de CFOPs e soma
        dados['cfops'] = {}
        soma_cfops = 0.0

        # Extrair CFOP e valores relacionados
        for det in root.findall('.//ns:det', namespace):
            cfop_element = det.find('.//ns:CFOP', namespace)
            vprod_element = det.find('.//ns:vProd', namespace)

            if cfop_element is not None and vprod_element is not None and vprod_element.text:
                cfop = cfop_element.text
                valor_produto = float(vprod_element.text)

                # Soma os valores dos CFOPs
                soma_cfops += valor_produto

                if cfop in dados['cfops']:
                    dados['cfops'][cfop] += valor_produto
                else:
                    dados['cfops'][cfop] = valor_produto
            else:
                logging.warning(f"Item com CFOP ou valor de produto inválido no arquivo {dados['arquivo']}.")

        # Adiciona o resultado da validação
        dados['soma_cfops'] = soma_cfops
        if abs(soma_cfops - dados['valor_total']) < 0.01:  # Tolerância de 0.01 para arredondamentos
            dados['validacao'] = "OK"
        else:
            dados['validacao'] = "ERRO"
            logging.warning(f"Discrepância entre soma dos CFOPs e valor total na nota {dados['arquivo']}.")

        return dados

    except ET.ParseError as e:
        logging.error(f"Erro de parsing no arquivo {os.path.basename(xml_path)}: {e}")
        return None
    except Exception as e:
        logging.error(f"Erro inesperado ao processar o arquivo {os.path.basename(xml_path)}: {e}")
        return None

def salvar_relatorio_excel(resultados, cfop_list, output_path):
    try:
        # Criar um arquivo Excel para armazenar o relatório
        wb = Workbook()
        ws = wb.active
        ws.title = "Relatório XML"

        # Criar o cabeçalho do relatório
        cabecalho = [
            "Arquivo",
            "Chave de Acesso",
            "Data de Emissão",
            "Modelo",
            "Série",
            "Número NF",
            "Valor Total",
            "Soma CFOPs",
            "Validação"
        ]

        # Adicionar colunas dinamicamente para cada CFOP encontrado
        cabecalho.extend(cfop_list)
        ws.append(cabecalho)

        # Preencher o Excel com os dados extraídos
        for resultado in resultados:
            linha = [
                resultado['arquivo'],
                resultado['chave_acesso'],
                resultado['data_emissao'],
                resultado['modelo'],
                resultado['serie'],
                resultado['numero_nf'],
                resultado['valor_total'],
                resultado['soma_cfops'],
                resultado['validacao']
            ]

            # Adiciona valores dos CFOPs nas colunas correspondentes
            for cfop in cfop_list:
                linha.append(resultado['cfops'].get(cfop, 0.00))

            ws.append(linha)

        # Tentar salvar o arquivo Excel
        wb.save(output_path)
        print(f"Relatório gerado com sucesso: {output_path}")
        logging.info(f"Relatório Excel salvo com sucesso em {output_path}.")

    except PermissionError:
        logging.error(f"Permissão negada ao tentar salvar o arquivo Excel em {output_path}. Verifique se o arquivo está aberto e tente novamente.")
        print(f"Erro: Permissão negada ao tentar salvar o arquivo Excel em {output_path}. Verifique se o arquivo está aberto e tente novamente.")
    except Exception as e:
        logging.error(f"Erro inesperado ao salvar o arquivo Excel: {e}")
        print(f"Erro inesperado ao salvar o arquivo Excel: {e}")

def main():
    # Caminho da pasta onde estão os arquivos XML
    pasta_xml = r'C:\analise-xml\202408\NFCe'

    # Verificar se a pasta existe
    if not os.path.isdir(pasta_xml):
        logging.error(f"A pasta especificada {pasta_xml} não existe.")
        print(f"Erro: A pasta especificada {pasta_xml} não existe.")
        return

    # Listar todos os arquivos XML na pasta
    arquivos_xml = [f for f in os.listdir(pasta_xml) if f.lower().endswith('.xml')]

    if not arquivos_xml:
        logging.warning(f"Nenhum arquivo XML encontrado na pasta {pasta_xml}.")
        print(f"Aviso: Nenhum arquivo XML encontrado na pasta {pasta_xml}.")
        return

    # Lista para armazenar os resultados
    resultados = []
    cfop_set = set()

    # Percorrer cada arquivo XML e extrair as informações
    for arquivo in arquivos_xml:
        xml_path = os.path.join(pasta_xml, arquivo)
        dados = extrair_dados_xml(xml_path)
        if dados:
            resultados.append(dados)
            cfop_set.update(dados['cfops'].keys())

    if not resultados:
        logging.warning("Nenhum dado válido foi extraído dos arquivos XML.")
        print("Aviso: Nenhum dado válido foi extraído dos arquivos XML.")
        return

    # Ordenar a lista de CFOPs
    cfop_list = sorted(cfop_set)

    # Definir o caminho de saída para o relatório Excel
    data_atual = datetime.now().strftime('%Y%m%d_%H%M%S')
    nome_arquivo_excel = f'relatorio_xml_{data_atual}.xlsx'
    output_path = os.path.join(pasta_xml, nome_arquivo_excel)

    # Salvar o relatório Excel
    salvar_relatorio_excel(resultados, cfop_list, output_path)

if __name__ == "__main__":
    main()
````
