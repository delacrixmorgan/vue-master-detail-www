import Vue from 'vue'
import VueRouter from 'vue-router'
import PokemonList from '../views/pokemon/PokemonList.vue'
import PokemonDetail from '../views/pokemon/PokemonDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/pokemons'
  },
  {
    path: '/pokemons',
    component: PokemonList
  },
  {
    path: '/pokemon/:id',
    component: PokemonDetail,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router