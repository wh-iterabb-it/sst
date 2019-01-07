const { color } = require('../');

describe('color methods', () => {
  test('should return test message with the ANSI color black before it and reset after', () => {
    expect(color.black('test')).toBe(`\x1b[30mtest\x1b[0m`);
  });

  test('should return test message with the ANSI color red before it and reset after', () => {
    expect(color.red('test')).toBe(`\x1b[31mtest\x1b[0m`);
  });

  test('should return test message with the ANSI color green before it and reset after', () => {
    expect(color.green('test')).toBe(`\x1b[32mtest\x1b[0m`);
  });

  test('should return test message with the ANSI color yellow before it and reset after', () => {
    expect(color.yellow('test')).toBe(`\x1b[33mtest\x1b[0m`);
  });

  test('should return test message with the ANSI color blue before it and reset after', () => {
    expect(color.blue('test')).toBe(`\x1b[34mtest\x1b[0m`);
  });

  test('should return test message with the ANSI color magenta before it and reset after', () => {
    expect(color.magenta('test')).toBe(`\x1b[35mtest\x1b[0m`);
  });

  test('should return test message with the ANSI color cyan before it and reset after', () => {
    expect(color.cyan('test')).toBe(`\x1b[36mtest\x1b[0m`);
  });

  test('should return test message with the ANSI color white before it and reset after', () => {
    expect(color.white('test')).toBe(`\x1b[37mtest\x1b[0m`);
  });
});
