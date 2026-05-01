"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

type Message = {
  id: number;
  from: "bot" | "user";
  text: string;
};

const BOT_RESPONSES = [
  "Thanks for reaching out! A member of our team will get back to you within a few hours. Want to tell us more about your project?",
  "Great! Could you share a bit more about your timeline or budget range? We'd love to tailor a proposal for you.",
  "Awesome — we'll pass this along to our team right away. You can also reach us at hello@nodern.agency for faster replies.",
];

let responseIndex = 0;

function getBotResponse() {
  const r = BOT_RESPONSES[responseIndex % BOT_RESPONSES.length];
  responseIndex++;
  return r;
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      from: "bot",
      text: "Hey there 👋 I'm the Nodern assistant. Have a question or want to start a project? I'm here to help!",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [unread, setUnread] = useState(1);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setUnread(0);
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text) return;
    setInput("");

    const userMsg: Message = { id: Date.now(), from: "user", text };
    setMessages((m) => [...m, userMsg]);

    setTyping(true);
    await new Promise((r) => setTimeout(r, 1200 + Math.random() * 600));
    setTyping(false);

    const botMsg: Message = {
      id: Date.now() + 1,
      from: "bot",
      text: getBotResponse(),
    };
    setMessages((m) => [...m, botMsg]);
    if (!open) setUnread((n) => n + 1);
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="w-[340px] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            style={{
              background: "rgba(10, 10, 25, 0.95)",
              backdropFilter: "blur(24px)",
            }}
          >
            {/* Header */}
            <div className="px-5 py-4 bg-gradient-to-r from-purple-600/80 to-blue-600/80 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Nodern Assistant</div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-xs text-white/70">Online now</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-white/70 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="h-72 overflow-y-auto px-4 py-4 space-y-3 scrollbar-thin">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className={`flex gap-2 ${msg.from === "user" ? "flex-row-reverse" : ""}`}
                >
                  <div
                    className={`w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center text-white ${
                      msg.from === "bot"
                        ? "bg-purple-600/60"
                        : "bg-blue-600/60"
                    }`}
                  >
                    {msg.from === "bot" ? (
                      <Bot className="w-3.5 h-3.5" />
                    ) : (
                      <User className="w-3.5 h-3.5" />
                    )}
                  </div>
                  <div
                    className={`max-w-[75%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      msg.from === "bot"
                        ? "bg-white/6 text-slate-200 rounded-tl-sm"
                        : "bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-tr-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              <AnimatePresence>
                {typing && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex gap-2 items-end"
                  >
                    <div className="w-7 h-7 rounded-full bg-purple-600/60 flex items-center justify-center text-white flex-shrink-0">
                      <Bot className="w-3.5 h-3.5" />
                    </div>
                    <div className="bg-white/6 rounded-2xl rounded-tl-sm px-4 py-3 flex gap-1">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          className="w-1.5 h-1.5 rounded-full bg-slate-400"
                          animate={{ y: [0, -4, 0] }}
                          transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            delay: i * 0.15,
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="px-4 py-3 border-t border-white/8 flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Type a message..."
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-purple-500/50 transition-all"
              />
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.93 }}
                onClick={sendMessage}
                disabled={!input.trim()}
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white disabled:opacity-40 transition-opacity flex-shrink-0"
              >
                <Send className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        onClick={() => setOpen((o) => !o)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.93 }}
        className="relative w-14 h-14 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-purple-900/50"
        style={{
          boxShadow: "0 0 30px rgba(124, 58, 237, 0.5), 0 4px 20px rgba(0,0,0,0.4)",
        }}
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div
              key="x"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Unread badge */}
        <AnimatePresence>
          {!open && unread > 0 && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white text-xs font-bold flex items-center justify-center"
            >
              {unread}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
