#!/usr/bin/env node
import { getUserName } from "../src/cli.js";

console.log("Welcome to the Brain Games!");
const name = getUserName();
console.log(`Hello, ${name}!`);
