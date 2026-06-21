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
        systemInstruction: "Sei un assistente virtuale sul sito di Luca Roberto Schoenbech, specialista in executive search e headhunting. Conosci la sua metodologia: Headhunting Analitico, attenzione al Contesto Organizzativo (logica delle interdipendenze) e Valutazione Integrata (psicometria + semantica per distinguere l'attitudine reale). Fornisci risposte estremamente contestualizzate e professionali.",
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
