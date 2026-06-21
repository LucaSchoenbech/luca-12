import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

let aiClient: GoogleGenAI | null = null;

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for chat
  app.post("/api/chat", async (req, res) => {
    try {
      const apiKey = process.env.GEMINI_API_KEY || "AIzaSyDkszHTDUOfri1pmov03rnoqdmE0DRGoYU";
      if (!apiKey) {
        return res.status(401).json({ error: "API key mancante! Assicurati di aver configurato una API Key di Gemini nelle impostazioni del progetto (Secrets panel)." });
      }

      let aiClientInstance = aiClient;
      if (!aiClientInstance) {
        aiClientInstance = new GoogleGenAI({
          apiKey: apiKey,
          httpOptions: {
            headers: {
              "User-Agent": "aistudio-build",
            },
          },
        });
        aiClient = aiClientInstance;
      }
      
      const { history, message } = req.body;
      
      const chat = aiClientInstance.chats.create({
        model: "gemini-3.5-flash",
        config: {
          systemInstruction: "Sei un assistente virtuale sul sito di Luca Roberto Schoenbech, specialista in executive search e headhunting. Conosci la sua metodologia: Headhunting Analitico, attenzione al Contesto Organizzativo (logica delle interdipendenze) e Valutazione Integrata (psicometria + semantica per distinguere l'attitudine reale). Fornisci risposte estremamente contestualizzate e professionali.",
        },
        history: history
      });

      const response = await chat.sendMessage({ message });
      res.json({ text: response.text });
    } catch (error: any) {
      console.error(error);
      res.status(500).json({ error: error.message || "Something went wrong" });
    }
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
