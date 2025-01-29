---
title: Venda Particular
description: Cadastro de Participante
---

### Liberação de Limite de Crédito

A liberação de limite de crédito é uma ferramenta que minimiza o risco ao definir um valor de compra específico para cada cliente. Esta funcionalidade é crucial para empresas que concedem crédito, garantindo um controle eficiente sobre os valores pendentes.

#### Como funciona?

Ao utilizar a verificação do limite de crédito, você define um valor máximo que o cliente pode acumular em pendências de pagamento. Isso evita que os clientes excedam sua capacidade de pagamento, reduzindo o risco de inadimplência.

> Se o limite de crédito for ultrapassado, o sistema solicitará o usuário e a senha para liberação.

#### Configurações de Limite de Crédito

Para configurar a verificação de limite de crédito, siga estes passos:

1. **Acesse o menu:** `Cadastros > Participante > Participante`.
2. **Selecione o cliente:** Escolha o cadastro do cliente que deseja configurar.
3. **Abra a aba:** Clique na aba **Venda Particular**.

![Tela cadastro de participante pessoa física](/img/documentacao/participante/particular/001.gif)

4. **Incluir novo registro:** Clique no botão **Incluir**.
5. **Adicionar a empresa:** Selecione ou adicione a empresa associada ao cliente.
6. **Definir limite de crédito:** Insira o valor do limite de crédito desejado.
7. **Salvar as alterações:** Primeiro, salve a inclusão do limite de crédito e, em seguida, salve o cadastro do participante.

![Tela cadastro de participante pessoa física após configuração](/img/documentacao/participante/particular/002.gif)


::alert{type="note"}
:badge[Exemplo]{type="info"}
No exemplo acima, foi estabelecido um limite de crédito de **R$1.000,00** para o cliente. Isso significa que ele pode acumular compras ou dívidas até esse valor. À medida que o cliente faz pagamentos ou quita suas obrigações, o limite disponível é restaurado, permitindo novas transações dentro desse valor.
::

#### Definição dos Campos

- **Dias de Vencimento:** Configura uma data de vencimento fixa para todos os títulos ou documentos financeiros gerados no sistema. Por exemplo, definir o vencimento para o dia 7 faz com que cada novo título criado tenha essa data de vencimento. Isso padroniza os prazos de pagamento, facilitando a organização financeira.
  
  **Informação:** Caso o campo fique como "0", as datas de vencimento seguem o definido no plano de pagamento.

- **Limite:** Define um limite de crédito para o cliente.
- **Limite Cheque:** Define um limite de crédito específico para compras com cheque.
- **Liberar Crédito de Cheque para Venda?** (Sim/Não)
- **Incluir Carência na Cobrança de Juros?** (Sim/Não)
- **Taxa de Multa:** Define uma porcentagem de multa para o cliente.
- **Taxa de Juros:** Define uma porcentagem de juros para o cliente.
- **Carência de Juros:** Define um período de carência para a cobrança de juros.
- **Desconto:** Define uma porcentagem de desconto para o cliente.
- **Empresa:** Indica a empresa à qual o cliente pertence.

::alert{type="warning"}
:badge[Aviso]{type="warning" } 
 As configurações são geralmente realizadas por um administrador. Se você não tiver a autorização necessária, entre em contato com seu administrador..
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
