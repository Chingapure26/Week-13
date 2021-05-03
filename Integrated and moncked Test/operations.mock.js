import 'jest';

let isNumber = jest.fn().mockReturnValue(true);
let isArray = jest.fn().mockReturnValue(true);
let isString = jest.fn().mockReturnValue(true);
let validateEmail = jest.fn().mockReturnValue(true);
let sum = jest.fn().mockReturnValue(200);
let multip = jest.fn().mockReturnValue(100);
let division = jest.fn().mockReturnValue(100);
let exponent = jest.fn().mockReturnValue(4);
let isSupportedFigure = jest.fn().mockReturnValue(true);
let arrayElementsAreObjectWithKey = jest.fn().mockReturnValue(true);
let sortArrayByKey = jest.fn().mockReturnValue([{ age: 28, name: 'Rosario' },{ age: 32, name:'Adrian'}]);
let arrayIntersection = jest.fn().mockReturnValue(['Music']);
let getEvenNumbersFromArray = jest.fn().mockReturnValue('[8, 10, 12]');
let getOddNumbersFromArray = jest.fn().mockReturnValue('[5, 7, 9]');

const funcMock = jest.mock('./basicOperations.js', () => {
    return {
        isNumber,
        isArray,
        isString,
        validateEmail,
        sum,
        multip,
        division,
        exponent,
        isSupportedFigure,
        arrayElementsAreObjectWithKey,
        sortArrayByKey,
        arrayIntersection,
        getEvenNumbersFromArray,
        getOddNumbersFromArray
    }
});

export default funcMock;

