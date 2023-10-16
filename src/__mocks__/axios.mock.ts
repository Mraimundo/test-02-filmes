import axios from "axios";

export default {
  create: jest.fn(() => axios), // Configurar uma função 'create' simulada que retorna o Axios
  get: jest.fn(),
  post: jest.fn(),
};
