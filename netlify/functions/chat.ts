import { Handler } from '@netlify/functions';
import { GoogleGenAI } from '@google/genai';

let aiClient: GoogleGenAI | null = null;

/**
 * Costruisce il client Gemini instradando SEMPRE le richieste tramite il
 * Netlify AI Gateway, usando le credenziali gestite da Netlify
 * (NETLIFY_AI_GATEWAY_KEY / NETLIFY_AI_GATEWAY_BASE_URL) che sono sempre
 * presenti nel runtime.
 *
 * Questo evita il problema in cui una GEMINI_API_KEY impostata manualmente sul
 * sito (non valida o scaduta) farebbe inviare le richieste direttamente a
 * Google, causando l'errore ricorrente "API key not valid".
 */
function createClient(): GoogleGenAI {
  const gatewayKey = process.env.NETLIFY_AI_GATEWAY_KEY;
  const gatewayBase = process.env.NETLIFY_AI_GATEWAY_BASE_URL;

  // Endpoint Gemini del gateway: usa quello iniettato da Netlify se disponibile,
  // altrimenti derivalo dalla base sempre presente del gateway.
  const geminiBaseUrl =
    process.env.GOOGLE_GEMINI_BASE_URL ||
    (gatewayBase ? `${gatewayBase.replace(/\/\/+$/, '')}/gemini` : undefined);

  if (gatewayKey && geminiBaseUrl) {
    return new GoogleGenAI({
      apiKey: gatewayKey,
      httpOptions: { baseUrl: geminiBaseUrl },
    });
  }

  // Fallback (es. sviluppo locale senza gateway): configurazione automatica.
  return new GoogleGenAI({});
}

export const handler: Handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    // Il gateway fornisce sempre NETLIFY_AI_GATEWAY_KEY nel runtime. In assenza
    // sia di questa che di una GEMINI_API_KEY, non è possibile autenticarsi.
    if (!process.env.NETLIFY_AI_GATEWAY_KEY && !process.env.GEMINI_API_KEY) {
      return {
        statusCode: 401,
        body: JSON.stringify({ error: "API key mancante o non valida." })
      };
    }

    if (!aiClient) {
      aiClient = createClient();
    }

    const body = JSON.parse(event.body || '{}');
    const { history, message } = body;

    const chat = aiClient.chats.create({
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
   - Valutazione Integrata: Unione di strumenti psicometrici scientificamente validati (es. HEXACO) e Analisi Semantica.
4. Servizi aggiuntivi: Esegue servizi di Leadership Assessment puro. Mantiene un follow-up e check-in periodici.
5. Innovazione: Usa uno stack tecnico proprietario per ridurre i tempi e arricchire la reportistica.

REGOLE:
- Attieniti SCRUPOLOSAMENTE a queste informazioni. Non inventare servizi.
- Usa un tono consulenziale, autorevole, analitico ed elegante. 
- Se ti chiedono dettagli su prospect, tariffe o cose non in elenco, invita a contattarlo nella sezione Contatti.`
      },
      history: history || []
    });

    const response = await chat.sendMessage({ message });
    
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: response.text })
    };
  } catch (error: any) {
    console.error("Chat API Error:", error);
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: error.message || "Qualcosa è andato storto nel server." })
    };
  }
};
