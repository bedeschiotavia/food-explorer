import axios from "axios";

export const api = axios.create({
  baseURL: "https://food-explorer-28lo.onrender.com"
});