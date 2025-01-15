// orval.config.cjs

module.exports = {
  profile: {
    output: {
      mode: "tags-split",
      target: "./src/model/endpoint",
      schemas: "./src/model/schema",
      client: "react-query",
      mock: false,
      clean: true,
      override: {
        useDates: true,
        mutator: {
          path: "./src/lib/axios.ts",
          name: "customInstance",
        },
        query: {
          useQuery: true,
          useInfinite: true,
          //useInfiniteQueryParam: "pageNo",
        },
      },
    },
    input: {
      target: "http://localhost:8082/v3/api-docs",
    },
  },
  zod: {
    input: {
      target: "http://localhost:8082/v3/api-docs",
    },
    output: {
      coerceTypes: false,
      mode: "tags-split",
      target: "./src/model/validation",
      client: "zod",
      clean: true,
    },
  },
};
