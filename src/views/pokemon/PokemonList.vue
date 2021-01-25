<template>
  <div class="list-group-wrapper">
    <ul>
      <pokemon-item
        v-for="pokemon in pokemons"
        :key="pokemon.id"
        :name="pokemon.name"
        :url="pokemon.url"
      ></pokemon-item>
    </ul>
  </div>
</template>

<script>
import PokemonItem from "../../components/pokemons/PokemonItem";

export default {
  data() {
    return {
      isLoading: false,
    };
  },
  created() {
    this.loadPokemons(false);
  },
  mounted() {
    this.scroll();
  },
  components: {
    PokemonItem,
  },
  computed: {
    pokemons() {
      return this.$store.getters["pokemons/pokemons"];
    },
  },
  methods: {
    scroll() {
      window.onscroll = () => {
        let bottomOfWindow =
          Math.max(
            window.pageYOffset,
            document.documentElement.scrollTop,
            document.body.scrollTop
          ) +
            window.innerHeight ===
          document.documentElement.offsetHeight;

        if (bottomOfWindow) {
          this.loadPokemons();
        }
      };
    },
    async loadPokemons(refresh = false) {
      this.isLoading = true;
      try {
        await this.$store.dispatch("pokemons/loadPokemons", {
          forceRefresh: refresh,
        });
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