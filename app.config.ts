export default defineAppConfig({
  shadcnDocs: {
    site: {
      name: 'Trilink Software',
      description: 'Syspro ERP é um sistema completo, flexível, que acompanha o crescimento da sua empresa.',
    },
    theme: {
      customizable: true,
      color: 'blue',
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
      nav: [],
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
      credits: 'Copyright © 2024',
      // links: [{
      //   icon: 'lucide:github',
      //   to: 'https://github.com/ZTL-UwU/shadcn-docs-nuxt',
      //   target: '_blank',
      // }],
    },
    toc: {
      enable: true,
      title: 'Nesta página',
      // links: [{
      //   title: 'Star on GitHub',
      //   icon: 'lucide:star',
      //   to: 'https://github.com/ZTL-UwU/shadcn-docs-nuxt',
      //   target: '_blank',
      // }, {
      //   title: 'Create Issues',
      //   icon: 'lucide:circle-dot',
      //   to: 'https://github.com/ZTL-UwU/shadcn-docs-nuxt/issues',
      //   target: '_blank',
      // }],
    },
    search: {
      enable: true,
      inAside: true,
      style: 'input',
      placeholder: 'Pesquisar',
      placeholderDetailed: 'Pesquisar na Documentação',
    }
  }
});