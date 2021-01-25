import Vue from 'vue'
import Vuex from 'vuex'

import pokemonModule from './modules/pokemons.js'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    pokemons: pokemonModule
  },
  state: {
  },
  mutations: {
  },
  actions: {
  }
})
