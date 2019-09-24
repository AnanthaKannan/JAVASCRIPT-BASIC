const mul = require('./multiplication');

test('Properly add two numbers', ()=>{
    expect(mul.multiplication(1, 1, 1)).toBe(1);
})