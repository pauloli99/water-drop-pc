module.exports = {
  root: true,
  extends: [
    require.resolve("eslint-config-airbnb"),
    require.resolve("eslint-config-airbnb/hooks"),
    require.resolve("eslint-config-airbnb-typescript"),
  ],
  rules: {
    "react/function-component-definition": 0,
    "react/react-in-jsx-scope": 0,
    "import/prefer-default-export": 0,
    "react-hooks/exhaustive-deps": 1,
    "react/button-has-type": 0,
    "no-extraneous-dependencies": 0,
    "no-unused-vars": 0,
    "@typescript-eslint/no-unused-vars": 1,
    "jsx-a11y/control-has-associated-label": 0,
    "import/no-extraneous-dependencies": 0
  },
  parser: require.resolve("@typescript-eslint/parser"),
  parserOptions: {
    project: require.resolve("./tsconfig.json"),
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      alias: {
        map: [
          [
            "@", "./src"
          ]
        ],
        extensions: ['.ts', '.tsx']
      }
    }
  },
};
