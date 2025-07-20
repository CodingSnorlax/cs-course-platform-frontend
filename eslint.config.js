import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { globalIgnores } from "eslint/config";

export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite,
      "prettier", // Add this to disable ESLint rules that conflict with Prettier
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      "prettier/prettier": "error", // Enable prettier/prettier rule
      quotes: ["error", "double"],
      indent: ["error", 2],
      semi: ["error", "always"],
      "no-console": ["warn", { allow: ["warn", "error"] }], // 禁止 console.log，但允許 console.warn 和 console.error
      "no-debugger": "error",
      "comma-dangle": ["error", "always-multiline"],
      camelcase: ["error", { properties: "never" }], // 強制駝峰式命名，不檢查物件屬性
    },
  },
]);
