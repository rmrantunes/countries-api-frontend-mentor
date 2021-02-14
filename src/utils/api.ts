import axios from "axios";
import { API_URL } from "./api-definitions";

export const api = axios.create({
  baseURL: API_URL,
});
