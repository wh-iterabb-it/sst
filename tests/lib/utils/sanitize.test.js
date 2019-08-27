const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const Sanitize = require('../../../lib/utils/sanitize');

chai.should();

chai.use(sinonChai);

const { expect } = chai;

describe('Sanitize Utility Tests', () => {
  describe('sanitize method', () => {
    it('should return empty string if nothing is passed in', () => {
      const expected = '';
      const resp = Sanitize.sanitize();
      expect(resp).to.equal(expected);
    });

    it('should fix arrays of 1 length to be string', () => {
      const testData = ['tacos'];
      const expected = 'tacos';
      const resp = Sanitize.sanitize(testData);
      expect(resp).to.equal(expected);
    });

    it('should return empty string if empty object is passed in', () => {
      const testData = {};
      const expected = '';
      const resp = Sanitize.sanitize(testData);
      expect(resp).to.equal(expected);
    });

    it('should remove br tags', () => {
      const testData = '</br>';
      const expected = '';
      const resp = Sanitize.sanitize(testData);
      expect(resp).to.equal(expected);
    });

    it('should remove br tag and add rn line', () => {
      const testData = 'tacos</br>tacos';
      const expected = 'tacos\ntacos';
      const resp = Sanitize.sanitize(testData);
      expect(resp).to.equal(expected);
    });

    it('should remove empty lines', () => {
      const testData = 'tacos</br></br></br>tacos';
      const expected = 'tacos\ntacos';
      const resp = Sanitize.sanitize(testData);
      expect(resp).to.equal(expected);
    });
  });
});
