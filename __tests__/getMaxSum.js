const getMaxSum = require('../src/getMaxSum');

describe('Testing getMaxSum', () => {
    describe('Function params and return', () => {
        it('Should assert param is an array', () => {
            let error;
            try {
                getMaxSum('');
            } catch (e) {
                error = e.message;
            } finally {
                expect(error).toBe('Values should be an Array');
            }
        });

        it('Should assert param has at least one element', () => {
            let error;
            try {
                getMaxSum([]);
            } catch (e) {
                error = e.message;
            } finally {
                expect(error).toBe('Values must have at least one item');
            }
        });

        it('Should return a number', () => {
            const result = getMaxSum([1]);

            expect(isNaN(result)).toBeFalsy();
        });
    });
    describe('Trying test cases', () => {
        it('Should return 27 for [0, 1, 2, 3, 4, 5]', () => {
            const result = getMaxSum([0, 1, 2, 3, 4, 5]);

            expect(result).toBe(27);
        });

        it('Should return 27 for [ 1, 2, 3, 4, 5]', () => {
            const result = getMaxSum([1, 2, 3, 4, 5]);

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

        it('Should return 21 for [-1, -2, -3, 0, 5, 3]', () => {
            const result = getMaxSum([-1, -2, -3, 0, 5, 3]);

            expect(result).toBe(21);
        });

        it('Should return 5 for [1, 1, 1, 1, 1]', () => {
            const result = getMaxSum([1, 1, 1, 1, 1]);

            expect(result).toBe(5);
        });

        it('Should return 0 for [0, 0, 0, 0, 0, 0]', () => {
            const result = getMaxSum([0, 0, 0, 0, 0, 0]);

            expect(result).toBe(0);
        });
    });
});