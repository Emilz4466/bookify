// orval.config.cjs

module.exports = {
  profile: {
    output: {
      mode: "tags", // Generowanie plików dla każdego tagu w OpenAPI
      target: "./src/model/endpoint", // Folder, do którego będą generowane pliki
      client: "react-query", // Generowanie hooków dla React Query
      mock: false, // Wyłączenie generowania mocków
    },
    input: {
      target: "http://localhost:8082/v3/api-docs", // URL do API Swagger
    },
    zod: {
      target: "./src/model/validation", // Folder na generowane pliki walidacyjne Zod
      enabled: true, // Włącz generowanie plików walidacyjnych dla Zod
    },
  },
};
