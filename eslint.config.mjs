import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "react/react-in-jsx-scope": "off",
      "no-duplicate-case": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "react-hooks/rules-of-hooks": "off",
      "@ts-expect-error": "off",
      "react/prop-types": 0,
      "no-unused-vars": "off",
      "arrow-body-style": "off",
      "prefer-arrow-callback": "off",
      camelcase: "off",
      indent: 0,
      "no-useless-escape": 0,
      "no-globals-in-created": 0,
      "no-prototype-builtins": 0,
      "generator-star-spacing": 0,
      "space-before-function-paren": 0,
      "unicorn/number-literal-case": 0,
      "no-template-curly-in-string": 0,
      semi: ["error", "always"],
      "react/no-unescaped-entities": "off",
      "@next/next/no-page-custom-font": "off",
      "@typescript-eslint/ban-ts-ignore": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "react-hooks/exhaustive-deps": "off",
      "@next/next/no-img-element": "off",
      "comma-dangle": ["error", "never"],
      "react/display-name": "warn",
      "@next/next/no-document-import-in-page": "off"
    }
  }
];

export default eslintConfig;
