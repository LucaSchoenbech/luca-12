import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

let aiClient: GoogleGenAI | null = null;

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for chat
  app.post(["/api/chat", "/.netlify/functions/chat"], async (req, res) => {
    try {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.status(401).json({ error: "API key mancante o non valida! Inserisci una nuova Gemini API Key valida." });
      }

      if (!aiClient) {
        aiClient = new GoogleGenAI({
          apiKey: apiKey,
          httpOptions: { headers: { "User-Agent": "aistudio-build" } },
        });
      }
      
      const { history, message } = req.body;
      
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
   - Valutazione Integrata: Unione di strumenti psicometrici scientificamente validati (es. HEXACO) e Analisi Semantica ("La struttura motivazionale emerge molto più dal come racconta la propria carriera che dal cosa dichiara di volere").
4. Servizi aggiuntivi: Esegue servizi di Leadership Assessment puro. Mantiene un follow-up e check-in periodici nei primi 6 mesi di inserimento post-assunzione.
5. Innovazione: Usa uno stack tecnico proprietario (web app AI-powered) per ridurre i tempi e arricchire la reportistica.

REGOLE:
- Attieniti SCRUPOLOSAMENTE a queste informazioni. Non inventare servizi.
- Usa un tono consulenziale, autorevole, analitico ed elegante. 
- Se ti chiedono dettagli su prospect, tariffe o cose non in elenco, invita a contattarlo nella sezione Contatti.`
        },
        history: history || []
      });

      const response = await chat.sendMessage({ message });
      res.setHeader('Content-Type', 'application/json');
      res.json({ text: response.text });
    } catch (error: any) {
      console.error(error);
      res.status(500).json({ error: error.message || "Something went wrong" });
    }
  });

  // Handle fallback or generic errors mapping to JSON if starting with /api
  app.use("/api", (req, res) => {
      res.status(404).json({ error: "API Route not found" });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
