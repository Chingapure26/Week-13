import funcMock from './operations.mock';
import * as complexOperations from './complexOperations';

describe('ComplexOperation - Unit Tests', () => {
  describe('CheckEmail', () => {
    it('Correct email', () => {
      expect(complexOperations.checkEmail('rosarioayyala@gmail.com')).toStrictEqual('The email is valid'); 
    });
  });

  describe('CalculateArea', () => {
    it('Square test for calculateArea', () => {
      expect(complexOperations.calculateArea('square')).toBe(100);
    });

    it('Rectangle test for calculateArea', () => {
      expect(complexOperations.calculateArea('rectangle')).toBe(100);
    });

    it('Triangle test for calculateArea', () => {
      expect(complexOperations.calculateArea('triangle')).toBe(100);
    });

    it('Circle test for calculateArea', () => {
      expect(complexOperations.calculateArea('circle')).toBeCloseTo(12.566370614359172);
    });
  });

  describe('SumGratherThan', () => {
    it('Sum grather than', () => {
      expect(complexOperations.sumGratherThan(0, 0, 5)).toBe(`${200} is grather than ${5}`);
    });

    it('Sum less than', () => {
      expect(complexOperations.sumGratherThan(0, 0, 500)).toBe(`${200} is less or equal than ${500}`);
    });
  });

  describe('IntersectionBetweenArrays', () => {
     it('IntersectionBetweenArrays not matching', () => {
      expect(complexOperations.intersectionBetweenArrays(['beer', 'chips', 'pizza'], ['night'])).toEqual(['Music']);
    });

    it('IntersectionBetweenArrays matching', () => {
      expect(complexOperations.intersectionBetweenArrays(['beer', 'chips', 'pizza'], ['beer'])).toEqual(['Music']);
    });

    it('Elements must be arrays', () => {
      expect(complexOperations.intersectionBetweenArrays('hello', 5)).toEqual(['Music']);
    });
  });

  describe('sortArrayOfObjectsByKey', () => {
    it('Sort by age', () => {
      let resultArray = [ 
        { age: 28, name: 'Rosario' }, 
        { age: 32, name: 'Adrian' } 
      ];

      let paramArray = [
        { age: 32, name: 'Adrian'},
        { age: 28, name: 'Rosario'}
      ];
      
      expect(complexOperations.sortArrayOfObjectsByKey(paramArray, 'age')).toEqual(resultArray);  
    });

  });

  describe('numberOfOddAndEvenNumbers', () => {
    it('Calculate number', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers([1,2, 3, 4])).toEqual({"even": 11, "odd": 9});
    });
  });
});