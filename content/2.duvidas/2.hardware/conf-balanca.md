---
title: Configurações Balanças
description: Instalação da Balança no MGV6 e Configuração no Wi-Fi
---

::steps
### Instalação do MGV6

**Acesse o link para download do Software de balança MGV6**.
::button-link{right-icon="lucide:arrow-up-right" to="https://trilinksoftware.com.br/download/mgv6-toledo.zip"}
  Download MGV6
::
- Extraia os arquivos do **Winrar**.
- Execute o arquivo `InstalarMGV6.exe`.
- Siga as instruções de instalação:
  - Selecione a linguagem como **"Portuguese (Brazil)"**.
  - Avançe até finalizar a instalação.

### Passo 2: Configuração Inicial do MGV6

#### Criação de Nova Base de Dados
- Após a instalação, abra o **MGV6**.
- Selecione a opção para **criar uma nova configuração**.
- Configure a base de dados local no servidor do próprio MGV6, selecionando **"Criar nova base de dados"**.

#### Configuração de Loja e Balanças
- Adicione as lojas que utilizarão as balanças.
- Cadastre as balanças no sistema, especificando:
  - Modelo
  - Departamento
  - Tipo de comunicação (**Wi-Fi** neste caso)

### Passo 3: Configuração do Wi-Fi na Balança

#### Acesso ao Modo Programa da Balança
- Ligue a balança.
- Pressione a tecla **"Função"**, depois **"Modo Programa"**. 
- Digite a senha (geralmente **1234**) para entrar no modo de configuração.

#### Configuração da Rede Wi-Fi

##### Configuração de Rede
- Navegue até **"Ajustar parâmetros"** e vá até o item **"C20 - Comunicação de rede"**.
- Defina o tipo de comunicação como **Wi-Fi**.
- Configure a rede Wi-Fi:
  - **SSID**: Nome da rede Wi-Fi à qual a balança se conectará.
  - **Senha do Wi-Fi**: Digite a senha da rede Wi-Fi.
  - **Tipo de Segurança**: Selecione o tipo de segurança da rede (WPA2 é comum).

##### Configuração de IP
- Insira o **IP da balança**. Este deve ser um IP livre na rede do cliente, como **192.168.1.100**.
- Configure:
  - **Máscara de Sub-rede**: Normalmente `255.255.255.0` para redes domésticas.
  - **Gateway Padrão**: Endereço IP do roteador, como `192.168.1.1`.
  - **Porta**: Utilize a porta padrão ou uma configurada especificamente para a balança.

- Salve as configurações e saia do modo de programação.

### Passo 4: Configuração de IP no MGV6

#### Configuração de IP no Computador com MGV6
- No **MGV6**, vá até a configuração de loja e insira o **IP do computador** onde o MGV6 está instalado. Este IP deve ser o mesmo configurado na balança como destino para comunicação.

### Passo 5: Verificação e Teste

#### Verificação da Configuração
- Dentro do **MGV6**, verifique se a balança está comunicando corretamente ao clicar em **"Verificar balança"**.

#### Teste de Funcionalidade
- Realize um teste de pesagem e verifique se a etiqueta é impressa com as informações corretas e se a balança se comunica via Wi-Fi com o MGV6.

### Passo 6: Finalização

- Salve todas as configurações feitas tanto na balança quanto no MGV6.
- Certifique-se de que todos os cadastros de produtos, etiquetas e outras configurações necessárias estejam corretamente inseridos no sistema.

Este guia deve ajudar a configurar sua balança Toledo com o MGV6 usando uma conexão Wi-Fi. Se surgirem problemas, consulte a documentação específica do modelo de balança ou o suporte técnico da Toledo.

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
