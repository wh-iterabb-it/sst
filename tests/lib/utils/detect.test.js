const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const {
  detectURL, detectHostName, detectRootDomain, isBoolean, isFinite, isInteger, isNull, isString, toNumber
} = require('../../../').detect;

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

  describe('isBoolean method', () => {
    it('should return false when passed a string', () => {
      const testData = 'true'; // a string that says "true"
      const expected = false; // not a boolean
      const resp = isBoolean(testData);
      expect(resp).to.equal(expected);
    });

    it('should return false when passed an int', () => {
      const testData = 0; // a string that says 0
      const expected = false; // not a boolean
      const resp = isBoolean(testData);
      expect(resp).to.equal(expected);
    });

    it('should return true when passed a boolean', () => {
      const testData = false; // a false boolean
      const expected = true; // a boolean
      const resp = isBoolean(testData);
      expect(resp).to.equal(expected);
    });
  });

  describe('isFinite method', () => {
    it('should return false when passed a string', () => {
      const testData = 'true';
      const expected = false;
      const resp = isFinite(testData);
      expect(resp).to.equal(expected);
    });

    it('should return true when passed an int that is negative', () => {
      const testData = -1.4501;
      const expected = false;
      const resp = isFinite(testData);
      expect(resp).to.equal(expected);
    });

    it('should return false when passed a boolean', () => {
      const testData = false;
      const expected = false;
      const resp = isFinite(testData);
      expect(resp).to.equal(expected);
    });

    it('should return false when passed a boolean', () => {
      const testData = 1337;
      const expected = true;
      const resp = isFinite(testData);
      expect(resp).to.equal(expected);
    });
  });

  describe('isInteger method', () => {
    it('should return false when passed a string', () => {
      const testData = 'true';
      const expected = false;
      const resp = isInteger(testData);
      expect(resp).to.equal(expected);
    });

    it('should return true when passed an int', () => {
      const testData = 1;
      const expected = true;
      const resp = isInteger(testData);
      expect(resp).to.equal(expected);
    });

    it('should return false when passed a boolean', () => {
      const testData = false;
      const expected = false;
      const resp = isInteger(testData);
      expect(resp).to.equal(expected);
    });
  });

  describe('isNull method', () => {
    it('should return false when passed a string', () => {
      const testData = 'true';
      const expected = false;
      const resp = isNull(testData);
      expect(resp).to.equal(expected);
    });

    it('should return false when passed an int', () => {
      const testData = 1;
      const expected = false;
      const resp = isNull(testData);
      expect(resp).to.equal(expected);
    });

    it('should return false when passed a boolean', () => {
      const testData = true;
      const expected = false;
      const resp = isNull(testData);
      expect(resp).to.equal(expected);
    });

    it('should return true when passed a null', () => {
      const testData = null;
      const expected = true;
      const resp = isNull(testData);
      expect(resp).to.equal(expected);
    });
  });

  describe('isString method', () => {
    it('should return true when passed a string', () => {
      const testData = 'true';
      const expected = true;
      const resp = isString(testData);
      expect(resp).to.equal(expected);
    });

    it('should return false when passed an int', () => {
      const testData = 1;
      const expected = false;
      const resp = isString(testData);
      expect(resp).to.equal(expected);
    });

    it('should return false when passed a boolean', () => {
      const testData = true;
      const expected = false;
      const resp = isString(testData);
      expect(resp).to.equal(expected);
    });

    it('should return false when passed a null', () => {
      const testData = null;
      const expected = false;
      const resp = isString(testData);
      expect(resp).to.equal(expected);
    });
  });


    describe('toNumber method', () => {
      it('should return 123 when passed a string', () => {
        const testData = '123';
        const expected = 123;
        const resp = toNumber(testData);
        expect(resp).to.equal(expected);
      });

      it('should return 0 when passed a null', () => {
        const testData = null;
        const expected = 0;
        const resp = toNumber(testData);
        expect(resp).to.equal(expected);
      });
    });
});
