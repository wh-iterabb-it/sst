const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const {
  detectURL, detectHostName, detectRootDomain
} = require('../../../lib/utils/detect');

chai.should();

chai.use(sinonChai);

const { expect } = chai;

describe('Detect Utility Tests', () => {
  describe('detectURL method', () => {
    it('should return true when detecting a real url', () => {
      try {
        const testURL = 'http://www.google.com';
        const result = detectURL(testURL);
        expect(result).to.equal(true);
      } catch (error) {}
    });

    it('should return false when detecting an invalid url', () => {
      try {
        const testURL = 'tacobell';
        const result = detectURL(testURL);
        expect(result).to.equal(false);
      } catch (error) {}
    });
  });

  describe('detectHostName method', () => {
    it('should return www.youtube.com string for http youtube url', () => {
      const testData = 'http://www.youtube.com/watch?v=nXy32Dr4Z4A';
      const expected = 'www.youtube.com';
      const resp = detectHostName(testData);
      expect(resp).to.equal(expected);
    });

    it('should return www.youtube.com string for https youtube url', () => {
      const testData = 'https://www.youtube.com/watch?v=nXy32Dr4Z4A';
      const expected = 'www.youtube.com';
      const resp = detectHostName(testData);
      expect(resp).to.equal(expected);
    });

    it('should return www.youtube.com string for no protocol youtube url', () => {
      const testData = 'www.youtube.com/watch?v=nXy32Dr4Z4A';
      const expected = 'www.youtube.com';
      const resp = detectHostName(testData);
      expect(resp).to.equal(expected);
    });

    it('should return www.amazon.co.uk string for a complex amazon url', () => {
      const testData = 'https://www.amazon.co.uk/JavaScript-Babies-Code-Sterling-Childrens'
      + '/dp/1454921579/ref=sr_1_fkmr0_1?ie=UTF8&qid=1527617357&sr=8-1-fkmr0';
      const expected = 'www.amazon.co.uk';
      const resp = detectHostName(testData);
      expect(resp).to.equal(expected);
    });
  });

  describe('detectRootDomain method', () => {
    it('should return www.youtube.com string for http youtube url', () => {
      const testData = 'http://www.youtube.com/watch?v=nXy32Dr4Z4A';
      const expected = 'youtube.com';
      const resp = detectRootDomain(testData);
      expect(resp).to.equal(expected);
    });

    it('should return www.youtube.com string for https youtube url', () => {
      const testData = 'https://www.youtube.com/watch?v=nXy32Dr4Z4A';
      const expected = 'youtube.com';
      const resp = detectRootDomain(testData);
      expect(resp).to.equal(expected);
    });

    it('should return www.youtube.com string for no protocol youtube url', () => {
      const testData = 'www.youtube.com/watch?v=nXy32Dr4Z4A';
      const expected = 'youtube.com';
      const resp = detectRootDomain(testData);
      expect(resp).to.equal(expected);
    });

    it('should return www.amazon.co.uk string for a complex amazon url', () => {
      const testData = 'https://www.amazon.co.uk/JavaScript-Babies-Code-Sterling-Childrens'
      + '/dp/1454921579/ref=sr_1_fkmr0_1?ie=UTF8&qid=1527617357&sr=8-1-fkmr0';
      const expected = 'amazon.co.uk';
      const resp = detectRootDomain(testData);
      expect(resp).to.equal(expected);
    });
  });
});
