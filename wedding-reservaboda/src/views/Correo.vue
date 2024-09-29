<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100 relative overflow-hidden">
    <div class="absolute inset-0">
      <div class="carousel">
        <div v-for="(image, index) in images" :key="index" class="carousel-item" :style="{ backgroundImage: `url(${image})` }"></div>
      </div>
    </div>
    
    <div class="shadow-lg rounded-lg p-8 max-w-md w-full bg-white mt-[-140px] relative z-10">
      <h2 class="text-2xl font-bold text-center text-gray-700 mb-6">Enviar Mensaje</h2>
      <p class="text-center text-gray-500 mb-4">"¡Contáctanos y hagamos que tu boda sea tan perfecta como siempre lo soñaste!".</p> <!-- Frase bonita -->
      
      <form @submit.prevent="sendWhatsApp" class="mt-4">
        <textarea 
          v-model="message" 
          placeholder="Tu mensaje" 
          class="input mb-4" 
          rows="4" 
          required
        ></textarea>
        <button type="submit" class="btn w-full flex items-center justify-center">
          <img src="https://img.icons8.com/color/48/000000/whatsapp--v1.png" alt="WhatsApp Icon" class="mr-2"/> <!-- Ícono de WhatsApp -->
          Enviar a WhatsApp
        </button>
      </form>

      <form @submit.prevent="sendEmail" class="mt-4">
        <button type="submit" class="btn w-full flex items-center justify-center">
          <img src="https://img.icons8.com/color/48/000000/gmail.png" alt="Gmail Icon" class="mr-2"/> <!-- Ícono de Gmail -->
          Enviar Correo
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '',
      images: [
        'https://s1.elespanol.com/2023/05/25/vivir/766433879_233435830_1024x576.jpg',
        'https://tecolotito.elsiglodedurango.com.mx/i/2019/11/853922.jpeg',
        'https://elolivar.es/olivar-content/uploads/2023/04/oficiante-de-bodas.png',
        'https://cdn0.bodas.com.mx/article-vendor/3443/3_2/1280/jpg/analois-photoshoot-0055_5_193443-164815363528699.jpeg'
      ]
    };
  },
  methods: {
    sendWhatsApp() {
      const phoneNumber = '50378092729'; // Número de WhatsApp
      const message = encodeURIComponent(this.message); // Codificar el mensaje
      const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
      window.location.href = whatsappUrl; // Redirigir directamente a WhatsApp
      this.message = ''; // Limpiar el campo de mensaje
    },
    sendEmail() {
      const email = 'ellie.morales.9.12@gmail.com'; // Correo de destino
      const subject = 'Nuevo Mensaje desde el Formulario'; // Asunto del correo
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}`; // Redirigir a Gmail con destinatario y asunto
      window.open(gmailUrl, '_blank'); // Abrir Gmail en una nueva pestaña
      this.message = ''; // Limpiar el campo de mensaje
    }
  },
  mounted() {
    // Cambiar la imagen de fondo cada 5 segundos
    let currentIndex = 0;
    setInterval(() => {
      currentIndex = (currentIndex + 1) % this.images.length;
      const items = document.querySelectorAll('.carousel-item');
      items.forEach((item, index) => {
        item.style.opacity = index === currentIndex ? 1 : 0;
      });
    }, 5000);
  }
};
</script>

<style scoped>
.carousel {
  position: relative;
  height: 100%;
  width: 100%;
}

.carousel-item {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: opacity 1s ease;
  opacity: 0; /* Iniciar como invisible */
}

.carousel-item:first-child {
  opacity: 1; /* Mostrar la primera imagen al inicio */
}

.input {
  display: block;
  width: 100%;
  padding: 0.75rem; /* Espaciado interno */
  margin-bottom: 1rem; /* Espaciado entre campos */
  border: 1px solid #d1d5db; /* Color del borde normal */
  border-radius: 0.375rem; /* Bordes redondeados */
  transition: border-color 0.2s; /* Transición suave para el borde */
}

.input:focus {
  border-color: #4f46e5; /* Color del borde al enfocar */
  outline: none; /* Quitar el contorno predeterminado */
}

.btn {
  background-color: #bb390e; /* Color del botón */
  color: rgb(255, 255, 255);
  padding: 0.75rem 1rem; /* Espaciado interno */
  border-radius: 0.375rem; /* Bordes redondeados */
  cursor: pointer; /* Cursor de mano al pasar */
  transition: background-color 0.2s; /* Transición suave para el fondo */
}

.btn:hover {
  background-color: #c17a11; /* Color del botón al pasar el mouse */
}

.btn img {
  width: 24px; /* Tamaño del ícono */
  height: 24px;
}
</style>
