class COLOR {
  constructor () {
    this.colors = {
      black: () => { return `\x1b[30m`; },
      red: () => { return `\x1b[31m`; },
      green: () => { return `\x1b[32m`; },
      yellow: () => { return `\x1b[33m`; },
      blue: () => { return `\x1b[34m`; },
      magenta: () => { return `\x1b[35m`; },
      cyan: () => { return `\x1b[36m`; },
      white: () => { return `\x1b[37m`; },
      reset: () => { return `\x1b[0m`; },
    };
  }

  /**
   * black
   * @param msg - the variable containing a string message to be colored
   **/
  black (msg = '') {
    return this.format(msg, this.colors.black());
  }

  /**
   * red
   * @param msg - the variable containing a string message to be colored
   **/
  red (msg = '') {
    return this.format(msg, this.colors.red());
  }

  /**
   * green
   * @param msg - the variable containing a string message to be colored
   **/
  green (msg = '') {
    return this.format(msg, this.colors.green());
  }

  /**
   * yellow
   * @param msg - the variable containing a string message to be colored
   **/
  yellow (msg = '') {
    return this.format(msg, this.colors.yellow());
  }

  /**
   * blue
   * @param msg - the variable containing a string message to be colored
   **/
  blue (msg = '') {
    return this.format(msg, this.colors.blue());
  }

  /**
   * magenta
   * @param msg - the variable containing a string message to be colored
   **/
  magenta (msg = '') {
    return this.format(msg, this.colors.magenta());
  }

  /**
   * cyan
   * @param msg - the variable containing a string message to be colored
   **/
  cyan (msg = '') {
    return this.format(msg, this.colors.cyan());
  }

  /**
   * white
   * @param msg - the variable containing a string message to be colored
   **/
  white (msg = '') {
    return this.format(msg, this.colors.white());
  }

  /**
   * format
   * @param msg - the variable containing a string message to be colored
   * @param color - code callback for color code return.
   **/
  format (msg = '', color) {
    return `${color}${msg}${this.colors.reset()}`;
  }
}

const color = new COLOR();

module.exports.default = color;
