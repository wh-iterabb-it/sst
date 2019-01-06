const { logger } = require('../');

test('testing most basic logger call', () => {
  expect(
    () => {
      logger.error('test')
      throw new Error('test')
    }
  ).toThrowError();
});
