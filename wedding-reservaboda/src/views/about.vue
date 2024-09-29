<template> 
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 relative overflow-hidden">
    <!-- Fondo de la boda con una imagen más elegante -->
    <div class="absolute inset-0 bg-cover bg-center opacity-60" 
         style="background-image: url('https://cdn0.bodas.com.mx/vendor/7992/3_2/640/jpg/nc-sneakpeak-188_5_107992-169627597841218.jpeg');">
    </div>

    <!-- Sección de contenido con estilo boda -->
    <div class="relative z-10 p-8 bg-white bg-opacity-80 rounded-lg shadow-2xl max-w-4xl text-center">
      <h1 class="text-5xl font-extrabold text-pink-700 mb-6">Sobre Nosotros</h1>

      <p class="max-w-2xl text-gray-700 mb-6">
        Bienvenido a nuestra plataforma para crear la boda de tus sueños. Aquí puedes explorar nuestros servicios para hacer de tu celebración un día inolvidable.
      </p>

      <p class="max-w-2xl text-gray-700 mb-6">
        Nos especializamos en cada detalle, desde la decoración hasta la música, para que todo sea perfecto en tu día especial.
      </p>

      <!-- Galería de imágenes -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <img src="https://images.ecestaticos.com/1mZCHt9VwQl2188be9A_cJObA_A=/0x0:1800x1350/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fb39%2F2e2%2Fcc9%2Fb392e2cc94a6fb37c82af11a3a49762d.jpg" 
             alt="Boda Elegante" 
             class="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform">
        <img src="https://www.todoboda.com/images/blog/bodas-reales/57_7.jpg" 
             alt="Celebración al Aire Libre" 
             class="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform">
        <img src="https://cdn0.bodas.com.mx/vendor/7992/3_2/640/jpg/nc-sneakpeak-188_5_107992-169627597841218.jpeg" 
             alt="Detalles Elegantes" 
             class="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform">
      </div>

      <p class="text-gray-600 mt-8 font-semibold">¡Gracias por confiar en nosotros para tu gran día!</p>
    </div>

    <!-- Sección de contacto en tarjeta grande -->
    <div class="relative z-10 p-12 bg-white bg-opacity-90 rounded-lg shadow-2xl max-w-lg mt-8 text-center">
      <h2 class="text-4xl font-bold text-pink-700 mb-4">Contáctanos</h2>
      <p class="text-gray-700 mb-2">¿Tienes dudas? Podemos ayudarte por medio de nuestros canales:</p>
      <p class="text-3xl text-pink-700 font-semibold mb-4">Teléfono: <span class="text-2xl text-gray-800">(503) 1234 - 5678</span></p>
      
      <div class="flex justify-center mt-4 space-x-6">
        <a href="https://www.instagram.com/elliemorales09?igsh=N2prMjJjOHFlZ2k3&utm_source=qr" target="_blank">
          <i class="fab fa-instagram fa-5x text-pink-700 hover:text-pink-500 transition-colors"></i>
        </a>
        <a href="https://www.facebook.com/share/jD4eqbrsecRzgJ35/?mibextid=LQQJ4d" target="_blank">
          <i class="fab fa-facebook fa-5x text-pink-700 hover:text-pink-500 transition-colors"></i>
        </a>
      </div>
    </div>

    <!-- Frase linda en tarjeta ancha -->
    <div class="relative z-10 p-10 bg-white bg-opacity-90 rounded-lg shadow-2xl max-w-full mt-8 text-center">
      <p class="text-3xl italic text-pink-700">"El amor es la belleza de los seres humanos."</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
/* Colores más suaves y elegantes */
.text-pink-700 {
  color: #7c3c00f1; 
}

.bg-gray-100 {
  background-color: #f9f3e6; /* Color de fondo más acorde a bodas, tono crema */
}

.text-gray-700 {
  color: #5f5f5f; /* Texto gris suave */
}

.bg-white {
  background-color: rgba(255, 255, 255, 0.9); /* Fondo blanco semitransparente */
}

/* Efectos para las imágenes */
img {
  transition: transform 0.3s ease;
}

img:hover {
  transform: scale(1.05); /* Efecto de zoom en hover */
}
</style>
