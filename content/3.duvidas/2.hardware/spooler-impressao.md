---
title: Spooler de impressão
description: Aqui estão algumas soluções que você pode tentar para resolver o problema com Spooler de impressão
---

O spooler de impressão pode parar de funcionar por diversos motivos, como drivers corrompidos, filas de impressão travadas ou problemas com o próprio serviço do spooler. Este guia vai te ajudar a corrigir esses problemas manualmente ou criar um arquivo `.bat` que automatiza o processo de limpeza e reinício do spooler.

## Passos para Solução Manual

### 1. **Reiniciar o Spooler de Impressão**

1. Pressione `Win + R`, digite `services.msc` e pressione `Enter`.
2. Encontre o serviço **Spooler de Impressão**.
3. Clique com o botão direito e selecione **Reiniciar**.
4. Verifique se o problema foi resolvido.

### 2. **Excluir a Fila de Impressão**

1. Pressione `Win + R`, digite `C:\Windows\System32\spool\PRINTERS` e pressione `Enter`.
2. Exclua todos os arquivos dentro da pasta **PRINTERS**.
3. Reinicie o serviço do spooler (veja o passo anterior).

### 3. **Verificar Configurações de Inicialização do Spooler**

1. Acesse o **Gerenciador de Serviços** (`services.msc`) novamente.
2. Clique com o botão direito no **Spooler de Impressão** e vá em **Propriedades**.
3. Em **Tipo de inicialização**, selecione **Automático**.
4. Clique em **Aplicar** e **OK**.

### 4. **Atualizar Drivers de Impressora**

1. Pressione `Win + X` e selecione **Gerenciador de Dispositivos**.
2. Expanda **Filas de Impressão**.
3. Clique com o botão direito na sua impressora e selecione **Atualizar Driver**.
4. Se isso não funcionar, desinstale o driver e baixe a versão mais recente do site do fabricante.

### 5. **Verificar Compatibilidade com Windows 11**

- Se sua impressora utiliza drivers mais antigos, baixe a versão mais recente compatível com o Windows 11 no site do fabricante.

### 6. **Reparar Arquivos Corrompidos do Sistema**

1. Abra o **Prompt de Comando** como administrador.
2. Digite o seguinte comando para verificar e reparar arquivos corrompidos:
   ```
   sfc /scannow
   ```
3. Aguarde a conclusão e reinicie o computador.

### 7. **Restaurar o Sistema**

Se o problema começou após uma atualização recente, você pode tentar restaurar o sistema para um ponto anterior:

1. Pressione `Win + R`, digite `rstrui` e siga as instruções para restaurar o sistema.

### 8. **Reinstalar o Serviço de Spooler**

1. Abra o **Prompt de Comando** como administrador e digite os seguintes comandos:
   ```
   sc config spooler depend= RPCSS
   sc config spooler start= auto
   net start spooler
   ```
2. Isso redefine as dependências e configurações de inicialização do spooler.

---

## Automação com um Arquivo .bat

Você pode automatizar o processo de limpeza da fila de impressão e reinicialização do spooler criando um arquivo `.bat`. Isso é útil para resolver o problema com apenas um clique.

### Como Criar um Arquivo `.bat`

1. Abra o **Bloco de Notas** no Windows (`Win + R`, digite `notepad`, e pressione `Enter`).
2. Copie e cole o seguinte código:

```batch
@echo off
echo Parando o serviço de spooler de impressão...
net stop spooler

echo Limpando a fila de impressão...
cd %systemroot%\system32\spool\PRINTERS
del /f /s *.SHD
del /f /s *.SPL

echo Reiniciando o serviço de spooler de impressão...
net start spooler

echo O problema com a fila de impressão foi corrigido.
pause
exit
```

3. No **Bloco de Notas**, clique em **Arquivo > Salvar Como**.
4. No campo **Nome do arquivo**, insira `corrigir_impressao.bat`.
5. No campo **Tipo**, selecione **Todos os Arquivos**.
6. Salve o arquivo na área de trabalho ou em outra pasta de fácil acesso.

### Como Executar o Arquivo `.bat`

1. Navegue até o local onde o arquivo `.bat` foi salvo.
2. Clique com o botão direito no arquivo e selecione **Executar como administrador**.
3. O script irá parar o serviço de spooler, limpar a fila de impressão e reiniciar o serviço automaticamente.

---

## Resumo

Este guia oferece duas formas de corrigir problemas com o spooler de impressão no Windows 11:

1. **Correção Manual**: Passos detalhados para reiniciar o spooler, limpar a fila de impressão e atualizar drivers.
2. **Automação com Script**: Instruções para criar um arquivo `.bat` que automatiza o processo de correção.

Se nenhuma dessas soluções funcionar, você pode verificar logs de erros específicos ou procurar por atualizações no Windows Update que possam corrigir o problema.

---

## Precisa de Ajuda?

Se você não encontrou a solução para o seu problema ou precisa de mais assistência, entre em contato com nossa equipe.

- :icon{name="akar-icons-whatsapp-fill"} **WhatsApp:** [(34) 99771-3731](https://wa.me/trilinksoftware)
- :icon{name="teenyicons:envelope-solid"} **E-mail:** [equipe@trilinksoftware.com.br](mailto:equipe@trilinksoftware.com.br)

---

Este manual foi criado para resolver problemas comuns com o spooler de impressão no Windows e facilitar o processo através de automação.

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
