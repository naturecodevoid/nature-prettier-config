<h1 align="center">nature-prettier-config</h1>

<p align="center">naturecodevoid's <a href="https://prettier.io/">Prettier</a> Config

<p align="center"><a href="https://github.com/naturecodevoid/nature-prettier-config/blob/master/LICENSE"><img src="https://img.shields.io/github/license/naturecodevoid/nature-prettier-config?style=flat-square"></a> <a href="https://www.npmjs.com/package/nature-prettier-config"><img src="https://img.shields.io/npm/v/nature-prettier-config?style=flat-square"></a></p>

<h2 align="center">Installing</h2>

<h3 align="center">CLI</h3>

This assumes you have Node.js and npm (bundled with node) and the terminal's working directory is where you want to make
the `prettier.config.js`.

1. Run `$ npm install --save-dev nature-prettier-config`. This should generate the files
1. If step 1 doesn't work run `$ npx nature-prettier-config`

If you want to change options, just edit `prettier.config.js`:

```javascript
// prettier.config.js
module.exports = {
    ...require("nature-prettier-config"),
    semi: false,
};
```
