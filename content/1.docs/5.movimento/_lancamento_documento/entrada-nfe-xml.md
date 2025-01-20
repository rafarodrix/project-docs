---
title: Nota Fiscal de Entrada pelo XML
description: Processo para entrada de NFe
---

O processo de importação de NFe via XML permite a entrada de notas fiscais de maneira eficiente no sistema, garantindo a correspondência dos dados de produtos e fornecedores entre o XML e o cadastro existente no sistema. Este manual detalha as etapas para importar o XML e resolver possíveis pendências, assegurando que todas as informações estejam corretas.

::steps

### Passos para  Entrada de NF

No menu principal, vá até `Movimento > Lançamento de Documentos`.

### Importar o XML

- Clique em **`Importar > XML > Importar XML`** (ou utilize o atalho `Ctrl + X`).
- O sistema exibirá uma lista de todas as notas fiscais disponíveis para dar entrada selecione o arquivo XML da NFe que deseja importar.
- Dê um **duplo clique** no XML ou clique em **Confirmar** para visualizar os itens da nota.

::alert{type="info" to="/docs/movimento/_lancamento_documento/Download-xml" target="_blank" icon="lucide:link"}
**Dica:** Caso o XML não esteja listado, é necessário fazer o download e importá-lo manualmente no sistema. Saiba mais aqui.
::

### Resolução de Pendências

Notas com produtos e fornecedores já cadastrados no sistema serão indicadas com uma **bolinha verde** ao lado do código do fornecedor e do produto, indicando que estão prontas para o próximo passo.
> - **Bolinha vazada:** Indica que o fornecedor ou item não está cadastrado.
> - **Bolinha verde:** Indica que o fornecedor ou item já está cadastrado.

### Cadastro do Fornecedor

- Caso o fornecedor não seja automaticamente reconhecido ou precise ser cadastrado, utilize as opções `Participante > Cadastrar Participante`.

### Cadastro ou Referência de Produtos

::steps{level=5}

##### Referenciar Produto
   - Se um produto já existe no cadastro, mas não foi automaticamente reconhecido, utilize a opção `Referenciar Produto`. Isso associa o produto do XML ao cadastro existente, corrigindo a pendência.

##### Cadastrar Produto
   - Caso o produto não exista no sistema, utilize a opção `Cadastrar Produto` para realizar o novo cadastro diretamente pela tela de pendências.

##### Editar Produto
   - Se precisar ajustar algum detalhe no cadastro do produto, como preço ou descrição, utilize a opção `Editar Produto`.

##### Atualizar NCM
   - **NCM Divergente:** Caso o NCM do produto no XML seja diferente do cadastrado no sistema, o campo NCM ficará destacado em vermelho. Neste caso, utilize a opção `Atualizar NCM` para corrigir a informação no sistema.
::

### Gerar Lançamento

- Clique em **Gerar Lançamento**. O sistema abrirá a **tela de Documentos**.
- Selecione o tipo de documento adequado para a operação:

  - **Recebimento Combustível p/ Uso e Consumo**
  - **Recebimento Mercadorias Compra p/ Revenda**
  - **Recebimento Mercadorias p/ Ativo Imobilizado**

### Precificação e Edição

- A nota fiscal será exibida na página inicial para a etapa de **precificação**.
- **Edite a nota** para visualizar uma visão geral com todos os custos e encargos detalhados por item.
- Inclua custos adicionais, como diferença de alíquota e outros encargos, e realize a precificação conforme necessário.
- Após a etapa de precificação, **salve a nota**.

### Processamento

- Defina os **parâmetros financeiros** e os **prazos de pagamento**.
- **Observação:** Apenas após o processamento, o sistema gerará a entrada da NF.

::

::card

#title
:icon{name="fluent:person-support-24-filled"} Precisa de ajuda e não encontrou aqui?
#description
Entre em contato, estamos disponíveis para ajudar você com qualquer dúvida ou problema que possa ter.

---

- :icon{name="akar-icons-whatsapp-fill"} **WhatsApp:** [(34) 99771-3731](https://wa.me/trilinksoftware)
- :icon{name="teenyicons:envelope-solid"} **E-mail:** [equipe@trilinksoftware.com.br](mailto:equipe@trilinksoftware.com.br)

::
