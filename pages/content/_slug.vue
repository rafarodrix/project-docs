<template>
  <div>
    <nuxt-content :document="doc" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import { useAsync } from '@nuxtjs/composition-api'

export default defineComponent({
  middleware: 'auth', // Middleware deve ser exatamente o nome 'auth'

  setup() {
    console.log('Página de conteúdo carregada') // Verifica se a página é carregada

    const doc = ref(null)
    
    useAsync(async () => {
      const { $content } = await import('@nuxt/content')
      doc.value = await $content().fetch()
    })

    return { doc }
  }
})
</script>
