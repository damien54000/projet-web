// Test unitaire du schéma de validation devisSchema
//Utilisation de Zod et safeParse pour valider les différentes entrées

import { devisSchema } from "@/lib/validation/devis";

describe("devisSchema", () => {
    //Données valides pour base de tests
    const validData = {
        name: "Dupuis Roger",
        email: "roger.dupuis@gmail.com",
        phone: "0689877514",
        city: "Nancy",
        message: "Je souhaite en savoir plus sur ...",
        consent: true,
        service: "personnes-agees",
        frequency: "hebdomadaire",
        csrfToken: "token-test",
    };

    //Test : Accepte des données entièrement valides
    it("Accepte un formulaire valide", () => {
        const result = devisSchema.safeParse(validData);
        expect(result.success).toBe(true);
    });

    //Test : Nom vide -> rejeté
    it("Rejette un nom et prénom vide", () => {
        const result = devisSchema.safeParse({...validData, name: ""});
        expect(result.success).toBe(false);
    });

    //Test : Email invalide -> rejeté
    it("Rejette un email invalide", () => {
        const result = devisSchema.safeParse({...validData, email: "invalidemail"});
        expect(result.success).toBe(false);
    });

    //Test : Numéro de téléphone invalide -> rejeté
    it("Rejette un téléphone invalide", () => {
        const result = devisSchema.safeParse({...validData, phone: "1234"});
        expect(result.success).toBe(false);
    });
    
    //Test : Service vide -> rejeté
    it("Rejette un service vide", () => {
        const result = devisSchema.safeParse({...validData, service: ""});
        expect(result.success).toBe(false);
    });

    //Test : Fréquence vide -> rejeté
    it("Rejette une fréquence vide", () => {
        const result = devisSchema.safeParse({...validData, frequency: ""});
        expect(result.success).toBe(false);
    });

    //Test : Consentement non coché -> rejeté
    it("Rejette si consentement non coché", () => {
        const result = devisSchema.safeParse({...validData, consent: false});
        expect(result.success).toBe(false);
    });

    //Test Token CSRF vide -> rejeté
    it("Rejette si token CSRF manquant", () => {
        const result = devisSchema.safeParse({...validData, csrfToken: ""});
        expect(result.success).toBe(false);
    });
});