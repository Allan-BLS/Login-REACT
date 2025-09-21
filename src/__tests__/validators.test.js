import { validateEmail, validatePassword } from '../utils/validators';

test('email válido: user@example.com', () => {
  expect(validateEmail('user@example.com')).toBe(true);
});

test('email inválido: sem @', () => {
  expect(validateEmail('userexample.com')).toBe(false);
});

test('email válido com espaços nas bordas (trim)', () => {
  expect(validateEmail('  user@example.com  ')).toBe(true);
});

test('senha inválida: menos de 8 chars', () => {
  expect(validatePassword('abc123')).toBe(false);
});

test('senha inválida: sem número', () => {
  expect(validatePassword('SomenteLetras')).toBe(false);
});

test('senha válida: 8+ com letra e número', () => {
  expect(validatePassword('Abcdef12')).toBe(true);
});
