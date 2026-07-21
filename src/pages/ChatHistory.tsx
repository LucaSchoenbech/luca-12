import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Bot, User, Clock, Loader2, Lock } from 'lucide-react';

interface ChatMessage {
  id: string;
  sessionId: string;
  role: string;
  text: string;
  timestamp: string;
}

export default function ChatHistory() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  const fetchHistory = (pass: string) => {
    setLoading(true);
    setError('');
    fetch('/api/chat/history', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password: pass }),
    })
      .then(async res => {
        if (!res.ok) {
          const errData = await res.json().catch(() => ({}));
          throw new Error(errData.error || 'Errore durante il recupero dello storico');
        }
        return res.json();
      })
      .then(data => {
        setMessages(data);
        setIsAuthenticated(true);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!password.trim()) return;
    fetchHistory(password);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20 bg-paper">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 max-w-sm w-full"
        >
          <div className="flex flex-col items-center mb-8">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-ink mb-4">
              <Lock size={24} />
            </div>
            <h2 className="text-2xl font-display font-medium text-ink">Area Riservata</h2>
            <p className="text-gray-500 text-sm text-center mt-2">
              Inserisci la password per accedere allo storico delle conversazioni.
            </p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                disabled={loading}
              />
            </div>
            
            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}
            
            <button
              type="submit"
              disabled={loading || !password.trim()}
              className="w-full py-3 bg-ink text-white rounded-xl hover:bg-black transition-colors disabled:opacity-50 flex items-center justify-center"
            >
              {loading ? <Loader2 size={20} className="animate-spin" /> : "Accedi"}
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  // Group messages by session
  const grouped = messages.reduce((acc, msg) => {
    if (!acc[msg.sessionId]) {
      acc[msg.sessionId] = [];
    }
    acc[msg.sessionId].push(msg);
    return acc;
  }, {} as Record<string, ChatMessage[]>);

  // Sort groups by the timestamp of the most recent message in each session
  const sortedSessions = Object.entries(grouped).sort((a, b) => {
    const timeA = new Date(a[1][0].timestamp).getTime();
    const timeB = new Date(b[1][0].timestamp).getTime();
    return timeB - timeA;
  });

  return (
    <div className="py-24 md:py-32 bg-paper min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-display font-medium text-ink flex items-center gap-3">
              <MessageCircle className="text-accent" />
              Chatbot History
            </h1>
            <p className="text-gray-500 font-light">
              Storico delle interazioni degli utenti con l'assistente virtuale.
            </p>
          </div>

          <div className="flex justify-end">
             <button onClick={() => fetchHistory(password)} className="text-sm text-gray-500 hover:text-accent flex items-center gap-2">
                {loading && <Loader2 size={14} className="animate-spin" />}
                Aggiorna dati
             </button>
          </div>

          {error && (
            <div className="p-4 bg-red-50 text-red-600 rounded-lg">
              {error}
            </div>
          )}

          {sortedSessions.length === 0 && !error && (
            <div className="p-8 text-center text-gray-500 bg-white rounded-2xl shadow-sm border border-gray-100">
              Nessuna conversazione registrata al momento.
            </div>
          )}

          <div className="space-y-8">
            {sortedSessions.map(([sessionId, sessionMessages]) => {
              // Order messages chronologically for display
              const chronologicalMessages = [...sessionMessages].sort((a, b) => 
                new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
              );
              
              const lastInteraction = new Date(sessionMessages[0].timestamp);

              return (
                <div key={sessionId} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className="bg-gray-50 p-4 border-b border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-3 text-sm">
                      <span className="font-medium text-ink">Session: {sessionId}</span>
                      <span className="text-gray-400">|</span>
                      <span className="text-gray-500 flex items-center gap-1">
                        <Clock size={14} />
                        {lastInteraction.toLocaleString()}
                      </span>
                    </div>
                    <div className="text-xs text-gray-400">
                      {sessionMessages.length} messaggi
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    {chronologicalMessages.map((msg) => (
                      <div key={msg.id} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-ink text-white' : 'bg-gray-200 text-ink'}`}>
                          {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                        </div>
                        <div className={`px-4 py-2 rounded-2xl max-w-[80%] whitespace-pre-wrap text-sm ${msg.role === 'user' ? 'bg-ink text-white rounded-tr-sm' : 'bg-paper text-ink shadow-sm rounded-tl-sm border border-gray-100'}`}>
                          {msg.text}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
