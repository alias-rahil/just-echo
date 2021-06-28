import { program } from "commander";
import justEcho from "../lib/index";
import pkg from "../../package.json";

const { name, description, version } = pkg;

program
  .name(`npx ${name}`)
  .version(version)
  .arguments("[args...]")
  .description(description, {
    args: "echoes (prints) the provided arguments to stdout",
  })
  .action((args: string[]) => {
    process.stdout.write(`${justEcho(...args).join(" ")}\n`);
  });

program.parse();
