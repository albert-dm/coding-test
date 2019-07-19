const { makePairs } = require('../src/utils');

describe('Testing utils', () => {
    describe('makePairs function', () => {
        describe('Function params and return', () => {
            it('Should assert param is an array', () => {
                let error;
                try {
                    makePairs('');
                } catch (e) {
                    error = e.message;
                } finally {
                    expect(error).toBe('Values should be an Array');
                }
            });

            it('Should assert return an array', () => {
                const result = makePairs([1, 2, 3]);

                expect(Array.isArray(result)).toBeTruthy();
            });
        });
        describe('Trying test cases', () => {
            it('Should receive [1, 2, 3, 4] and return [[1,2], [3,4]]', () => {
                const result = makePairs([1, 2, 3, 4]);

                expect(result).toEqual([[1,2], [3,4]]);
            });

            it('Should receive [1, 2, 3] and return [[1,2], 3]', () => {
                const result = makePairs([1, 2, 3]);

                expect(result).toEqual([[1,2], 3]);
            });

            it('Should receive [1] and return [1]', () => {
                const result = makePairs([1]);

                expect(result).toEqual([1]);
            });
            it('Should receive [] and return []', () => {
                const result = makePairs([]);

                expect(result).toEqual([]);
            });
        });
    });
});