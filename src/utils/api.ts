import axios from "axios";
import { API_ENDPOINTS } from "./api-definitions";

export const api = axios.create({
  baseURL: API_ENDPOINTS.BASE,
});
