"use client";

import { X, Send, Sparkles, TrendingUp, Target, Lightbulb } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

interface VippsiAssistantProps {
  isOpen: boolean;
  onClose: () => void;
  context?: "home" | "goals" | "insights" | "learn" | "rewards" | "me";
}

interface SuggestionChipProps {
  icon: React.ReactNode;
  text: string;
  onClick: () => void;
}

function SuggestionChip({ icon, text, onClick }: SuggestionChipProps) {
  return (
    <button 
      className="flex items-center gap-2 px-3 py-2 bg-white/10 rounded-full text-white text-[13px] font-medium hover:bg-white/20 transition-colors"
      onClick={onClick}
    >
      {icon}
      {text}
    </button>
  );
}

interface MessageProps {
  type: "user" | "vippsi";
  content: string;
}

function Message({ type, content }: MessageProps) {
  return (
    <div className={`flex ${type === "user" ? "justify-end" : "justify-start"} gap-2`}>
      {type === "vippsi" && (
        <div className="w-8 h-8 rounded-full bg-white overflow-hidden flex-shrink-0">
          <Image 
            src="/Vippsi 1.png" 
            alt="Vippsi" 
            width={32}
            height={32}
            className="object-cover scale-150 translate-y-0.5"
          />
        </div>
      )}
      <div 
        className={`max-w-[75%] px-4 py-3 rounded-[18px] ${
          type === "user" 
            ? "bg-white text-[#333] rounded-br-[4px]" 
            : "bg-white/15 text-white rounded-bl-[4px]"
        }`}
      >
        <p className="text-[15px] leading-[1.4]">{content}</p>
      </div>
    </div>
  );
}

export function VippsiAssistant({ isOpen, onClose, context = "home" }: VippsiAssistantProps) {
  const [messages, setMessages] = useState<MessageProps[]>([
    {
      type: "vippsi",
      content: getContextualGreeting(context),
    }
  ]);
  const [inputValue, setInputValue] = useState("");

  if (!isOpen) return null;

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    setMessages(prev => [
      ...prev,
      { type: "user", content: inputValue },
      { type: "vippsi", content: getAIResponse(inputValue) }
    ]);
    setInputValue("");
  };

  const handleSuggestionClick = (suggestion: string) => {
    setMessages(prev => [
      ...prev,
      { type: "user", content: suggestion },
      { type: "vippsi", content: getAIResponse(suggestion) }
    ]);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Panel */}
      <div 
        className="relative w-full max-w-[430px] h-[85vh] bg-gradient-to-b from-[#ff5b24] to-[#e04d1d] rounded-t-[28px] flex flex-col overflow-hidden animate-slide-up"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 pt-4 pb-3">
          <div className="flex items-center gap-3">
            {/* Vippsi Avatar */}
            <div className="w-12 h-12 rounded-full bg-white overflow-hidden flex items-center justify-center">
              <Image 
                src="/Vippsi 1.png" 
                alt="Vippsi" 
                width={44}
                height={44}
                className="object-cover scale-150 translate-y-0.5"
              />
            </div>
            <div>
              <h2 className="text-white text-[18px] font-semibold">Vippsi</h2>
              <p className="text-white/70 text-[13px]">Your money buddy</p>
            </div>
          </div>
          <button 
            className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            onClick={onClose}
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Quick Suggestions */}
        <div className="px-5 py-3 flex flex-wrap gap-2">
          <SuggestionChip 
            icon={<Sparkles className="w-4 h-4" />}
            text="Money tip"
            onClick={() => handleSuggestionClick("Give me a money tip")}
          />
          <SuggestionChip 
            icon={<Target className="w-4 h-4" />}
            text="Goal progress"
            onClick={() => handleSuggestionClick("How are my goals doing?")}
          />
          <SuggestionChip 
            icon={<TrendingUp className="w-4 h-4" />}
            text="My spending"
            onClick={() => handleSuggestionClick("Show my spending")}
          />
          <SuggestionChip 
            icon={<Lightbulb className="w-4 h-4" />}
            text="Save more"
            onClick={() => handleSuggestionClick("How can I save more?")}
          />
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3">
          {messages.map((message, index) => (
            <Message key={index} type={message.type} content={message.content} />
          ))}
        </div>

        {/* Input */}
        <div className="px-5 pb-8 pt-3 bg-gradient-to-t from-[#d44418] to-transparent">
          <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2">
            <input
              type="text"
              placeholder="Ask Vippsi anything..."
              className="flex-1 bg-transparent text-[15px] text-[#333] placeholder-[#999] outline-none"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            />
            <button 
              className="w-8 h-8 rounded-full bg-[#ff5b24] flex items-center justify-center hover:bg-[#e55420] transition-colors"
              onClick={handleSendMessage}
            >
              <Send className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function getContextualGreeting(context: string): string {
  const greetings: Record<string, string> = {
    home: "Hey there! 👋 I see you've been doing great with your money lately. Want me to help you save even more?",
    goals: "Looking at your goals! 🎯 You're 60% there on your gaming headset. Keep it up!",
    insights: "Let me break down your spending for you! 📊 Looks like snacks are your biggest expense this week.",
    learn: "Ready to level up your money skills? 📚 You're on a 5-day streak!",
    rewards: "Check out all your awesome badges! 🏆 You're so close to unlocking the Super Saver badge!",
    me: "Hey! Want to customize how I help you? Or maybe check out your year in review? ✨",
  };
  return greetings[context] || greetings.home;
}

function getAIResponse(input: string): string {
  const responses: Record<string, string> = {
    "Give me a money tip": "Here's a tip: Try the 24-hour rule! 🕐 When you want to buy something, wait 24 hours. If you still want it the next day, it might be worth it!",
    "How are my goals doing?": "Your goals are looking good! 🎯 You're 60% to your gaming headset (720 kr saved!) and 30% to your concert tickets. Keep adding a little each week!",
    "Show my spending": "This week you spent 245 kr total: 89 kr on snacks 🍿, 120 kr on games 🎮, and 36 kr on gifts 🎁. That's 15% less than last week - nice job!",
    "How can I save more?": "Great question! 💡 Here are 3 easy ways:\n1. Set up auto-save (even 10 kr/week adds up!)\n2. Challenge yourself: no-spend days\n3. Put birthday money straight into goals!",
  };
  
  // Default response for unknown inputs
  return responses[input] || "That's a great question! 🤔 I'm here to help you understand money better. Try asking about your goals, spending, or tips for saving!";
}

// Floating Vippsi Button Component
interface FloatingVippsiButtonProps {
  onClick: () => void;
  hasNotification?: boolean;
}

export function FloatingVippsiButton({ onClick, hasNotification = false }: FloatingVippsiButtonProps) {
  return (
    <div className="fixed bottom-[140px] right-4 z-50">
      <button 
        className="
          w-16 h-16 
          rounded-full 
          bg-white
          flex items-center justify-center
          shadow-xl shadow-black/20
          hover:scale-105 active:scale-95
          transition-transform duration-200
          relative
          overflow-hidden
        "
        onClick={onClick}
      >
        <Image 
          src="/Vippsi 1.png" 
          alt="Vippsi" 
          width={56}
          height={56}
          className="object-cover scale-150 translate-y-1"
        />
        
        {/* Notification dot */}
        {hasNotification && (
          <div className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-[#ff5b24] rounded-full border-2 border-white flex items-center justify-center">
            <span className="text-[9px] text-white font-bold">1</span>
          </div>
        )}
        
        {/* Pulse animation */}
        <div className="absolute inset-0 rounded-full bg-[#ff5b24]/20 animate-ping opacity-30" />
      </button>
    </div>
  );
}
