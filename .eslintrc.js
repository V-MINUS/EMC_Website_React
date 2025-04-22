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
    // Example: "react/react-in-jsx-scope": "off",
    // Add project-specific rules here
  }
};
