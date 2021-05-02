import 'jest';
import * as complexOperations from './complexOperations';

describe('complexOperation - Unit Tests', () => {
  describe('checkEmail', () => {
    it('Correct email', () => {
      expect(complexOperations.checkEmail('rosarioayyala@gmail.com')).toStrictEqual('The email is valid'); 
    });

    it('Must be an string ', () => {
      expect(complexOperations.checkEmail(1234)).toStrictEqual('The email should be an string');
    });

    it('Must be a valid', () => {
      expect(complexOperations.checkEmail('Rosario Ayala')).toStrictEqual('The email is invalid');
    });

  });

  describe('calculateArea', () => {
    it('square test for calculateArea', () => {
      expect(complexOperations.calculateArea('square', 4, 4)).toBe(16);
    });

    it('rectangle test for calculateArea', () => {
      expect(complexOperations.calculateArea('rectangle', 2, 2)).toBe(4);
    });

    it('triangle test for calculateArea', () => {
      expect(complexOperations.calculateArea('triangle', 4, 4)).toBe(8);
    });

    it('circle test for calculateArea', () => {
      expect(complexOperations.calculateArea('circle', 1)).toBeCloseTo(3.14);
    });
  });

  describe('sumGratherThan', () => {
    it('first test for sumGratherThan', () => {
      
    });
  });

  describe('intersectionBetweenArrays', () => {
    it('first test for intersectionBetweenArrays', () => {

    });
  });

  describe('sortArrayOfObjectsByKey', () => {
    it('first test for sortArrayOfObjectsByKey', () => {

    });
  });

  describe('numberOfOddAndEvenNumbers', () => {
    it('first test for numberOfOddAndEvenNumbers', () => {
      
    });
  });
});