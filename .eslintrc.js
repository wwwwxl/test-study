module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
		"no-useless-escape": "off",
    "no-unused-vars": 'off',
    "no-undef": "off",
    "no-empty": "off",
    "no-redeclare": "off",
    "no-irregular-whitespace":"off",
    "no-unreachable":"off",
    "no-fallthrough":"off",
    "no-case-declarations":"off",
    "vue/no-reserved-keys":"off",
    "vue/no-parsing-error":"off",
    "vue/no-duplicate-attributes":"off",
    "vue/valid-v-for":"off",
    "no-self-assign":"off",
    "vue/no-dupe-keys":"off",
    "no-dupe-keys":"off",
    "vue/require-v-for-key":"off",
    "no-cond-assign":"off",
    "no-extra-boolean-cast":"off",
    "vue/no-unused-vars": 'off',
    "prettier/prettier": 0,
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
