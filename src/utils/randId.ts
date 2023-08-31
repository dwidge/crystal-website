// Copyright DWJ 2023.
// Distributed under the Boost Software License, Version 1.0.
// https://www.boost.org/LICENSE_1_0.txt

const lex = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_-";

export const randInt = (end: number) => Math.floor(Math.random() * end);

export const randChar = (radix: number) => lex[randInt(radix)];

export const randId = (length = 8, radix = 62) =>
  Array.from({ length }, () => randChar(radix)).join("");
