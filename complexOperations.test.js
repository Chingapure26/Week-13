import 'jest';
import * as complexOperations from './complexOperations';

describe('ComplexOperation - Unit Tests', () => {
  describe('CheckEmail', () => {
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

  describe('CalculateArea', () => {
    it('Square test for calculateArea', () => {
      expect(complexOperations.calculateArea('square', 4, 4)).toBe(16);
    });

    it('Rectangle test for calculateArea', () => {
      expect(complexOperations.calculateArea('rectangle', 2, 2)).toBe(4);
    });

    it('Triangle test for calculateArea', () => {
      expect(complexOperations.calculateArea('triangle', 4, 4)).toBe(8);
    });

    it('Circle test for calculateArea', () => {
      expect(complexOperations.calculateArea('circle', 1)).toBeCloseTo(3.14);
    });

    it('Must be suported figure', () => {
      expect(complexOperations.calculateArea('pyramid')).toBe(`${'pyramid'} is not supported`);
    });

    it('Must be a number', () => {
      expect(complexOperations.calculateArea('circle','calculate','area')).toBe('number1 and number2 should be numbers');
    });
  });

  describe('SumGratherThan', () => {
    it('Sum grather than', () => {
      expect(complexOperations.sumGratherThan(15, 5, 5)).toBe(`${20} is grather than ${5}`);
    });

    it('Sum less than', () => {
      expect(complexOperations.sumGratherThan(-5, 10, 5)).toBe(`${5} is less or equal than ${5}`);
    });

    it('Must be a number', () => {
      expect(complexOperations.sumGratherThan('one', 'six', 'Hi')).toBe('The params should be numbers');
    });
  });

  describe('IntersectionBetweenArrays', () => {
     it('IntersectionBetweenArrays not matching', () => {
      expect(complexOperations.intersectionBetweenArrays(['beer', 'chips', 'pizza'], ['night'])).toBe('There are not matching elements');
    });

    it('IntersectionBetweenArrays matching', () => {
      expect(complexOperations.intersectionBetweenArrays(['beer', 'chips', 'pizza'], ['beer'])).toStrictEqual(['beer']);
    });

    it('Elements must be arrays', () => {
      expect(complexOperations.intersectionBetweenArrays('hello', 5)).toBe('The params should be arrays');
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

    it('First element must be an array', () => {
      expect(complexOperations.sortArrayOfObjectsByKey('param', 'age')).toStrictEqual('The first param should be an array');  
    });

    it('Second element must be an string', () => {
      let resultArray = [ 
        { age: 28, name: 'Rosario' }, 
        { age: 32, name: 'Adrian' } 
      ];

      let paramArray = [
        { age: 32, name: 'Adrian'},
        { age: 28, name: 'Rosario'}
      ];
      
      expect(complexOperations.sortArrayOfObjectsByKey(paramArray,resultArray)).toBe('The second param should be an string');
    });


  });

  describe('numberOfOddAndEvenNumbers', () => {
    it('Calculate number', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers([1,2, 3, 4])).toEqual({"even": 2, "odd": 2});
    });

    it('Param must be an array', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers('prueba')).toBe('The param should be an array');
    });

    it('Array must be a number', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers(['prueba1', 'prueba2'])).toBe(`The array should have only numbers`);
    });
    
  });
});