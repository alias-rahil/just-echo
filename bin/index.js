#!/usr/bin/env node

const { program } = require('commander');
const justEcho = require('../dist/index');
const pkg = require('../package');

const { version, description, name } = pkg;

program
  .name(`npx ${name}`)
  .version(version)
  .arguments('[args...]')
  .description(description, {
    args: 'echoes (prints) the provided arguments to stdout',
  })
  .action((args) => {
    process.stdout.write(`${justEcho(...args).join(' ')}\n`);
  });

program.parse();
