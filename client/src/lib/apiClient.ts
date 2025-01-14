import axios from "axios";

export const apiClient = axios.create({
  baseURL: "http://localhost:8082/bookify/api/v1/profiles",
  headers: {
    "Content-Type": "application/json",
  },
});
