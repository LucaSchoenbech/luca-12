import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface Message {
  role: 'user' | 'model';
  parts: [{ text: string }];
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { t, i18n } = useTranslation();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage = inputValue.trim();
    setInputValue('');
    
    // Add user message to UI
    const updatedMessages = [...messages, { role: 'user' as const, parts: [{ text: userMessage }] }];
    setMessages(updatedMessages);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          history: messages,
          message: userMessage
        })
      });

      const contentType = response.headers.get("content-type");
      if (contentType && contentType.indexOf("application/json") !== -1) {
        const data = await response.json();
        if (response.ok) {
          setMessages(prev => [...prev, { role: 'model', parts: [{ text: data.text }] }]);
        } else {
          console.error('Chat error:', data.error);
          const errorText = data.error || (i18n.language === 'en' ? 'Server error.' : 'Errore del server.');
          setMessages(prev => [...prev, { role: 'model', parts: [{ text: `⚠️ ${errorText}` }] }]);
        }
      } else {
        const text = await response.text();
        console.error('Expected JSON, got text:', text.substring(0, 100));
        setMessages(prev => [...prev, { role: 'model', parts: [{ text: i18n.language === 'en' ? '⚠️ Application routing error.' : '⚠️ Errore di routing del server. Assicurati che le Netlify Functions siano attive.' }] }]);
      }
    } catch (error) {
      console.error('Fetch error:', error);
      setMessages(prev => [...prev, { role: 'model', parts: [{ text: i18n.language === 'en' ? 'Network error. Check connection.' : 'Errore di rete. Controlla la connessione.' }] }]);
    } finally {
      setIsLoading(false);
    }
  };

  const getGreeting = () => {
    return i18n.language === 'en' 
      ? "Hello! I am Luca Roberto Schoenbech's AI assistant. Ask me anything about his executive search methodology and insights."
      : "Ciao! Sono l'assistente AI di Luca Roberto Schoenbech. Chiedimi qualsiasi cosa sulla sua metodologia di executive search e i suoi insights.";
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 right-6 w-80 md:w-96 bg-paper border border-gray-200 shadow-2xl rounded-2xl overflow-hidden z-50 flex flex-col h-[500px] max-h-[80vh]"
          >
            <div className="bg-ink text-paper p-4 flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <MessageSquare size={20} className="text-accent" />
                <span className="font-display font-medium tracking-wide">Executive Assistant</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50">
              <div className="flex justify-start">
                  <div className="bg-white border border-gray-100 text-ink px-4 py-3 rounded-2xl rounded-tl-sm shadow-sm max-w-[85%] text-sm font-light leading-relaxed">
                  {getGreeting()}
                  </div>
              </div>

              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`
                    px-4 py-3 rounded-2xl shadow-sm text-sm font-light leading-relaxed max-w-[85%]
                    ${msg.role === 'user' 
                      ? 'bg-ink text-paper rounded-tr-sm' 
                      : 'bg-white border border-gray-100 text-ink rounded-tl-sm whitespace-pre-wrap'}
                  `}>
                    {msg.parts[0].text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-gray-100 text-ink px-4 py-3 rounded-2xl rounded-tl-sm shadow-sm flex items-center space-x-2">
                    <span className="w-2 h-2 bg-accent rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                    <span className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-gray-100">
              <div className="flex items-center border border-gray-200 rounded-full overflow-hidden focus-within:border-accent focus-within:ring-1 focus-within:ring-accent transition-all bg-gray-50">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder={i18n.language === 'en' ? "Type a message..." : "Scrivi un messaggio..."}
                  className="flex-1 px-4 py-3 bg-transparent text-sm focus:outline-none placeholder-gray-400 font-light"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isLoading}
                  className="p-3 text-ink hover:text-accent disabled:opacity-50 disabled:hover:text-ink transition-colors"
                >
                  <Send size={18} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className={`fixed bottom-6 right-6 p-4 rounded-full shadow-xl z-50 transition-all duration-300 ${isOpen ? 'bg-gray-200 text-ink' : 'bg-ink text-paper hover:scale-105'}`}
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle chat"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>
    </>
  );
}
