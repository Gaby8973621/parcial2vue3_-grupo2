<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100 relative overflow-hidden">
    <div class="absolute inset-0">
      <div class="carousel">
        <div v-for="(image, index) in backgroundImages" :key="index" class="carousel-item" :style="{ backgroundImage: `url(${image})` }"></div>
      </div>
    </div>

    <div class="shadow-2xl rounded-lg p-10 max-w-sm w-full bg-white relative z-10 mt-[-240px]">
      <h2 class="text-3xl font-bold text-center text-gray-700 mb-6" style="font-family: 'Playfair Display', serif;">Inicia sesión para tu Boda ideal</h2>
      <form @submit.prevent="login">
        <input 
          type="text" 
          v-model="loginUsername" 
          placeholder="Nombre de usuario" 
          class="input mb-4" 
          required
        />
        <input 
          type="password" 
          v-model="loginPassword" 
          placeholder="Contraseña" 
          class="input mb-6" 
          required
        />
        <button 
          type="submit" 
          class="btn w-full">
          Entrar
        </button>
      </form>
      <p v-if="loginError" class="text-red-500 text-center mt-2">{{ loginError }}</p>
      <h3 class="text-center mt-4">¿No tienes una cuenta? <a href="#" @click="showRegistration = true" class="text-blue-500">Regístrate</a></h3>
      
      <div v-if="showRegistration" class="mt-4">
        <h4 class="text-lg font-semibold mb-2">Registro</h4>
        <input 
          type="text" 
          v-model="registerUsername" 
          placeholder="Nombre de usuario" 
          class="input mb-4" 
          required
        />
        <input 
          type="password" 
          v-model="registerPassword" 
          placeholder="Contraseña" 
          class="input mb-4" 
          required
        />
        <button 
          type="button" 
          @click="register"
          class="btn w-full">
          Registrarse
        </button>
        <p v-if="registrationError" class="text-red-500 text-center mt-2">{{ registrationError }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginUsername: '',
      loginPassword: '',
      registerUsername: '',
      registerPassword: '',
      loginError: '',
      registrationError: '',
      showRegistration: false,
      backgroundImages: [
        // Your image URLs...
      ]
    };
  },
  methods: {
    login() {
      const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
      const user = storedUsers.find(u => u.username === this.loginUsername && u.password === this.loginPassword);
      
        if (user) {
          alert(`Bienvenido, ${user.username}!`);
          // Redirigir o realizar acción después de iniciar sesión
        } else {
          this.loginError = 'Credenciales incorrectas. Intenta de nuevo.';
        }
    },
    register() {
      const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
      const userExists = storedUsers.some(u => u.username === this.registerUsername);

      if (userExists) {
        this.registrationError = 'El nombre de usuario ya está en uso.';
      } else {
        storedUsers.push({ username: this.registerUsername, password: this.registerPassword });
        localStorage.setItem('users', JSON.stringify(storedUsers));
        alert('Registro exitoso! Ahora puedes iniciar sesión.');
        this.showRegistration = false; // Hide registration form
        this.registerUsername = '';
        this.registerPassword = '';
      }
    }
  },
  mounted() {
    let currentIndex = 0;
    setInterval(() => {
      currentIndex = (currentIndex + 1) % this.backgroundImages.length;
      const items = document.querySelectorAll('.carousel-item');
      items.forEach((item, index) => {
        item.style.opacity = index === currentIndex ? 1 : 0;
      });
    }, 5000);
  }
};
</script>

<style scoped>
/* Carrusel de imágenes */
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
  opacity: 0;
}

.carousel-item:first-child {
  opacity: 1;
}

/* Estilos del formulario */
.input {
  display: block;
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  transition: border-color 0.3s;
  font-family: 'Playfair Display', serif;
}

.input:focus {
  border-color: #9c0000;
  outline: none;
}

.btn {
  background-color: #ae3400;
  color: white;
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.3s;
  font-family: 'Playfair Display', serif;
}

.btn:hover {
  background-color: #b74600;
}
</style>
