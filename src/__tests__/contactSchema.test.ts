// Test unitaire du schéma de validation contactSchema
//Utilisation de Zod et safeParse pour valider les différentes entrées

import { contactSchema } from "@/lib/validation/contact";

describe("contactSchema", () => {
    //Données valides pour base de tests
    const validData = {
        name: "Dupuis Roger",
        email: "roger.dupuis@gmail.com",
        phone: "0689877514",
        subject: "Demande de contact",
        message: "Je souhaite en savoir plus sur ...",
        consent: true,
        csrfToken: "token-test",
    };
    
    //Test : Accepte des données entièrement valides
    it("Accepte un formulaire valide", () => {
        const result = contactSchema.safeParse(validData);
        expect(result.success).toBe(true);
    });
    
    //Test : Nom vide -> rejeté
    it("Rejette un nom et prénom vide", () => {
        const result = contactSchema.safeParse({...validData, name: ""});
        expect(result.success).toBe(false);
    });

    //Test : Email invalide -> rejeté
    it("Rejette un email invalide", () => {
        const result = contactSchema.safeParse({...validData, email: "invalidemail"});
        expect(result.success).toBe(false);
    });

    //Test : Numéro de téléphone invalide -> rejeté
    it("Rejette un téléphone invalide", () => {
        const result = contactSchema.safeParse({...validData, phone: "1234"});
        expect(result.success).toBe(false);
    });

    //Test : Consentement non coché -> rejeté
    it("Rejette si consentement non coché", () => {
        const result = contactSchema.safeParse({...validData, consent: false});
        expect(result.success).toBe(false);
    });

    //Test Token CSRF vide -> rejeté
    it("Rejette si token CSRF manquant", () => {
        const result = contactSchema.safeParse({...validData, csrfToken: ""});
        expect(result.success).toBe(false);
    });
});