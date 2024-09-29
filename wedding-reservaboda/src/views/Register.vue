<template>
  <div class="relative flex items-center justify-center min-h-screen bg-gray-100 overflow-hidden">
    <div class="absolute inset-0">
      <div class="carousel">
        <div v-for="(image, index) in images" :key="index" class="carousel-item" :style="{ backgroundImage: `url(${image})` }"></div>
      </div>
    </div>
    <div class="shadow-lg rounded-lg p-8 max-w-sm w-full bg-white relative z-10">
      <h2 class="text-2xl font-bold text-center text-gray-700 mb-6">Registrarse</h2>
      <p class="text-center text-gray-600 mb-6 italic">"Únete a nosotros y haz que tu boda sea inolvidable."</p>
      <form @submit.prevent="register">
        <input 
          type="text" 
          v-model="registerUsername" 
          placeholder="Nombre de usuario" 
          class="input mb-4" 
          required
        />
        <input 
          type="email" 
          v-model="registerEmail" 
          placeholder="Correo electrónico" 
          class="input mb-4" 
          required
        />
        <input 
          type="password" 
          v-model="registerPassword" 
          placeholder="Contraseña" 
          class="input mb-6" 
          required
        />
        <button type="submit" class="btn w-full">
          Registrarse
        </button>
      </form>
      <p class="text-center text-gray-600 mt-6 italic">"Tu boda ideal comienza con un simple paso: registrarse."</p>
      
      <div v-if="users.length > 0" class="mt-6">
        <h3 class="text-lg font-bold">Usuarios Registrados:</h3>
        <ul>
          <li v-for="user in users" :key="user.email">{{ user.username }} ({{ user.email }})</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      registerUsername: '',
      registerEmail: '',
      registerPassword: '',
      users: [], // Array para almacenar los usuarios registrados
      images: [
        'https://cdn0.bodas.net/article-vendor/45446/3_2/960/jpg/ec-228_1_45446-168966401847248.jpeg',
        'https://resizer.sevilla.abc.es/resizer/resizer.php?imagen=https://sevilla.abc.es/estilo/bulevarsur/wp-content/uploads/sites/14/2019/06/tendencias-bodas-2019-p.jpg&nuevoancho=3293',
        'https://img.remediosdigitales.com/d3891d/boda/450_1000.jpg',
        'https://nupciasmagazine.com/wp-content/uploads/2024/03/Bodas-de-coral.jpg'
      ]
    };
  },
  methods: {
    register() {
      const newUser = {
        username: this.registerUsername,
        email: this.registerEmail,
        password: this.registerPassword
      };

      // Agregar el nuevo usuario al array
      this.users.push(newUser);

      // Guardar en localStorage
      localStorage.setItem('users', JSON.stringify(this.users));

      // Limpiar los campos del formulario
      this.registerUsername = '';
      this.registerEmail = '';
      this.registerPassword = '';

      alert('Registro exitoso!');
    },
    loadUsers() {
      const storedUsers = localStorage.getItem('users');
      if (storedUsers) {
        this.users = JSON.parse(storedUsers);
      }
    }
  },
  mounted() {
    this.loadUsers(); // Cargar usuarios desde localStorage
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
/* Estilo para el carrusel de imágenes de fondo */
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
  transition: border-color 0.4s;
}

.input:focus {
  border-color: #806f00;
  outline: none;
}

.btn {
  background-color: #bb390e;
  color: white;
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.8s;
}

.btn:hover {
  background-color: #d6451b;
}
</style>
