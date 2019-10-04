const sum = require('./sum');

test('sum two values', () =>{
    let result = sum.sum(1, 2);
    expect(result).toBe(3)
})