import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
import fs from "fs";
import { initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

dotenv.config();

let aiClient: GoogleGenAI | null = null;
let db: FirebaseFirestore.Firestore | null = null;

try {
  const configPath = path.join(process.cwd(), "firebase-applet-config.json");
  if (fs.existsSync(configPath)) {
    const config = JSON.parse(fs.readFileSync(configPath, "utf-8"));
    initializeApp({ projectId: config.projectId });
    db = getFirestore(config.firestoreDatabaseId);
    console.log("Firebase Admin initialized with DB:", config.firestoreDatabaseId);
  }
} catch (e) {
  console.error("Failed to initialize Firebase Admin:", e);
}

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
      
      const { history, message, sessionId } = req.body;
      
      // Salva il messaggio dell'utente
      if (db) {
        try {
          await db.collection("chatbot_conversations").add({
            sessionId: sessionId || "anonymous",
            role: "user",
            text: message,
            timestamp: new Date()
          });
        } catch (dbErr) {
          console.error("Error saving user message to db", dbErr);
        }
      }

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
      
      // Salva la risposta del modello
      if (db) {
        try {
          await db.collection("chatbot_conversations").add({
            sessionId: sessionId || "anonymous",
            role: "model",
            text: response.text,
            timestamp: new Date()
          });
        } catch (dbErr) {
          console.error("Error saving model message to db", dbErr);
        }
      }

      res.setHeader('Content-Type', 'application/json');
      res.json({ text: response.text });
    } catch (error: any) {
      console.error("Local Chat API Error:", error);
      res.status(500).json({ error: error.message || "Qualcosa è andato storto nel server." });
    }
  });

  // API Route for chat history
  app.post("/api/chat/history", async (req, res) => {
    const { password } = req.body;
    
    // Controlla la password
    const adminPassword = process.env.ADMIN_PASSWORD || "admin123";
    if (password !== adminPassword) {
      return res.status(401).json({ error: "Password non valida" });
    }

    if (!db) {
      return res.status(500).json({ error: "Database non inizializzato" });
    }
    try {
      const snapshot = await db.collection("chatbot_conversations")
        .orderBy("timestamp", "desc")
        .limit(500)
        .get();
      
      const conversations = snapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          sessionId: data.sessionId,
          role: data.role,
          text: data.text,
          timestamp: data.timestamp?.toDate()?.toISOString() || null
        };
      });
      
      res.json(conversations);
    } catch (error: any) {
      console.error("Error fetching chat history", error);
      res.status(500).json({ error: "Failed to fetch history" });
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
