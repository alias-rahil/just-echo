#!/usr/bin/env node

/* eslint-disable no-console */

import { program } from "commander";
import justEcho from "../lib/index";
import pkg from "../../package.json";

const { name, description, version } = pkg;

program
  .name(`npx ${name}`)
  .version(version)
  .allowExcessArguments(false)
  .arguments("[args...]")
  .description(description, {
    args: "echoes (prints) the provided arguments to stdout",
  })
  .action((args: string[]) => {
    console.log(justEcho(...args).join(" "));
  });

program.parse();
