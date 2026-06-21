import { Handler } from "@netlify/functions";
import { GoogleGenAI, Content } from "@google/genai";

export const handler: Handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method Not Allowed" })
    };
  }

  try {
    const apiKey = process.env.GEMINI_API_KEY || "AIzaSyDKDjjsv-dPiZf1TlP_AkL5Twmn1emeZKA";
    if (!apiKey) {
      return {
        statusCode: 401,
        body: JSON.stringify({ error: "API key mancante! Assicurati di aver configurato una API Key di Gemini nelle variabili d'ambiente di Netlify." })
      };
    }

    const ai = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build-netlify",
        },
      },
    });

    const body = JSON.parse(event.body || "{}");
    // Explicitly define history as Content[] based on @google/genai types
    const history: Content[] = body.history || [];
    const message: string = body.message || "";

    const chat = ai.chats.create({
      model: "gemini-2.5-flash",
      config: {
        systemInstruction: `Sei l'assistente virtuale ufficiale del sito di Luca Roberto Schoenbech, un Talent Acquisition Advisor ed esperto di executive search con quasi 20 anni di esperienza. 

Il tuo compito è rispondere alle domande degli utenti in modo estremamente professionale, analitico e focalizzato sui contenuti del sito.

INFORMAZIONI SU LUCA ROBERTO SCHOENBECH E LA SUA OFFERTA:
1. Chi è: Un professionista focalizzato su ruoli di middle management e senior professional. Affianca le aziende per definire il VERO mandato prima di avviare la ricerca ("Il brief iniziale raramente coincide con quello che effettivamente serve").
2. Focus Settoriale: Pharma & Specialty Care, Medical Devices & Diagnostica, Consumer Health, Chimica & Process Industries, Metalmeccanica/Automazione, Impiantistica, Packaging.
3. Metodologia (3 Pilastri Interdipendenti):
   - Headhunting Analitico: Identificazione non meccanica. Mappatura strutturata del mercato consegnata come "Search Report digitale" (intelligence navigabile, non un PDF).
   - Contesto Organizzativo (Logica delle interdipendenze): Mappare le relazioni per prevenire fallimenti prevedibili.
   - Valutazione Integrata: Unione di strumenti psicometrici scientificamente validati (es. HEXACO) e Analisi Semantica ("La struttura motivazionale emerge molto più dal come racconta la propria carriera che dal cosa dichiara di volere").
4. Servizi aggiuntivi: Esegue servizi di Leadership Assessment puro. Mantiene un follow-up e check-in periodici nei primi 6 mesi di inserimento post-assunzione.
5. Innovazione: Usa uno stack tecnico proprietario (web app AI-powered) per ridurre i tempi e arricchire la reportistica.

REGOLE:
- Attieniti SCRUPOLOSAMENTE a queste informazioni. Non inventare servizi.
- Usa un tono consulenziale, autorevole, analitico ed elegante. 
- Se ti chiedono dettagli su prospect, tariffe o cose non in elenco, invita a contattarlo nella sezione Contatti.`,
      },
      history: history,
    });

    const aiResponse = await chat.sendMessage({ message });
    
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ text: aiResponse.text }),
    };

  } catch (error: any) {
    console.error(error);
    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ error: error.message || "Something went wrong" }),
    };
  }
};
