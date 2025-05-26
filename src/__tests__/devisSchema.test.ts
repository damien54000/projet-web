import { devisSchema } from "@/lib/validation/devis";

describe("devisShema", () => {
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

    it("Accepte un formulaire valide", () => {
        const result = devisSchema.safeParse(validData);
        expect(result.success).toBe(true);
    });

    it("Rejette un nom et prénom vide", () => {
        const result = devisSchema.safeParse({...validData, name: ""});
        expect(result.success).toBe(false);
    });

    it("Rejette un email invalide", () => {
        const result = devisSchema.safeParse({...validData, email: "invalidemail"});
        expect(result.success).toBe(false);
    });

    it("Rejette un téléphone invalide", () => {
        const result = devisSchema.safeParse({...validData, phone: "1234"});
        expect(result.success).toBe(false);
    });

    it("Rejette un service vide", () => {
        const result = devisSchema.safeParse({...validData, service: ""});
        expect(result.success).toBe(false);
    });

    it("Rejette une fréquence vide", () => {
        const result = devisSchema.safeParse({...validData, frequency: ""});
        expect(result.success).toBe(false);
    });

    it("Rejette si consentement non coché", () => {
        const result = devisSchema.safeParse({...validData, consent: false});
        expect(result.success).toBe(false);
    });

    it("Rejette si token CSRF manquant", () => {
        const result = devisSchema.safeParse({...validData, csrfToken: ""});
        expect(result.success).toBe(false);
    });
});