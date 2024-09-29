<template>
  <div class="min-h-screen bg-gradient-to-r from-nude-light to-nude-dark flex items-center justify-center">
    <div class="bg-white shadow-xl rounded-2xl max-w-5xl w-full mx-6 lg:mx-auto p-8 lg:p-12 border-t-8 border-b-4 border-brown-light">
      <img 
        src="https://cdn.euroinnova.edu.es/img/subidasEditor/planeador%20de%20bodas-1609767087.webp" 
        alt="Planeador de Bodas" 
        class="w-full h-64 object-cover rounded-t-lg shadow-md mb-4"
      />
      <h1 class="text-5xl font-extrabold text-wine-dark text-center mb-4" style="font-family: 'Satisfy', cursive;">Tu celebración empieza aquí</h1>
      <p class="text-lg text-center text-gray-700 mb-8" style="font-family: 'Satisfy', cursive;">Encuentra el espacio perfecto para crear momentos inolvidables.</p>
      
      <div class="mt-4">
        <iframe
          src="https://maps.google.com/maps?q=tu%20ubicación%20aquí&t=&z=13&ie=UTF8&iwloc=&output=embed"
          class="w-full h-80 lg:h-96 rounded-lg border-4 border-brown-light shadow-lg transition-transform transform hover:scale-105"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>

      <div class="text-center mt-6">
        <div class="bg-nude-light p-4 rounded-lg shadow-md">
          <p class="text-lg font-semibold text-gray-800" style="font-family: 'Satisfy', cursive;">Visítanos y descubre un mundo de posibilidades.</p>
        </div>
      </div>

      <!-- Fotos en una línea con frases cortas -->
      <div class="flex justify-between mt-6">
        <div class="flex flex-col items-center">
          <div class="border-4 border-brown-light rounded-lg overflow-hidden mb-2">
            <img src="https://quierounabodaperfecta.com/wp-content/uploads/2024/04/LIB_2668.jpg" alt="Boda 1" class="w-32 h-32 object-cover" />
          </div>
          <p class="text-center text-gray-700" style="font-family: 'Satisfy', cursive;">Momento mágico</p>
        </div>

        <div class="flex flex-col items-center">
          <div class="border-4 border-brown-light rounded-lg overflow-hidden mb-2">
            <img src="https://cdn0.bodas.com.mx/vendor/2049/3_2/960/jpg/8_5_372049-167751320761194.jpeg" alt="Boda 2" class="w-32 h-32 object-cover" />
          </div>
          <p class="text-center text-gray-700" style="font-family: 'Satisfy', cursive;">Celebración alegre</p>
        </div>

        <div class="flex flex-col items-center">
          <div class="border-4 border-brown-light rounded-lg overflow-hidden mb-2">
            <img src="https://cdn0.bodas.com.mx/vendor/5705/3_2/960/jpg/0392_5_285705-158767042255592.jpeg" alt="Boda 3" class="w-32 h-32 object-cover" />
          </div>
          <p class="text-center text-gray-700" style="font-family: 'Satisfy', cursive;">Recuerdos inolvidables</p>
        </div>
      </div>
    </div>

    <div class="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10">
      <img src="https://www.transparenttextures.com/patterns/paper.png" alt="Background Texture" class="w-full h-full object-cover" />
    </div>
  </div>
</template>

<script>
export default {
  // No hay componentes adicionales necesarios
};
</script>

<style scoped>
html, body {
  font-family: 'Poppins', sans-serif; /* Fuente general */
}

/* Asegúrate de importar las fuentes en tu proyecto */
@import url('https://fonts.googleapis.com/css2?family=Satisfy&display=swap');

/* Definición de colores */
.bg-gradient {
  background-image: linear-gradient(to right, #f4e1d1, #d6c4b8); /* Gradiente de nude */
}

.text-wine-dark {
  color: #5C2E4D; /* Color vino oscuro */
}

.text-wine-light {
  color: #D9B7C5; /* Color vino claro */
}

.bg-nude-light {
  background-color: #D9CFC1; /* Color nude claro */
}

.bg-nude-dark {
  background-color: #E6D3C3; /* Color nude oscuro */
}

.border-brown-light {
  border-color: #D9CFC1; /* Color café claro */
}

/* Estilos adicionales */
</style>
