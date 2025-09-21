// src/utils/validators.js
export function validateEmail(email) {
  // e-mail básico: algo@algo.dominio
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(email).trim());
}

export function validatePassword(pw) {
  // >= 8 chars, pelo menos 1 letra e 1 número
  return /^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(String(pw));
}
