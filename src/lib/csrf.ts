import Csrf from 'csrf';

const csrfInstance = new Csrf();

export function generateCSRFToken(secret: string) {
  return csrfInstance.create(secret);
}

export function verifyCSRFToken(secret: string, token: string) {
  return csrfInstance.verify(secret, token);
}
