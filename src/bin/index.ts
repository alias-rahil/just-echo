#!/usr/bin/env node

import { program } from "commander";
import { readFile } from "fs";
import { join } from "path";
import { exit } from "process";
import justEcho from "../lib/index";

readFile(join(__dirname, "..", "..", "package.json"), (err, pkg) => {
  if (err) {
    process.stderr.write(`${err.message}\n`);
    exit(1);
  }

  const { name, description, version } = JSON.parse(pkg.toString()) as {
    name: string;
    description: string;
    version: string;
  };

  program
    .name(`npx ${name}`)
    .version(version)
    .arguments("[args...]")
    .description(description, {
      args: "echoes (prints) the provided arguments to stdout",
    })
    .action((args: string[]) => {
      process.stdout.write(`${justEcho(...args).join(" ")}\n`);
      exit(1);
    });

  program.parse();
});
