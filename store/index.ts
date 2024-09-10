// store/index.ts
import { MutationTree } from 'vuex'

console.log('Vuex store carregado') // Verifique se a store está sendo carregada

export const state = () => ({
  authenticated: false
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  setAuthenticated(state, value: boolean) {
    console.log('setAuthenticated chamado com valor:', value) // Verifique se a mutação é chamada
    state.authenticated = value
  }
}
