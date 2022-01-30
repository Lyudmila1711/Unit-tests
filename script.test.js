
const {sumNatural, commonMultiple} = require('./script')


let number = 1234
let m = 10
let n = 20

//tests for task 86 b)
describe('sumNatural function', () => {

    test('the entered data should be number', () => {
        expect(sumNatural(number)).toBeDefined()
        expect(sumNatural(number)).not.toBe(NaN)
    })

    test('the result should be equal', () => {
        expect(sumNatural(number)).toEqual(10)
    })
})


//tests for task 226
describe('commonMultiple function', () => {

    test('the result should be truth', () => {
        expect(commonMultiple(n, m)).toBeTruthy()
    })

    test('the result should be equal', () => {
        expect(commonMultiple(n, m)).toEqual([1, 2, 5, 10])
        expect(commonMultiple(20, 6)).toEqual([1, 2])
    })
})