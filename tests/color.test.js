const { color } = require('../');

test('testing most basic yellow call', () => {
  expect(color.yellow('test')).toBe(`\x1b[33mtest\x1b[0m`);
});
