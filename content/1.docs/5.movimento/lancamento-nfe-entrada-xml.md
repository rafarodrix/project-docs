---
title: Importação de NFe via XML
description: Manual de importação e resolução de pendências de NFe de entrada.
---

O processo de importação de NFe via XML permite a entrada de notas fiscais de maneira eficiente no sistema, garantindo a correspondência dos dados de produtos e fornecedores entre o XML e o cadastro existente no sistema. Este manual detalha as etapas para importar o XML e resolver possíveis pendências, assegurando que todas as informações estejam corretas.

## Acessando o Módulo de Lançamento de Documentos

- No menu principal, vá até `Movimento > Lançamento de Documentos`.

## Importando o XML da NFe

1. **Selecionar a opção de Importação:**
   - Clique em `Importar > XML > Importar XML` (ou utilize o atalho `Ctrl + X`).
   
2. **Escolha o Arquivo XML:**
   - Selecione o arquivo XML da NFe que deseja importar.

3. **Visualizando as Notas Importadas:**
   - Após a importação, as notas fiscais serão exibidas na tela com o status e informações básicas como o valor da nota, data e número.
   - Notas com produtos e fornecedores já cadastrados no sistema serão indicadas com uma **bolinha verde** ao lado do código do fornecedor, indicando que estão prontas para o próximo passo.

## Resolvendo Pendências de Importação

Ao importar um XML, é possível que alguns itens ou dados não correspondam diretamente aos cadastros existentes no sistema. Para resolver essas pendências, siga as etapas abaixo:

### Produtos

1. **Referenciar Produto:**
   - Se um produto já existe no cadastro, mas não foi automaticamente reconhecido, utilize a opção `Referenciar Produto`. Isso associa o produto do XML ao cadastro existente, corrigindo a pendência.

2. **Cadastrar Produto:**
   - Caso o produto não exista no sistema, utilize a opção `Cadastrar Produto` para realizar o novo cadastro diretamente pela tela de pendências.

3. **Editar Produto:**
   - Se precisar ajustar algum detalhe no cadastro do produto, como preço ou descrição, utilize a opção `Editar Produto`.

4. **Atualizar NCM:**
   - **NCM Divergente:** Caso o NCM do produto no XML seja diferente do cadastrado no sistema, o campo NCM ficará destacado em vermelho. Neste caso, utilize a opção `Atualizar NCM` para corrigir a informação no sistema.

### Fornecedores

- **Consultando ou Cadastrando Fornecedor:**
   - Caso o fornecedor não seja automaticamente reconhecido ou precise ser cadastrado, utilize as opções `Consultar Participante` ou `Cadastrar Participante`.

## Finalizando o Processo

1. **Gerar Lançamentos:**
   - Após resolver todas as pendências, clique em `Gerar Lançamentos` para concluir a importação e registrar a entrada da NFe no sistema.

## Considerações Finais

O módulo de importação de NFe via XML é uma ferramenta essencial para garantir que as entradas de mercadorias estejam corretas e atualizadas, reduzindo erros e assegurando a conformidade fiscal. Caso tenha dúvidas ou precise de assistência adicional, entre em contato com o suporte.

::card

#title
:icon{name="fluent:person-support-24-filled"} Precisa de ajuda e não encontrou aqui?
#description
Entre em contato, estamos disponíveis para ajudar você com qualquer dúvida ou problema que possa ter.

---

- :icon{name="akar-icons-whatsapp-fill"} **WhatsApp:** [(34) 99771-3731](https://wa.me/trilinksoftware)
- :icon{name="teenyicons:envelope-solid"} **E-mail:** [equipe@trilinksoftware.com.br](mailto:equipe@trilinksoftware.com.br)

::
