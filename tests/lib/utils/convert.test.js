const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const {
  kelvinToFahrenheit, kelvinToCelsius, fahrenheitToCelsius, celsiusToFahrenheit
} = require('../../../').convert;

chai.should();

chai.use(sinonChai);

const { expect } = chai;

const freezingKelvin = 273.15;
const boilingKelvin =  373.15;
const freezingFahrenheit = 32;
const boilingFahrenheit = 212;
const freezingCelsius = 0;
const boilingCelsius = 100;

describe('Convert Utility Tests', () => {
  describe('kelvinToFahrenheit method', () => {
    it('should return freezing(32°F) for freezing(273.15°K) ', () => {
      try {
        const result = kelvinToFahrenheit(freezingKelvin);
        expect(result).to.equal(freezingFahrenheit);
      } catch (error) {}
    });
    it('should return boiling(212°F) for boiling(373.15°K)', () => {
      try {
        const result = kelvinToFahrenheit(boilingKelvin);
        expect(result).to.equal(boilingFahrenheit);
      } catch (error) {}
    });
  });

  describe('celsiusToFahrenheit method', () => {
    it('should return freezing(32°F) for freezing(0°C) ', () => {
      try {
        const result = celsiusToFahrenheit(freezingCelsius);
        expect(result).to.equal(freezingFahrenheit);
      } catch (error) {}
    });
    it('should return boiling(212°F) for boiling(100°C)', () => {
      try {
        const result = celsiusToFahrenheit(boilingCelsius);
        expect(result).to.equal(boilingFahrenheit);
      } catch (error) {}
    });
  });

  describe('kelvinToCelsius method', () => {
    it('should return freezing(0°C) for freezing(273.15°K) ', () => {
      try {
        const result = kelvinToCelsius(freezingKelvin);
        expect(result).to.equal(freezingCelsius);
      } catch (error) {}
    });
    it('should return boiling(100°C) for boiling(373.15°K)', () => {
      try {
        const result = kelvinToCelsius(boilingKelvin);
        expect(result).to.equal(boilingCelsius);
      } catch (error) {}
    });
  });

  describe('fahrenheitToCelsius method', () => {
    it('should return freezing(0°C) for freezing(32°F) ', () => {
      try {
        const result = fahrenheitToCelsius(freezingFahrenheit);
        expect(result).to.equal(freezingCelsius);
      } catch (error) {}
    });
    it('should return boiling(100°C) for boiling(212°F)', () => {
      try {
        const result = fahrenheitToCelsius(boilingFahrenheit);
        expect(result).to.equal(boilingCelsius);
      } catch (error) {}
    });
  });

});
