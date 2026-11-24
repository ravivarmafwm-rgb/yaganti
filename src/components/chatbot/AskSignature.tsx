'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { X, Minus, MessageCircle, Send, Trash2 } from 'lucide-react';
import {
  faqKnowledgeBase, quickActions, welcomeMessage, unknownResponse,
  type ChatbotMessage, type FAQEntry,
} from '@/src/data/chatbot-faq';
import { siteConfig } from '@/src/config/site';

function findAnswer(query: string): FAQEntry | null {
  const q = query.toLowerCase();
  for (const entry of faqKnowledgeBase) {
    if (entry.keywords.some((k) => q.includes(k))) return entry;
  }
  return null;
}

function answerOrUnknown(query: string) {
  const answer = findAnswer(query);
  return answer
    ? { text: answer.answer, quickReplies: answer.quickReplies }
    : { text: unknownResponse };
}

function getBotResponse(query: string): { text: string; quickReplies?: string[] } {
  const lq = query.toLowerCase();

  // Quick action routing
  if (lq === 'about the project') return answerOrUnknown('about project');
  if (lq === 'apartment sizes') return answerOrUnknown('size');
  if (lq === 'floor plans') return answerOrUnknown('floor plan');
  if (lq === 'amenities') return answerOrUnknown('amenities');
  if (lq === 'specifications') return answerOrUnknown('specification');
  if (lq === 'location') return answerOrUnknown('location');
  if (lq === 'download brochure') return { text: 'You can download the brochure from the button below.', quickReplies: ['Schedule a Site Visit', 'Contact Sales Team'] };
  if (lq === 'request pricing') return answerOrUnknown('price');
  if (lq === 'schedule a site visit') return answerOrUnknown('site visit');
  if (lq === 'contact sales team') return { text: `You can reach our sales team at:\n\n📞 ${siteConfig.phones[0].display}\n📞 ${siteConfig.phones[1].display}\n\n📧 ${siteConfig.email}`, quickReplies: ['About the Project', 'Apartment Sizes'] };

  const match = findAnswer(query);
  if (match) return { text: match.answer, quickReplies: match.quickReplies };
  return { text: unknownResponse, quickReplies: ['Contact Sales Team', 'Schedule a Site Visit'] };
}

let msgId = 0;
function makeMsg(role: 'user' | 'assistant', content: string, quickReplies?: string[]): ChatbotMessage {
  return { id: String(++msgId), role, content, timestamp: new Date(), quickReplies };
}

export function AskSignature() {
  const [open, setOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatbotMessage[]>([
    makeMsg('assistant', welcomeMessage, quickActions.slice(0, 5)),
  ]);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, open]);

  useEffect(() => {
    if (open && !minimized) inputRef.current?.focus();
  }, [open, minimized]);

  const send = (text: string) => {
    if (!text.trim()) return;
    setMessages((m) => [...m, makeMsg('user', text)]);
    setInput('');
    setTimeout(() => {
      const { text: answer, quickReplies } = getBotResponse(text);
      setMessages((m) => [...m, makeMsg('assistant', answer, quickReplies)]);
    }, 500);
  };

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); send(input); };

  return (
    <>
      {/* Launcher */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-20 right-4 sm:right-6 lg:bottom-8 lg:right-8 z-50 w-14 h-14 bg-gold text-white rounded-full flex items-center justify-center shadow-xl hover:bg-gold-dark transition-all focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 group"
          aria-label="Open Ask Signature chatbot"
        >
          <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white" aria-hidden="true" />
        </button>
      )}

      {/* Chat window */}
      {open && (
        <div
          className={`fixed z-50 shadow-2xl transition-all duration-300 ${minimized ? 'bottom-20 right-4 sm:right-6 lg:bottom-8 lg:right-8 w-72 h-auto' : 'bottom-20 right-2 left-2 sm:left-auto sm:right-4 lg:bottom-8 lg:right-8 w-auto sm:w-96 h-[560px] max-h-[80vh]'} flex flex-col bg-white border border-border-gold overflow-hidden`}
          role="dialog"
          aria-label="Ask Signature chatbot"
        >
          {/* Header */}
          <div className="bg-charcoal px-4 py-3 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gold flex items-center justify-center rounded-full">
                <MessageCircle className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="font-body text-xs font-semibold text-white leading-none">Ask Signature</p>
                <p className="font-body text-xs text-white/50 leading-none mt-0.5">Project Assistant</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setMessages([makeMsg('assistant', welcomeMessage, quickActions.slice(0, 5))])}
                className="text-white/50 hover:text-white transition-colors p-1"
                aria-label="Clear chat"
                title="Clear chat"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setMinimized((m) => !m)}
                className="text-white/50 hover:text-white transition-colors p-1"
                aria-label={minimized ? 'Expand' : 'Minimize'}
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setOpen(false)}
                className="text-white/50 hover:text-white transition-colors p-1"
                aria-label="Close chatbot"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {!minimized && (
            <>
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
                {messages.map((msg) => (
                  <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] ${msg.role === 'user' ? 'bg-gold text-white' : 'bg-ivory border border-border-gold text-charcoal'} px-4 py-3 text-sm font-body leading-relaxed`}>
                      <p className="whitespace-pre-line">{msg.content}</p>

                      {/* Quick replies */}
                      {msg.quickReplies && msg.quickReplies.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {msg.quickReplies.map((qr) => (
                            qr === 'Download Brochure' ? (
                              <a
                                key={qr}
                                href={siteConfig.brochurePath}
                                download
                                className="inline-block px-2.5 py-1 text-xs border border-gold text-gold hover:bg-gold hover:text-white transition-colors"
                              >
                                {qr}
                              </a>
                            ) : qr === 'View Floor Plans' ? (
                              <Link
                                key={qr}
                                href="/floor-plans"
                                className="inline-block px-2.5 py-1 text-xs border border-gold text-gold hover:bg-gold hover:text-white transition-colors"
                              >
                                {qr}
                              </Link>
                            ) : (
                              <button
                                key={qr}
                                onClick={() => send(qr)}
                                className="px-2.5 py-1 text-xs border border-gold text-gold hover:bg-gold hover:text-white transition-colors"
                              >
                                {qr}
                              </button>
                            )
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                <div ref={bottomRef} />
              </div>

              {/* Quick actions (shown when no input) */}
              {messages.length === 1 && (
                <div className="px-4 pb-2 flex flex-wrap gap-1.5 max-h-28 overflow-y-auto scrollbar-hide">
                  {quickActions.slice(5).map((a) => (
                    <button
                      key={a}
                      onClick={() => send(a)}
                      className="px-2.5 py-1 text-xs border border-border-gold text-muted hover:border-gold hover:text-gold transition-colors"
                    >
                      {a}
                    </button>
                  ))}
                </div>
              )}

              {/* Input */}
              <form onSubmit={handleSubmit} className="flex-shrink-0 border-t border-border-gold flex">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about the project…"
                  className="flex-1 px-4 py-3 font-body text-sm text-charcoal bg-white focus:outline-none placeholder:text-muted/60"
                  aria-label="Type your message"
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="px-4 py-3 bg-gold text-white hover:bg-gold-dark transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </>
          )}
        </div>
      )}
    </>
  );
}
