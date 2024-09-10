---
title: Integração Sitef
description: Portal Sitef
---

::steps

### Portal do desenvolvedor

Acesse o [portal do desenvolvedor](https://dev.softwareexpress.com.br/), onde você encontrará a documentação dos produtos diretamente na página inicial ou pelo menu lateral.
Para conhecer melhor o portal, assista a este [vídeo explicativo](https://youtu.be/stESSU_ONa8).

1. Acesse o portal e clique em **Entrar**.
2. Selecione a opção **Cadastre-se**.
3. Preencha os dados solicitados, tanto pessoais quanto da empresa.
4. Pronto! O acesso está criado. **Importante**: este acesso é exclusivo para profissionais da área técnica.

- **Login**: equipe@trilinksoftware.com.br
- **Senha**: "Padrao"

### Passos para integração

1. **Crie um acesso no portal**: Com a documentação em mãos, o próximo passo é o desenvolvedor criar um acesso no portal e iniciar as configurações necessárias.
2. **Passe pelo processo de certificação**: À medida que a integração avança, nossa equipe de suporte estará à disposição para guiá-lo no processo de certificação, essencial para homologar o sistema da sua loja.
3. **Entre em produção**: Após a homologação, sua loja estará pronta para operar plenamente.

### SiTef

As bibliotecas CliSiTefI e CliSiTef oferecem uma interface simplificada para integração com o servidor SiTef, que gerencia uma ampla gama de serviços de pagamento. A integração é realizada por meio de rotinas (APIs) que permitem à automação comercial configurar e gerenciar transações de pagamento de forma eficiente.

**Funcionamento Básico:**
- **Configuração Inicial**: Configure o terminal de vendas com a função `ConfiguraIntSiTefInterativo`. Essa configuração é necessária apenas uma vez, a menos que haja mudanças específicas.
- **Início da Transação**: Inicie a transação com a função `IniciaFuncaoSiTefInterativo`. Se o retorno for 10000, continue o processo com `ContinuaFuncaoSiTefInterativo` até que o retorno seja 0 (sucesso) ou outro valor indicando interrupção.
- **Confirmação da Transação**: Após a transação ser bem-sucedida, confirme a operação com `FinalizaFuncaoSiTefInterativo`, dependendo da impressão correta do cupom TEF.

Para mais detalhes, acesse o [guia de introdução ao SiTef](https://dev.softwareexpress.com.br/docs/sitef-interface-simplificada/introducao).

### Introdução ao m-SiTef

O m-SiTef é um aplicativo desenvolvido pela Software Express para a plataforma Android, compatível com celulares, tablets e POS. Ele realiza transações TEF através do servidor SiTef, integrando a biblioteca CliSiTef para facilitar a interação do integrador com as funcionalidades do sistema, sem a necessidade de controlar o fluxo completo das transações.

Mais informações estão disponíveis no [guia de introdução ao m-SiTef](https://dev.softwareexpress.com.br/docs/m-sitef/m-SiTef).

### Suporte

Se precisar de mais orientações, entre em contato com nosso suporte:

- **Telefone**: +55 (11) 3170 5300
- **Telefone**: +55 (11) 4766-8000

### Outros Links

Acesse o [portal do Cliente](https://portaldocliente.softwareexpress.com.br/Login)

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
