export default defineAppConfig({
  shadcnDocs: {
    site: {
      name: 'Trilink Software',
      description: 'Syspro ERP é um sistema completo, flexível, que acompanha o crescimento da sua empresa.',
    },
    theme: {
      customizable: true,
      color: 'slate',
      radius: 0.5,
    },
    header: {
      title: 'Trilink Software',
      showTitle: true,
      darkModeToggle: true,
      logo: {
        light: '/logo.svg',
        dark: '/logo-dark.svg',
      },
      experimental: {
        appManifest: false  // ou false se você quiser desativar
      },
      nav: []
      // links: [{
      //   icon: 'lucide:github',
      //   to: 'https://github.com/ZTL-UwU/shadcn-docs-nuxt',
      //   target: '_blank',
      // }],
    },
    aside: {
      useLevel: true,
      collapse: true,
      folderStyle: 'tree',
    },
    main: {
      breadCrumb: true,
      showTitle: true,
    },
    footer: {
      credits: 'Copyright Trilink Software © 2025',
      links: [{
        title: 'Instagram',
        icon: 'lucide:instagram',
        to: 'https://www.instagram.com/trilinksoftwares',
        target: '_blank',
      }, {
        title: 'YouTube',
        icon: 'lucide:youtube',
        to: 'https://www.youtube.com/channel/UCcH7GYfmvIE9_UlWAUH8h2Q',
        target: '_blank',
      }, {
        title: 'WhatsApp',
        icon: 'lucide:message-circle',
        to: 'https://wa.me/trilinksoftware',
        target: '_blank',
      }],
    },
    toc: {
      enable: true,
      title: 'Nesta página',
      links: [{
        title: 'Instagram',
        icon: 'lucide:instagram',
        to: 'https://www.instagram.com/trilinksoftwares',
        target: '_blank',
      }, {
        title: 'YouTube',
        icon: 'lucide:youtube',
        to: 'https://www.youtube.com/channel/UCcH7GYfmvIE9_UlWAUH8h2Q',
        target: '_blank',
      }, {
        title: 'WhatsApp',
        icon: 'lucide:message-circle',
        to: 'https://wa.me/trilinksoftware',
        target: '_blank',
      }],
    },
    search: {
      enable: true,
      inAside: true,
      style: 'input', //inclui barra de pesquisa
      placeholder: 'Pesquisar', // coloca nome defiinido na pesquisa
      placeholderDetailed: 'Pesquisar na Documentação', // coloca nome defiinido na pesquisa
    }
  }
});