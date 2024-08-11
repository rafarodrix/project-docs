---
title: Produto
description: Este manual fornece as informações básicas necessárias para realizar o cadastro de produtos no sistema.
---

O cadastro de produtos é essencial para o funcionamento do sistema, permitindo a inserção e gerenciamento de informações detalhadas sobre os itens disponíveis para venda, fabricação ou estoque. A seguir, apresentamos um guia passo a passo para o cadastro de produtos.

## Passo a Passo

#### Acessando o Menu de Produtos

1. No menu principal, navegue até `Estoque > Produto`.

2. Ao clicar em "Produto", você será redirecionado para a tela de gerenciamento de produtos.

#### Criando um Novo Produto

1. Na tela de "Produto", clique no botão **Incluir** para criar um novo produto.

## Menu superior

::steps

### Aba Geral

   - **Cód. Auxiliar**: Informe um código auxiliar, se aplicável.
   - **Situação**: Selecione a situação do produto (Ativo, Inativo).
   - **Departamento**: Selecione o departamento ao qual o produto pertence.
   - **Descrição**: Informe a descrição completa do produto.
   - **Resumida**: Informe uma descrição resumida para o produto.
   - **Tipo**: Selecione o tipo de produto (Mercadoria, Serviço, etc.).
   - **NCM**: Informe o NCM (Nomenclatura Comum do Mercosul) do produto.

## Menu Inferior

### Aba Comercial

A aba **Comercial** é fundamental para definir as configurações de preço, tributação e margem de lucro do produto. Aqui você pode gerenciar os preços de venda, os custos de aquisição e reposição, e os parâmetros de lucro do produto.

1. Na tela de "Produto", após preencher os campos na aba **Geral**, vá para a aba **Comercial**.

2. **Tributação**:
   - **Tributação**: Selecione o tipo de tributação que se aplica ao produto. Esse campo é obrigatório e define como os impostos serão calculados e aplicados.
   - **Pauta**: Informe a pauta tributária, se aplicável.

3. **Margem de Lucro e Preços**:
   - **Lucro Bruto Projetado (%)**: Informe o percentual de lucro bruto projetado para o produto.
   - **Lucro Líquido Projetado (%)**: Informe o percentual de lucro líquido projetado.
   - **Lucro Bruto Realizado (%)**: Será calculado automaticamente na entrada da nota ou na precificação.
   - **Lucro Líquido Realizado (%)**: Será calculado automaticamente na entrada da nota ou na precificação.
   - **Desconto Máximo (%)**: Defina o percentual máximo de desconto permitido para este produto.
   - **Desconto Padrão (%)**: Defina o percentual de desconto padrão que será aplicado.

4. **Custos**:
   - **Custo Aquisição**: Será calculado automaticamente na entrada da nota ou informe manualmente caso esteja cadastrando manualmente.
   - **Custo Reposição**: Será calculado automaticamente na entrada da nota ou informe manualmente caso esteja cadastrando manualmente. Pode ser diferente do custo de aquisição devido a mudanças de mercado.
   - **Custo Efetivo**: Será calculado automaticamente na entrada da nota ou informe manualmente caso esteja cadastrando manualmente. Considera todas as variáveis associadas ao custo do produto.
   - **Custo Médio**: Será calculado automaticamente na entrada da nota ou informe manualmente caso esteja cadastrando manualmente. É calculado considerando o estoque atual e os custos de compra anteriores.
   - **Custo XML**: Será calculado automaticamente na entrada da nota.

5. **Vendas**:
   - **Venda Atual**: Informe o preço de venda atual do produto. Será calculado automaticamente na entrada da nota ou informe manualmente caso esteja cadastrando manualmente.
   - **Venda Calculada**: Este campo pode mostrar o preço de venda calculado com base nas margens e custos inseridos. Será calculado automaticamente na entrada da nota ou informe manualmente caso esteja cadastrando manualmente.
   - **Venda PMZ**: Informe o preço de venda mínimo (PMZ) permitido. Será calculado automaticamente na entrada da nota ou informe manualmente caso esteja cadastrando manualmente.
   - **Venda Anterior**: Informe o preço de venda anterior, se aplicável.

6. **Empresas**:
   - **Empresa**: Selecione ou adicione as empresas para as quais essas configurações de preço e margem serão aplicadas.

7. Após configurar todas as informações necessárias, clique em **Salvar** para concluir as configurações da aba **Comercial**.

Esta aba permite um controle detalhado sobre os preços e margens de lucro dos produtos, garantindo que todas as variáveis financeiras estejam corretamente configuradas para as operações comerciais.

### Aba EAN

A aba **EAN** é utilizada para cadastrar e gerenciar os códigos de barras (EAN) associados aos produtos, ela oferece um controle sobre os códigos de barras vinculados ao produto, garantindo que não haja duplicidade de códigos e que todas as operações que utilizam EAN estejam configuradas corretamente para o funcionamento do sistema.

1. Na tela de "Produto", vá para a aba **EAN**.

2. **Configuração do Código EAN**:
   - **EAN**: Informe o código de barras EAN do produto.
   - **Unidade**: Selecione a unidade de medida associada ao EAN. Isso é especialmente importante para produtos vendidos em diferentes unidades (por exemplo, kg, unidades, litros).
   - **Sigla Unid**: A sigla da unidade será preenchida automaticamente ao selecionar a unidade de medida.
   - **Fator Venda**: O fator de venda será preenchido automaticamente ao selecionar a unidade de medida.

3. **Salvando o Código EAN**:
   - Após preencher todos os campos necessários, clique em **Salvar** para concluir o cadastro do EAN.
   - O código EAN agora estará associado ao produto e poderá ser utilizado em todas as operações de vendas e controle de estoque.

### Aba Quantidade

A aba **Quantidade** é utilizada para configurar e gerenciar as quantidades mínimas, máximas e o estoque atual dos produtos dentro de diferentes empresas e grupos de estoque. Isso permite um controle eficiente do inventário, garantindo que os níveis de estoque estejam sempre otimizados para atender à demanda.

Esta aba é essencial para o controle do inventário, assegurando que o estoque esteja ajustado às necessidades da empresa, evitando tanto a falta quanto o excesso de produtos.

1. Na tela de "Produto", vá para a aba **Quantidade**.

2. **Configuração de Quantidade**:
   - **Empresa**: Selecione a empresa à qual essa configuração de quantidade se aplica.
   - **Grupo Estoque**: Selecione o grupo de estoque onde o produto está localizado.
   - **Quantidade**: Informe a quantidade atual do produto em estoque.
   - **Mínima**: Defina a quantidade mínima de produto que deve estar em estoque. Este valor é importante para evitar rupturas de estoque.
   - **Máxima**: Defina a quantidade máxima de produto que deve ser mantida em estoque. Isso ajuda a evitar excesso de estoque, o que pode levar a desperdícios ou custos adicionais de armazenamento.
   - **Localização**: Informe a localização física do produto dentro do estoque, facilitando o processo de armazenamento e retirada.
   - **Informativo**: Este campo é carregado automaticamente do cadastro de grupo de estoque.
   - **Lote em uso (ativo)**: Indique se o lote está em uso ativo, ou seja, se é o lote que será vendido como padrão.

3. **Salvando as Configurações**:
   - Após preencher todos os campos necessários, clique em **Salvar** para concluir o cadastro das quantidades.
   - As quantidades agora estarão associadas ao produto e à empresa/grupo de estoque selecionados, permitindo um gerenciamento eficaz do inventário.

### Aba Unidades

A aba **Unidades** é utilizada para configurar e gerenciar as diferentes unidades de medida associadas aos produtos, como operações de entrada e saída, múltiplos de venda e ajustes de preços especiais.

Esta aba é crucial para empresas que precisam de flexibilidade e precisão no manejo de produtos em diferentes unidades de medida, garantindo que as operações de estoque e vendas sejam realizadas de maneira eficaz e precisa.

1. Na tela de "Produto", vá para a aba **Unidades**.

2. **Configuração de Unidade**:
   - **Operação**: Selecione o tipo de operação que será realizada com essa unidade (por exemplo, **Entrada** ou **Saída**). Isso define se a unidade configurada será utilizada para entrada de estoque ou para vendas.
   - **Unidade Procon**: Informe a unidade de medida padrão utilizada para as operações, conforme as exigências do Procon para emissão de etiquetas de gôndola.
   - **Fator Procon**: Informe o fator de conversão da unidade Procon, que será usado para ajustar quantidades e pesos conforme necessário para a emissão de etiquetas de gôndola.
   - **Preço Especial**: Se houver um preço especial vinculado a essa unidade, informe-o aqui.
   - **Valor de Venda**: Informe o valor de venda para a unidade de medida específica. Este campo é importante para garantir que o preço esteja correto para a unidade configurada.
   - **Peso (Kg)**: Informe o peso do produto na unidade configurada, se aplicável.
   - **Múltiplo de Venda**: Se o produto for vendido em múltiplos (por exemplo, pacotes, caixas), informe o múltiplo de venda. Isso permite que as vendas sigam um padrão de múltiplos, como 2, 4, 6 unidades, etc.

3. **Salvando a Configuração de Unidade**:
   - Após preencher todos os campos necessários, clique em **Salvar** para concluir o cadastro da unidade.
   - A unidade agora estará associada ao produto, permitindo operações precisas de entrada, saída e venda de acordo com as configurações definidas.

### Finalizando o Cadastro

1. Revise todas as informações inseridas.
2. Clique em **Salvar** para finalizar o cadastro do produto.
3. O produto agora estará disponível no sistema para todas as operações de venda, compra e estoque.

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
