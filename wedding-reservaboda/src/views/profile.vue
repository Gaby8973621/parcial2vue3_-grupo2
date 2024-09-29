<template>
  <div class="flex flex-col items-center justify-center min-h-screen p-4 relative bg-brown-700"> <!-- Fondo café -->
    <div class="absolute inset-0 bg-black opacity-50"></div> <!-- Overlay semitransparente -->
    <div class="relative z-10 text-center"> <!-- Centrando el texto -->
      <h1 class="text-4xl font-bold text-white mb-6" style="font-family: 'YourFontFamily', cursive;">Nuestros Servicios para Bodas</h1>
      <p class="text-lg text-white mb-8">Descubre cómo podemos hacer que tu día especial sea inolvidable.</p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-full z-10 relative">
      <div class="bg-white rounded-lg shadow-lg transition duration-300 hover:shadow-2xl hover:scale-105 border border-gray-300">
        <img 
          src="https://cdn0.bodas.com.mx/vendor/5705/3_2/960/jpg/7p1a9494_5_285705-158767040688354.jpeg" 
          alt="Servicio 1" 
          class="w-full h-48 object-cover rounded-t-lg"
        />
        <div class="p-6 text-center"> <!-- Centrando el texto dentro de la tarjeta -->
          <h2 class="text-xl font-semibold text-brown-800 flex items-center justify-center">
            <span class="material-icons mr-2">local_florist</span> <!-- Icono de decoración floral -->
            Decoración Floral
          </h2>
          <p class="text-gray-700">Creamos hermosos arreglos florales personalizados para hacer tu boda única y especial.</p>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow-lg transition duration-300 hover:shadow-2xl hover:scale-105 border border-gray-300">
        <img 
          src="https://cdn0.bodas.com.mx/vendor/5705/3_2/960/jpg/7p1a9534_5_285705-158767040667739.jpeg" 
          alt="Servicio 2" 
          class="w-full h-48 object-cover rounded-t-lg"
        />
        <div class="p-6 text-center"> <!-- Centrando el texto dentro de la tarjeta -->
          <h2 class="text-xl font-semibold text-brown-800 flex items-center justify-center">
            <span class="material-icons mr-2">camera_alt</span> <!-- Icono de fotografía -->
            Fotografía Profesional
          </h2>
          <p class="text-gray-700">Capturamos cada momento especial de tu gran día con un toque artístico y profesional.</p>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow-lg transition duration-300 hover:shadow-2xl hover:scale-105 border border-gray-300">
        <img 
          src="https://cdn0.casamientos.com.ar/article/5032/3_2/960/jpg/42305-fotojet.jpeg" 
          alt="Servicio 3" 
          class="w-full h-48 object-cover rounded-t-lg"
        />
        <div class="p-6 text-center"> <!-- Centrando el texto dentro de la tarjeta -->
          <h2 class="text-xl font-semibold text-brown-800 flex items-center justify-center">
            <span class="material-icons mr-2">event_available</span> <!-- Icono de planificación -->
            Planificación de Bodas
          </h2>
          <p class="text-gray-700">Nos encargamos de todos los detalles para que puedas disfrutar sin preocupaciones.</p>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow-lg transition duration-300 hover:shadow-2xl hover:scale-105 border border-gray-300">
        <img 
          src="https://cdn0.casamientos.com.ar/article-real-wedding/833/3_2/1280/jpg/445837.jpeg" 
          alt="Servicio 4" 
          class="w-full h-48 object-cover rounded-t-lg"
        />
        <div class="p-6 text-center"> <!-- Centrando el texto dentro de la tarjeta -->
          <h2 class="text-xl font-semibold text-brown-800 flex items-center justify-center">
            <span class="material-icons mr-2">restaurant</span> <!-- Icono de catering -->
            Catering Gourmet
          </h2>
          <p class="text-gray-700">Ofrecemos una selección de platillos deliciosos para deleitar a tus invitados.</p>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow-lg transition duration-300 hover:shadow-2xl hover:scale-105 border border-gray-300">
        <img 
          src="https://cdn0.bodas.com.mx/article-vendor/7390/3_2/960/jpg/boda-giraselfie1_5_377390-168339706363073.jpeg" 
          alt="Servicio 5" 
          class="w-full h-48 object-cover rounded-t-lg"
        />
        <div class="p-6 text-center"> <!-- Centrando el texto dentro de la tarjeta -->
          <h2 class="text-xl font-semibold text-brown-800 flex items-center justify-center">
            <span class="material-icons mr-2">music_note</span> <!-- Icono de música -->
            Música y Entretenimiento
          </h2>
          <p class="text-gray-700">Proporcionamos la mejor música y entretenimiento para que tu boda sea inolvidable.</p>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow-lg transition duration-300 hover:shadow-2xl hover:scale-105 border border-gray-300">
        <img 
          src="https://www.expotuboda.com.mx/wp-content/uploads/2022/07/ycSlVIW6ynONVHNF9pDU.original_yvjfwZe.jpg" 
          alt="Servicio 6" 
          class="w-full h-48 object-cover rounded-t-lg"
        />
        <div class="p-6 text-center"> <!-- Centrando el texto dentro de la tarjeta -->
          <h2 class="text-xl font-semibold text-brown-800 flex items-center justify-center">
            <span class="material-icons mr-2">invitations</span> <!-- Icono de invitaciones -->
            Diseño de Invitaciones
          </h2>
          <p class="text-gray-700">Creamos invitaciones personalizadas que reflejan tu estilo y temática de boda.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Services",
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=YourFontFamily:wght@400;700&display=swap');

.bg-brown-700 {
  background-color: #ffe6e1; /* Cambia el valor a tu tono de café preferido */
}

/* Estilos para los iconos */
.material-icons {
  font-size: 1.5rem; /* Ajusta el tamaño de los iconos */
  color: #f99500; /* Color dorado para los iconos */
}

/* Agrega más estilo aquí si es necesario */
</style>
