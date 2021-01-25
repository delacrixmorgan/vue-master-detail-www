import axios from "axios";
// import PokemonJson from "../../assets/json/pokemon.json"

export default {
    namespaced: true,
    state() {
        return {
            pokemons: [],
            selectedPokemon: null
        };
    },
    getters: {
        pokemons(state) {
            return state.pokemons;
        },
        selectedPokemon(state) {
            return state.selectedPokemon;
        }
    },
    actions: {
        async loadPokemons(context, payload) {
            const size = context.state.pokemons.length
            axios.get('/pokemon?limit=10&offset=' + size)
                .then(result => {
                    context.commit('setPokemons', result.data.results);
                })
                .catch(error => console.log(error))

            if (!payload.forceRefresh && !context.getters.shouldUpdate) {
                return;
            }
        },
        async getPokemon(context, payload) {
            const id = payload.id
            axios.get('/pokemon/' + id)
                .then(result => {
                    context.commit('setSelectedPokemon', result.data);
                })
                .catch(error => console.log(error))
        }
    },
    mutations: {
        setPokemons(state, payload) {
            payload.forEach((pokemon) => {
                // console.log(pokemon)
                state.pokemons.push(pokemon)
            })
        },
        setSelectedPokemon(state, payload) {
            // console.log(payload)
            state.selectedPokemon = payload;
        }
    }
};
