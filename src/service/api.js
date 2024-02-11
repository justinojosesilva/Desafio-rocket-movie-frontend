import axios from "axios";

export const api = axios.create({
  baseURL: "https://desafio-rocket-movie-api.onrender.com"
})