// middleware/testMiddleware.ts
import { Context } from '@nuxt/types'

export default function ({ redirect }: Context) {
  console.log('Middleware de teste executado') // Verifique se este log aparece no terminal
  return redirect('/login') // Redireciona para a página de login para testar o middleware
}
