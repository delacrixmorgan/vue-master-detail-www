<template>
  <div>
    <h3>Pokemon Detail</h3>
    <div v-if="pokemon">
      <h4>{{ pokemon.name }} Abilities</h4>
      <ul>
        <pokemon-ability
          v-for="abilities in pokemon.abilities"
          :key="abilities.ability.id"
          :name="abilities.ability.name"
          :url="abilities.ability.url"
        >
        </pokemon-ability>
      </ul>
    </div>
  </div>
</template>

<script>
import PokemonAbility from "../../components/pokemons/PokemonAbility";

export default {
  props: ["id"],
  created() {
    this.getPokemon(this.id);
  },
  components: {
    PokemonAbility,
  },
  computed: {
    pokemon() {
      return this.$store.getters["pokemons/selectedPokemon"];
    },
  },
  methods: {
    async getPokemon(id) {
      this.isLoading = true;
      try {
        await this.$store.dispatch("pokemons/getPokemon", { id: id });
      } catch (error) {
        this.error = error.message || "Something went wrong!";
      }
      this.isLoading = false;
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 40rem;
}
</style>