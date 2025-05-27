// Protection CSRF : génération et vérification de tokens
// Utilise la librairie csrf pour sécuriser les requêtes POST (notamment les formulaires)

import Csrf from "csrf";

//Création d'une instance de la classe Csrf
//Permet de générer et de valider des tokens CSRF
const csrfInstance = new Csrf();

/**
 * Génère un token CSRF à partir d'un secret
 * 
 * @param secret secret utilisé pour signer le token
 * @returns token csrf unique lié au secret
 */
export function generateCSRFToken(secret: string) {
  return csrfInstance.create(secret);
}

/**
 * 
 * @param secret secret utilisé pour la générration de token
 * @param token token csrf reçu
 * @returns true si le token est valide, sinon false
 */
export function verifyCSRFToken(secret: string, token: string) {
  return csrfInstance.verify(secret, token);
}
