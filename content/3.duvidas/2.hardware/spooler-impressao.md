---
title: Spooler de impressão
description: Se o spooler de impressão está parando sozinho no Windows 11, isso pode ser causado por vários motivos, como drivers de impressora corrompidos, configurações incorretas, ou até mesmo problemas no próprio serviço do spooler. Aqui estão algumas soluções que você pode tentar
---

### 1. **Reiniciar o Spooler de Impressão**
- Pressione `Win + R`, digite `services.msc` e pressione `Enter`.
- Encontre **Spooler de Impressão** na lista de serviços.
- Clique com o botão direito e selecione **Reiniciar**.
- Verifique se o problema persiste.

### 2. **Excluir Fila de Impressão**
- Pressione `Win + R`, digite `C:\Windows\System32\spool\PRINTERS` e pressione `Enter`.
- Exclua todos os arquivos na pasta **PRINTERS**.
- Reinicie o serviço de spooler de impressão seguindo o passo anterior.

### 3. **Verificar Configurações de Inicialização do Spooler**
- Acesse o **Gerenciador de Serviços** (services.msc) como no passo anterior.
- Clique com o botão direito no serviço **Spooler de Impressão** e selecione **Propriedades**.
- Em **Tipo de inicialização**, escolha **Automático**.
- Clique em **Aplicar** e depois em **OK**.

### 4. **Atualizar Drivers de Impressora**
- Vá até o **Gerenciador de Dispositivos** (`Win + X` > **Gerenciador de Dispositivos**).
- Expanda a seção **Filas de Impressão**, clique com o botão direito no dispositivo de impressão e selecione **Atualizar Driver**.
- Se o problema persistir, desinstale o driver de impressora e baixe a versão mais recente do site do fabricante.

### 5. **Verificar Problemas de Compatibilidade com o Windows 11**
- Às vezes, drivers antigos podem não ser totalmente compatíveis com o Windows 11.
- Baixe a versão mais recente do driver de impressora compatível diretamente do site do fabricante da impressora.

### 6. **Reparar Arquivos Corrompidos do Sistema**
- Abra o **Prompt de Comando** como administrador.
- Digite o seguinte comando para verificar e reparar arquivos corrompidos:  
  ```
  sfc /scannow
  ```
- Aguarde a conclusão e reinicie o computador.

### 7. **Restaurar o Sistema**
Se o problema começou recentemente após uma atualização ou instalação de software, você pode tentar restaurar o sistema para um ponto anterior:
- Pressione `Win + R`, digite `rstrui` e siga as instruções para restaurar o sistema.

### 8. **Reinstalar o Serviço de Spooler**
1. No **Prompt de Comando** (administrador), digite:
   ```
   sc config spooler depend= RPCSS
   sc config spooler start= auto
   ```
2. Depois, digite:
   ```
   net start spooler
   ```
3. Isso pode ajudar a reparar qualquer configuração errada do serviço.

Se essas opções não resolverem, pode ser necessário investigar logs de erro específicos ou verificar se há atualizações no Windows Update que possam corrigir o problema.
::card

#title
:icon{name="fluent:person-support-24-filled"} Precisa de ajuda e não encontrou aqui?
#description
Entre em contato, estamos disponíveis para ajudar você com qualquer dúvida ou problema que possa ter.

---

- :icon{name="akar-icons-whatsapp-fill"} **WhatsApp:** [(34) 99771-3731](https://wa.me/trilinksoftware)
- :icon{name="teenyicons:envelope-solid"} **E-mail:** [equipe@trilinksoftware.com.br](mailto:equipe@trilinksoftware.com.br)

::
