const palindromo = require('../utils/palindromo');
test('invertir una palabra', () => {
    expect(palindromo('hola')).toBe('aloh');
  });