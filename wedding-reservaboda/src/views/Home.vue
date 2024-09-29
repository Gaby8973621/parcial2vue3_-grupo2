<template>
  <div class="bg-white text-gray-800">
    <!-- Sección IMAGEN -->
    <section class="bg-cover bg-center h-screen" style="background-image: url('https://imgs.elpais.com.uy/dims4/default/7c91c86/2147483647/strip/true/crop/2793x1920+44+0/resize/1440x990!/quality/90/?url=https%3A%2F%2Fel-pais-uruguay-production-web.s3.us-east-1.amazonaws.com%2Fbrightspot%2Fuploads%2F2019%2F05%2F20%2F5ce2e291d1ccb.jpeg');">
      <div class="flex justify-center items-center h-full bg-black bg-opacity-50">
        <div class="text-center text-white">
          <h1 class="text-5xl font-bold mb-4 shadow-lg" style="font-family: 'Imprint MT Shadow', sans-serif;">TU BODA IDEAL</h1>
          <p class="text-3xl font-bold text-center mb-8" style="font-family: 'Dancing Script', cursive;">Un lugar perfecto para reservar tu celebración especial.</p>
        </div>
      </div>
    </section>

    <!-- Sección de Imágenes -->
    <section class="py-16 bg-gray-100">
      <h2 class="text-3xl font-bold text-center mb-8" style="font-family: 'Dancing Script', cursive;">Galería de Momentos Especiales</h2>
      
      <!-- Contenedor con fondo atractivo -->
      <div class="bg-nude-light p-8 rounded-lg shadow-lg">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div class="relative group">
            <img src="../assets/wedding-1.jpg" alt="Ceremonia" class="w-full h-64 rounded-lg shadow-lg transform transition duration-300 group-hover:scale-110 group-hover:shadow-2xl">
            <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-lg pointer-events-none">
              <p class="text-white text-lg">Ceremonia Mágica</p>
            </div>
          </div>
          <div class="relative group">
            <img src="../assets/wedding-2.jpg" alt="Decoraciones" class="w-full h-64 rounded-lg shadow-lg transform transition duration-300 group-hover:scale-110 group-hover:shadow-2xl">
            <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-lg pointer-events-none">
              <p class="text-white text-lg">Decoraciones Elegantes</p>
            </div>
          </div>
          <div class="relative group">
            <img src="../assets/wedding-3.jpg" alt="Pareja feliz" class="w-full h-64 rounded-lg shadow-lg transform transition duration-300 group-hover:scale-110 group-hover:shadow-2xl">
            <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-lg pointer-events-none">
              <p class="text-white text-lg">Pareja Feliz</p>
            </div>
          </div>
          <div class="relative group">
            <img src="https://cdn0.bodas.com.mx/article/8885/3_2/960/png/65888-untitled-design-53.jpeg" alt="Detalles" class="w-full h-64 rounded-lg shadow-lg transform transition duration-300 group-hover:scale-110 group-hover:shadow-2xl">
            <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-lg pointer-events-none">
              <p class="text-white text-lg">Detalles Especiales</p>
            </div>
          </div>
          <div class="relative group">
            <img src="https://lanoticia.com/wp-content/uploads/2020/08/boda-1.jpeg" alt="Boda" class="w-full h-64 rounded-lg shadow-lg transform transition duration-300 group-hover:scale-110 group-hover:shadow-2xl">
            <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-lg pointer-events-none">
              <p class="text-white text-lg">Una Celebración Inolvidable</p>
            </div>
          </div>
          <div class="relative group">
            <img src="https://cdn0.matrimonio.com.co/vendor/0061/3_2/960/jpg/dsc08999_10_120061.jpeg" alt="Momentos" class="w-full h-64 rounded-lg shadow-lg transform transition duration-300 group-hover:scale-110 group-hover:shadow-2xl">
            <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-lg pointer-events-none">
              <p class="text-white text-lg">Momentos Mágicos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home', // Nombre del componente
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400&display=swap');

h1 {
  font-family: 'Lobster', cursive; /* Cambia la fuente del título */
}

h2 {
  font-family: 'Dancing Script', cursive; /* Mantiene la fuente para la galería */
}

/* Agrega el color de fondo a la galería */
.bg-nude-light {
  background-color: #855545; /* Color nude claro */
}
</style>
