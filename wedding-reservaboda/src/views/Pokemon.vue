<template>
  <div v-if="pokemons.length" class="flex items-center justify-center min-h-screen bg-gradient-to-r from-black-300 to-black-300">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      <div 
        v-for="pokemon in pokemons" 
        :key="pokemon.id" 
        class="bg-white shadow-lg rounded-lg p-6 text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl"
      >
        <h1 class="text-xl font-bold text-gray-800 mb-2">{{ pokemon.name }}</h1>
        <img 
          :src="pokemon.sprites.front_default" 
          alt="Imagen del Pokémon" 
          class="mx-auto mb-2 w-32 h-32 rounded-lg shadow-md" 
        />
        <p class="text-gray-600">ID: {{ pokemon.id }}</p>
        <p class="text-gray-600">Altura: {{ pokemon.height / 10 }} m</p>
        <p class="text-gray-600">Peso: {{ pokemon.weight / 10 }} kg</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      pokemons: [],
    };
  },
  created() {
    const ids = Array.from({ length: 10 }, (_, i) => Math.floor(Math.random() * 898) + 1); // Obtén 10 IDs aleatorios
    const requests = ids.map(id => axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`));

    axios.all(requests)
      .then(axios.spread((...responses) => {
        this.pokemons = responses.map(response => response.data);
      }))
      .catch(error => console.error(error));
  }
};
</script>

<style scoped>
/* Fondo de degradado */
.bg-gradient-to-r {
  background-image: linear-gradient(to right, #522f21, #b8620d);
}

/* Estilo para el contenedor de cada Pokémon */
.shadow-lg {
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

/* Efecto hover con zoom */
.transform {
  transition: transform 0.5s ease-in-out;
}

.hover\:scale-105:hover {
  transform: scale(1.05);
}

.hover\:shadow-2xl:hover {
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
}
</style>
