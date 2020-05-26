#!/usr/bin/env node
require("fs").copyFileSync(
    require("path").resolve(__dirname, "exports.js"),
    require("path").resolve(process.cwd(), "prettier.config.js"),
);
