import axios from "axios";

const api = axios.create({
  baseURL: "https://ext-ap-griega-rbee-b-production.up.railway.app",
});

export const getInf = () => api.get("/inf").then((res) => res.data);
export const getEpocas = () => api.get("/epocas").then((res) => res.data);

export const getVestimentas = () =>
  api.get("/vestimentas").then((res) => res.data);

export const getConstrucciones = () =>
  api.get("/construcciones").then((res) => res.data);

export const getRelatos = () => api.get("/relatos").then((res) => res.data);
