const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Habilita CORS
app.use(cors());

// Datos de ejemplo
const bodas = [
  { id: 1, nombre: "Boda de Ejemplo 1", imagen: "https://www.morrocotudoestudio.com/wp-content/uploads/2022/09/invitaciones-predisenadas-bodas-coleccion-ocre-morrocotudo-estudio-600x800.jpg", fecha: "2024-09-27", lugar: "Ubicación 1" },
  { id: 2, nombre: "Boda de Ejemplo 2", imagen: "url_de_imagen_2.jpg", fecha: "2024-09-28", lugar: "Ubicación 2" }
];

// Middleware para permitir el uso de JSON
app.use(express.json());

// Endpoint para obtener las bodas
app.get('/router/bodas', (req, res) => {
  res.json(bodas);
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
