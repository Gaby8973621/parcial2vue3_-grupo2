<template>
  <div class="relative h-screen flex">
    <!-- Botón para abrir/cerrar el menú -->
    <button 
      @click="toggleMenu" 
      class="absolute top-4 left-4 bg-gray-800 text-white p-2 rounded focus:outline-none z-50">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
      </svg>
    </button>
    
    <!-- Menú lateral -->
    <div 
      :class="isMenuOpen ? 'translate-x-0' : '-translate-x-full'" 
      class="fixed inset-y-0 left-0 w-64 bg-gradient-to-b from-nude-200 to-brown-400 text-white p-6 transition-transform duration-300 ease-in-out transform z-40 shadow-lg rounded-lg">
      <h2 class="text-lg font-semibold text-center mb-6">Menú</h2>
      <nav class="space-y-4">
        <router-link to="/">
          <button class="w-full bg-wine-600 hover:bg-wine-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 mb-2">
            Inicio
          </button>
        </router-link>
        <router-link to="/login">
          <button class="w-full bg-brown-600 hover:bg-brown-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 mb-2">
            Login
          </button>
        </router-link>
        <router-link to="/register">
          <button class="w-full bg-wine-600 hover:bg-wine-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 mb-2">
            Registro
          </button>
        </router-link>
        <router-link to="/contact">
          <button class="w-full bg-brown-600 hover:bg-brown-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 mb-2">
            Contacto
          </button>
        </router-link>
        <router-link to="/correo">
          <button class="w-full bg-brown-600 hover:bg-brown-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 mb-2">
            Correo Electrónico
          </button>
        </router-link>
        <router-link to="/pokemon/1">
          <button class="w-full bg-violet-300 hover:bg-violet-400 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
            Pokémon
          </button>
        </router-link>
      </nav>
    </div>

    <!-- Contenido principal -->
    <div 
    :class="isMenuOpen ? 'ml-64' : 'ml-0'"
    class="flex-1 transition-all duration-300 ease-in-out p-4">
      <div class="text-center mb-4">
        <div class="bg-wine-700 text-white p-6 rounded-lg shadow-md">
          <h1 class="text-5xl font-light" style="font-family: 'Playfair Display', serif;">¡Bienvenidos a nuestro sitio!</h1>
        </div>
      </div>

      <!-- Navbar -->
      <nav class="mb-4 space-x-4 text-center">
        <router-link to="/">
          <button class="bg-wine-600 hover:bg-wine-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
            Home
          </button>
        </router-link>
        <router-link to="/about">
          <button class="bg-brown-600 hover:bg-brown-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
            About
          </button>
        </router-link>
        <router-link to="/profile">
          <button class="bg-wine-600 hover:bg-wine-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
            Profile
          </button>
        </router-link>
        <router-link to="/contact">
          <button class="bg-brown-600 hover:bg-brown-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
            Contact
          </button>
        </router-link>
      </nav>

      <!-- Aquí se renderiza la vista actual según la ruta -->
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,  // Estado reactivo para controlar la visibilidad del menú
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen; // Método para alternar el estado del menú
    }
  }
}
</script>

<style scoped>
.bg-brown-600 {
  background-color: #4d0000d8; /* Color café */
}
.bg-wine-600 {
  background-color: #9c4900; /* Color vino */
}
.bg-wine-700 {
  background-color: #9c4900; /* Color vino más oscuro */
}
.bg-nude-200 {
  background-color: #eba15b; /* Color nude claro */
}
.bg-brown-400 {
  background-color: #9c4900; /* Color café más claro */
}

/* Asegúrate de importar las fuentes en tu proyecto */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap');
</style>
