#!/usr/bin/env node
if (process.argv.includes("postinstallScript"))
    require("fs").copyFileSync(
        require("path").resolve(__dirname, "exports.js"),
        require("path").resolve(process.cwd(), "../", "../", "prettier.config.js"),
    );
else
    require("fs").copyFileSync(
        require("path").resolve(__dirname, "exports.js"),
        require("path").resolve(process.cwd(), "prettier.config.js"),
    );
