import axios from 'axios';

const API_URL = 'http://localhost:3000/router/bodas'; // Cambia esto si usas otro puerto o dirección

export const getBodas = async () => {
  try {
    const response = await axios.get(API_URL); // Llama a la API
    return response.data; // Devuelve los datos obtenidos
  } catch (error) {
    console.error('Error al obtener las bodas:', error);
    throw error; // Lanza el error para manejarlo en el componente
  }
};
