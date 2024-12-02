export default [
  {
    ignores: ["node_modules/**"],
  },
  {
    files: ["*.js", "*.jsx", "*.ts", "*.tsx"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      ecmaFeatures: {
        jsx: true,
      },
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: ["./tsconfig.json", "./tsconfig.node.json"],
        tsconfigRootDir: __dirname,
      },
    },
    plugins: {
      react: require("eslint-plugin-react"),
      "@typescript-eslint": require("@typescript-eslint/eslint-plugin"),
      "unused-imports": require("eslint-plugin-unused-imports"),
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      camelcase: "error",
      "spaced-comment": "error",
      quotes: ["error", "single"],
      "no-duplicate-imports": "error",
      endOfLine: "off",
      "unused-imports/no-unused-imports": "error",
      "no-shadow": "error",
      "prefer-const": "warn",
      "no-console": "warn",
      "@typescript-eslint/prefer-readonly": "off",
      "@typescript-eslint/no-implicit-any-catch": "warn",
      "@typescript-eslint/no-unsafe-call": "warn",
      "@typescript-eslint/no-unsafe-return": "warn",
      "@typescript-eslint/no-unnecessary-type-assertion": "warn",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-unused-expressions": "off",
    },
  },
  {
    files: [".eslintrc.{js,cjs}"],
    languageOptions: {
      sourceType: "script",
    },
    rules: {},
  },
];
