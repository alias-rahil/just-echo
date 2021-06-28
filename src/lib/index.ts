const justEcho = <T extends unknown[]>(...arg: T): typeof arg => arg;

export = justEcho;
