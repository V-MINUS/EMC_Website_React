module.exports = {
  root: true,
  extends: [
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  plugins: ["@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  rules: {
    "react/no-unescaped-entities": "off",
    "@next/next/no-img-element": "off",
    "@typescript-eslint/no-unused-vars": "warn"
  }
};
