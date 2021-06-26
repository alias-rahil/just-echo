#!/usr/bin/env -S node --experimental-specifier-resolution=node --no-warnings

import { program } from "commander";
import justEcho from "../dist/index";
import pkg from "../package";

const { version, description, name } = pkg;

program
  .name(`npx ${name}`)
  .version(version)
  .arguments("[args...]")
  .description(description, {
    args: "echoes (prints) the provided arguments to stdout",
  })
  .action((args) => {
    process.stdout.write(`${justEcho(args).join(" ")}\n`);
  });

program.parse();
