// nuxt.config.ts
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

  components: true,

  css: [
    'katex/dist/katex.min.css'
  ],

  vue: {
    compilerOptions: {
      isCustomElement: tag => ['mtext', 'mo', 'mrow', 'mover', 'annotation', 'semantics'].includes(tag)
    }
  }
});
