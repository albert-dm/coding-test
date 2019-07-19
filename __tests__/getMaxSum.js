const getMaxSum = require('../src/getMaxSum');

describe('Testing getMaxSum', () => {
    it('Should assert param is an array', () => {
        const result = getMaxSum('');

        expect(result).toBe('Error: values should be an Array');
    });

    it('Should assert param has at least one element', () => {
        const result = getMaxSum([]);
        
        expect(result).toBe('Error: values must have at least one item');
    });

    it('Should return a number', () => {
        const result = getMaxSum([1]);

        expect(isNaN(result)).toBeFalsy();
    });
});

describe('Trying testcases', () => {
    it('Should return 27 for [0, 1, 2, 3, 4, 5]', () => {
        const result = getMaxSum([0, 1, 2, 3, 4, 5]);

        expect(result).toBe(27);
    });

    it('Should return 1 for [-1, 0, 1]', () => {
        const result = getMaxSum([-1, 0, 1]);

        expect(result).toBe(1);
    });

    it('Should return 2 for [1, 1]', () => {
        const result = getMaxSum([1, 1]);

        expect(result).toBe(2);
    });
})