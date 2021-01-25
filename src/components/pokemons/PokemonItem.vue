<template>
  <li>
    <h3>{{ name }}</h3>
    <router-link :to="pokemonDetailsLink"><button>View Details</button></router-link>
  </li>
</template>

<script>
export default {
  props: ["name", "url"],
  computed:{
    pokemonDetailsLink(){
      const urlParameters = this.url.split("/");
      const id = urlParameters[urlParameters.length-2];

      return '/pokemon/'+id;
    }
  }
};
</script>