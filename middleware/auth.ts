// middleware/auth.ts
import { Context } from '@nuxt/types'

export default function ({ store, redirect }: Context) {
  console.log('Middleware auth executado') // Verifica se o middleware é executado
  console.log('Estado de autenticação:', store.state.authenticated) // Verifica o estado de autenticação

  // Verifica se o usuário está autenticado
  if (!store.state.authenticated) {
    return redirect('/login')
  }
}
