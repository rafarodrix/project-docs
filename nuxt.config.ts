// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ['shadcn-docs-nuxt'],
  compatibilityDate: '2024-07-06',

  content: {
    navigation: {
      fields: ['publishedAt']
    },
    markdown: {
      remarkPlugins: ['remark-math'],
      rehypePlugins: [['rehype-katex', { strict: false }]]
    }
  },

  css: [
    'katex/dist/katex.min.css'
  ],

  vue: {
    compilerOptions: {
      isCustomElement: tag => ['mo', 'mtext', 'annotation', 'Mover', 'Mfrac', 'Mrow'].includes(tag)
    }
  }
});
