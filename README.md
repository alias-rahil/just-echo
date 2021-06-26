<h1 align="center">Welcome to just-echo 👋</h1>

<p>
  <a href="https://www.npmjs.com/package/just-echo" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/just-echo.svg" />
  </a>
  <a href="https://github.com/alias-rahil/just-echo#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/alias-rahil/just-echo/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/alias-rahil/just-echo/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/alias-rahil/just-echo" />
  </a>
</p>

> npm package template

## Programmatic usage:

### Installation

```sh
npm install --save just-echo
```

### Usage

```js
import justEcho from "just-echo";

console.log(justEcho("Hello, world!")[0]);
```

## Command line usage:

### Using without installation

```sh
npx just-echo "Goodbye, world!"
```

> Note: Use this method only if you plan to use just-echo for one time, installing just-echo globally (see-below) is recommended for multiple time usages.

### Installation

```sh
npm install just-echo -g
```

> Note for Linux & MacOS users: **DO NOT** use sudo to install global packages! The correct way is to tell npm where to install its global packages: `npm config set prefix ~/.local`. Make sure `~/.local/bin` is added to `PATH`.

### Usage after installation

```sh
just-echo "Hey!"
```

## Screenshot

<p align="center">
  <img align="center" src="https://raw.githubusercontent.com/alias-rahil/just-echo/main/screenshots/example.png" alt="example.png" />
</p>

## API

For CLI usage, see the help option:

```sh
npx just-echo --help
```

For programmatic usage, use the default exported module. It takes any number of arguments (of same type) and returns them all in the form of an array.

## Author

👤 **Rahil Kabani**

* Website: https://alias-rahil.github.io/
* Github: [@alias-rahil](https://github.com/alias-rahil)
* Email: rahil.kabani.4@gmail.com

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/alias-rahil/just-echo/issues). You can also take a look at the [contributing guide](https://github.com/alias-rahil/just-echo/blob/master/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

## Just-echo

🏠 [Homepage](https://alias-rahil.github.io/just-echo)

## 📝 License

Copyright © 2021 [Rahil Kabani](https://github.com/alias-rahil).<br />
This project is [MIT](https://github.com/alias-rahil/just-echo/blob/master/LICENSE) licensed.
