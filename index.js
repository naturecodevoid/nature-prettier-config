/*
nature-prettier-config: naturecodevoid's Prettier Config
Copyright (C) 2019  naturecodevoid@GitHub, naturecodevoid#6253@Discord

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

module.exports = {
    printWidth: 120,
    tabWidth: 4,
    useTabs: false,
    semi: true,
    singleQuote: false,
    quoteProps: "as-needed",
    jsxSingleQuote: false,
    trailingComma: "all", //"es5",
    bracketSpacing: true,
    jsxBracketSameLine: true,
    arrowParens: "always",
    rangeStart: 0,
    rangeEnd: Infinity,
    // Don't change the parser, IDK what "none" means
    // Don't change the file path, IDK what "none" means
    requirePragma: false,
    insertPragma: false,
    proseWrap: "always",
    htmlWhitespaceSensitivity: "css",
    endOfLine: "auto",
};
