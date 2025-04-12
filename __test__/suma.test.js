const sum = require('../utils/suma');

test('sumar 1 mas 2', () => {

    expect(sum(1,2)).toBe(3);


})
test('sumar 1 mas 2', () => {

    expect(sum(1,0.5)).toBe(1.5);
})
test('sumar 1 mas 2', () => {

    expect(sum(1,-2)).toBe(-1);
})   