module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/airbnb"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    quotes: ["error", "double", { allowTemplateLiterals: true }],
    "comma-dangle": ["error", "never"],
    "arrow-parens": ["error", "as-needed"],
    "space-before-function-paren": ["error", "never"]
  }
};
