<template>
    <div class="support-card">
      <h2>
        <Icon name="fluent:person-support-24-filled" /> Precisa de ajuda e não encontrou aqui?
      </h2>
      <p>
        Entre em contato com nossa equipe de suporte.
        <br /><br />
        <Icon name="teenyicons:envelope-solid" /> Email: equipe@trilinksoftware.com.br
        <br />
        <Icon name="ic:round-phone-iphone" /> Telefone: (34) 99771 3731
      </p>
    </div>
  </template>
  
  <script setup>
  import Icon from 'vue-icon-component' // Substitua com o componente de ícone que você está usando, como FontAwesome ou qualquer outro.
  </script>
  
  <style scoped>
  .support-card {
    border: 1px solid #ddd;
    padding: 20px;
    border-radius: 8px;
    background-color: #f9f9f9;
    margin-top: 20px;
  }
  
  .support-card h2 {
    display: flex;
    align-items: center;
    font-size: 1.5em;
  }
  
  .support-card h2 Icon {
    margin-right: 10px;
  }
  
  .support-card p {
    font-size: 1.2em;
    line-height: 1.5;
  }
  
  .support-card p Icon {
    margin-right: 10px;
  }
  </style>
  