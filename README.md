<h1 align="center">nature-prettier-config</h1>

<p align="center">naturecodevoid's <a href="https://prettier.io/">Prettier</a> Config

<p align="center"><a href="https://github.com/naturecodevoid/nature-prettier-config/blob/master/LICENSE"><img src="https://img.shields.io/github/license/naturecodevoid/nature-prettier-config?style=flat-square"></a> <a href="https://www.npmjs.com/package/nature-prettier-config"><img src="https://img.shields.io/npm/v/nature-prettier-config?style=flat-square"></a></p>

<h2 align="center">Usage</h2>

Install:

```shell
$ npm install --save-dev nature-prettier-config
```

Edit `prettier.config.js`:

```javascript
module.exports = require("nature-prettier-config");
```

Or if you want to change some options:

```javascript
module.exports = {
    ...require("nature-prettier-config"),
    otherOption: false
};
```
