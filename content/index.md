---
title: Trilink Software
navigation: false
layout: page
main:
  fluid: true
---

<style>

  .card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border-radius: 12px;
    padding: 1.5rem;
    background-color: rgba(255, 255, 255, 0.05);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  }

  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
  }

  .card-title {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  .card-icon {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    color: #00b4d8;
  }

  .card-group {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
</style>

::hero
#title
<span>Central de Ajuda SYSPRO ERP</span>
:br

#description
<span>
Encontre tudo o que você precisa para dominar o SYSPRO ERP de forma rápida e segura. Explore guias, tutoriais passo a passo e recursos valiosos para otimizar sua experiência e tirar o máximo proveito do sistema.
</span>

::
  
::card-group
  ::card
  ---
  class: card
  title: Documentação
  icon: lucide:book-open
  to: /docs/_documentacao
  ---
  Nesta seção você vai encontrar a documentação técnica e funcional do SYSPRO ERP, com exemplos práticos e tutoriais para todos os módulos.
  ::

  ::card
  ---
  class: card
  title: Dúvidas Frequentes
  icon: mdi:frequently-asked-questions
  to: /duvidas/_duvidas
  ---
  Nesta seção você vai aprender soluções para problemas comuns, respostas a dúvidas frequentes e melhores práticas no uso do sistema.
  ::

  ::card
  ---
  class: card
  title: Treinamentos
  icon: lucide-album
  to: /treinamentos/_treinamentos
  ---
  Acesse tutoriais detalhados para usar as principais funcionalidades do SYSPRO ERP com exemplos práticos.
  ::

  ::card
  --- 
  class: card
  title: Suporte
  icon: lucide:rocket
  to: /suporte/guia-suporte
  ---
  Aqui, você terá acesso a informações detalhadas sobre horários de atendimento, procedimentos para abertura de chamados.
 ::

  ::card
  ---
  class: card
  title: Downloads
  icon: material-symbols-light:cloud-download-rounded
  to: /downloads
  ---
  Links para download de atualizações, pacotes, Drivers de instalação e complementos de integração.
  ::

  ::card
  ---
  class: card
  title: Novidades de Versão
  icon: material-symbols:release-alert-rounded
  to: /release
  ---
  Mantenha-se atualizado com as últimas melhorias, correções e novos recursos implementados no SYSPRO ERP.
  ::
::
