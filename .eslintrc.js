module.exports = {
    extends: [...require("nature-eslint-config")["extends"]],
    env: { ...require("nature-eslint-config")["env"] },
    rules: { ...require("nature-eslint-config")["rules"] },
    parserOptions: { ...require("nature-eslint-config")["parserOptions"] },
};
