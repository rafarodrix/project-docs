---
title: Certificado
description: Se você está enfrentando problemas erro 2148073481 ao usar o certificado A3 no Windows 11 ao fazer download do XML na sefaz, siga os passos abaixo para solucionar o problema.
---

::steps
### Acesse o Painel de Controle

1. Pressione `Win + S` e procure por **Painel de Controle**.
2. Escolha a opção **Opções da Internet**.
3. Na janela de **Opções da Internet**, vá até a aba **Avançadas**.
4. No bloco de **Configurações**, role até o final da lista.
5. Configure as opções conforme mostrado na imagem abaixo:

<img src="/img/duvidas/suporte/erro-2148073481/001.png" alt="Configurações Avançadas do Internet Explorer" style="width: 100%; max-width: 400px;">

### Remoção de Certificados Corrompidos

1. Pressione `Win + R` e digite `certlm.msc` para abrir a interface de gerenciamento de certificados.
   - Caso o comando não funcione, utilize `certmgr.msc`.
2. Remova os certificados mostrados na imagem abaixo:

<img src="/img/duvidas/suporte/erro-2148073481/002.png" alt="Configurações Avançadas do Internet Explorer" style="width: 100%; max-width: 700px;">

### Instalação das Cadeias de Certificados

1. Execute como **Administrador** o arquivo [InstaladorCadeias_1.0.2.0.exe](https://trilinksoftware.com.br/download/erro-certificado-a3/InstaladorCadeias_1.0.2.0.exe)

2. Clique em **Instalar** e aguarde o término do processo.

### Correção do TLS

1. Execute o arquivo [FixCrypto_TLS1_2_Windows.reg](https://trilinksoftware.com.br/download/erro-certificado-a3/FixCrypto_TLS1_2_Windows.reg) para ajustar as configurações do protocolo TLS.

### Instalação de Certificados

1. Descompacte o arquivo [CA.zip](https://trilinksoftware.com.br/download/erro-certificado-a3/CA.zip).
2. Execute os seguintes arquivos:
   - `ac soluti ssl ev.cer`
   - `Raiz-icp-brasil v10.cer`

### Reinicie o Computador

Após seguir todos os passos, reinicie a máquina. Teste a comunicação com a SEFAZ para garantir que o problema foi resolvido.

---
::card

#title
:icon{name="fluent:person-support-24-filled"} Precisa de ajuda e não encontrou aqui?
#description
Entre em contato, estamos disponíveis para ajudar você com qualquer dúvida ou problema que possa ter.

---

- :icon{name="akar-icons-whatsapp-fill"} **WhatsApp:** [(34) 99771-3731](https://wa.me/trilinksoftware)
- :icon{name="teenyicons:envelope-solid"} **E-mail:** [equipe@trilinksoftware.com.br](mailto:equipe@trilinksoftware.com.br)

::
