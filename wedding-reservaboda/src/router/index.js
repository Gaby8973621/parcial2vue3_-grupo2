import { createRouter, createWebHistory } from 'vue-router'; 
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Contact from '../views/Contact.vue';
import Correo from '../views/Correo.vue';
import Pokemon from '../views/Pokemon.vue';
import about from '../views/about.vue';
import profile from '../views/profile.vue';

// Función para verificar si el usuario está logueado
const isAuthenticated = () => {
  // Aquí se puede verificar en localStorage si hay un usuario logueado
  const users = JSON.parse(localStorage.getItem('users')) || [];
  // Puedes ajustar esta lógica según cómo determines si un usuario está autenticado
  return users.length > 0; // Suponiendo que si hay usuarios registrados, están autenticados
};

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/login', name: 'Login', component: Login },
  { path: '/register', name: 'Register', component: Register },
  { path: '/contact', name: 'Contact', component: Contact, meta: { requiresAuth: true } },
  { path: '/correo', name: 'Correo', component: Correo, meta: { requiresAuth: true } },
  { path: '/pokemon/:id', name: 'Pokemon', component: Pokemon, meta: { requiresAuth: true } },
  { path: '/about', name: 'about', component: about, meta: { requiresAuth: true } },
  { path: '/profile', name: 'profile', component: profile, meta: { requiresAuth: true } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Guardias de navegación
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Si la ruta requiere autenticación, verifica si el usuario está autenticado
    if (!isAuthenticated()) {
      // Si no está autenticado, redirige a la página de inicio de sesión
      next({ name: 'Login' });
    } else {
      next(); // Permite el acceso
    }
  } else {
    next(); // Permite el acceso a rutas públicas
  }
});

export default router;
