import { useState, useEffect, useRef } from 'react';
import { Message, Language } from './types';
import { ChatMessage } from './components/ChatMessage';
import { LanguageSelector } from './components/LanguageSelector';
import { generateResponse } from './services/paulService';
import './App.css';

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState<Language>('en');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const greeting: Message = {
      id: crypto.randomUUID(),
      role: 'assistant',
      content: generateResponse('', selectedLanguage, true),
      timestamp: new Date(),
    };
    setMessages([greeting]);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleLanguageChange = (language: Language) => {
    setSelectedLanguage(language);
    const greeting: Message = {
      id: crypto.randomUUID(),
      role: 'assistant',
      content: generateResponse('', language, true),
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, greeting]);
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: 'user',
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    setTimeout(() => {
      const response = generateResponse(inputValue, selectedLanguage, false);
      const assistantMessage: Message = {
        id: crypto.randomUUID(),
        role: 'assistant',
        content: response,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Paul AI</h1>
        <p className="subtitle">Multilingual Assistant for Math, History & Moral Guidance</p>
        <LanguageSelector
          selectedLanguage={selectedLanguage}
          onLanguageChange={handleLanguageChange}
        />
      </header>

      <div className="chat-container">
        <div className="messages-list">
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
          {isLoading && (
            <div className="loading-indicator">
              <span>Paul is thinking...</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSendMessage} className="input-form">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask Paul anything..."
            className="message-input"
            disabled={isLoading}
          />
          <button type="submit" className="send-button" disabled={isLoading || !inputValue.trim()}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
