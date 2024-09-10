<script lang="ts">
import { defineNuxtComponent } from '#imports'

export default defineNuxtComponent({
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      // Usuário e senha fixos
      const fixedEmail = 'rafaelrodrix@icloud.com'
      const fixedPassword = 'Trilink098'

      if (this.email === fixedEmail && this.password === fixedPassword) {
        // Autenticação bem-sucedida
        this.$store.commit('setAuthenticated', true) // Certifique-se de que esta mutação esteja correta
        this.$router.push('/')
      } else {
        // Exibe uma mensagem de erro
        alert('Usuário ou senha incorretos.')
      }
    }
  }
})
</script>
