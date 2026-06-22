import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Loader2 } from 'lucide-react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: string, text: string}[]>([{
    role: "model",
    text: "Ciao! Sono l'assistente virtuale di Luca Roberto Schoenbech. Come posso aiutarti oggi?"
  }]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: "user", text: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch('/.netlify/functions/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage,
          history: messages.slice(1).map(m => ({
            role: m.role,
            parts: [{ text: m.text }]
          }))
        }),
      });

      const textResponse = await response.text();
      let data;
      try {
        data = JSON.parse(textResponse);
      } catch (parseError) {
        console.error("Non-JSON response received:", textResponse.substring(0, 200));
        throw new Error(`Il server ha risposto con un formato non valido. (Status: ${response.status}). Assicurati che le Netlify Functions siano state deployate correttamente.`);
      }

      if (!response.ok) {
        throw new Error(data.error || "Errore nella comunicazione");
      }

      setMessages(prev => [...prev, { role: "model", text: data.text }]);
    } catch (error: any) {
      console.error(error);
      setMessages(prev => [...prev, { role: "model", text: "Scusa, si è verificato un errore: " + error.message }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 p-4 rounded-full bg-ink text-white shadow-lg transition-all duration-300 hover:scale-105 z-50 ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
      >
        <MessageCircle size={24} />
      </button>

      <div className={`fixed bottom-6 right-6 w-96 h-[500px] max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right z-50 transform ${isOpen ? 'scale-100 opacity-100 pointer-events-auto' : 'scale-0 opacity-0 pointer-events-none'}`}>
        <div className="bg-ink text-white p-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Bot size={20} />
            <h3 className="font-medium">Assistente Virtuale</h3>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-paper">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-ink text-white' : 'bg-gray-200 text-ink'}`}>
                {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
              </div>
              <div className={`px-4 py-2 rounded-2xl max-w-[80%] whitespace-pre-wrap text-sm ${msg.role === 'user' ? 'bg-ink text-white rounded-tr-sm' : 'bg-white text-ink shadow-sm rounded-tl-sm border border-gray-100'}`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-gray-200 text-ink flex items-center justify-center shrink-0">
                <Bot size={16} />
              </div>
              <div className="px-4 py-2 rounded-2xl bg-white text-ink shadow-sm rounded-tl-sm border border-gray-100 flex items-center">
                <Loader2 size={16} className="animate-spin text-gray-400" />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-4 bg-white border-t border-gray-100">
          <form 
            onSubmit={(e) => { e.preventDefault(); handleSend(); }}
            className="flex gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Scrivi un messaggio..."
              className="flex-1 px-4 py-2 outline-none bg-paper rounded-full border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent transition-all text-sm"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="p-2 rounded-full bg-ink text-white disabled:opacity-50 hover:bg-black transition-colors shrink-0"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
