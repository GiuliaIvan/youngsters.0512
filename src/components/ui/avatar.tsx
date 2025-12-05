"use client";

import { ReactNode } from "react";

interface AvatarProps {
  src?: string;
  initials?: string;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "user" | "merchant" | "vippsi";
  children?: ReactNode;
}

export function Avatar({ src, initials, size = "md", variant = "user", children }: AvatarProps) {
  const sizes = {
    sm: "w-8 h-8 text-[12px]",
    md: "w-12 h-12 text-[16px]",
    lg: "w-14 h-14 text-[20px]",
    xl: "w-20 h-20 text-[28px]",
  };

  const variants = {
    user: "bg-[#ffe5db] text-[#ff5b24]",
    merchant: "bg-[#e6e4ec] text-[#49367d]",
    vippsi: "bg-gradient-to-br from-[#ff5b24] to-[#5e3dc2] text-white",
  };

  return (
    <div 
      className={`rounded-full overflow-hidden flex items-center justify-center flex-shrink-0 ${sizes[size]} ${variants[variant]}`}
    >
      {src ? (
        <img src={src} alt="" className="w-full h-full object-cover" />
      ) : children ? (
        children
      ) : initials ? (
        <span className="font-semibold uppercase tracking-[0.4px]">
          {initials}
        </span>
      ) : null}
    </div>
  );
}

// Vippsi Avatar - the mascot
interface VippsiAvatarProps {
  size?: "sm" | "md" | "lg" | "xl";
  mood?: "happy" | "excited" | "thinking" | "celebrating";
  onClick?: () => void;
}

export function VippsiAvatar({ size = "md", mood = "happy", onClick }: VippsiAvatarProps) {
  const sizes = {
    sm: "w-10 h-10",
    md: "w-14 h-14",
    lg: "w-20 h-20",
    xl: "w-28 h-28",
  };

  const moods = {
    happy: "😊",
    excited: "🤩",
    thinking: "🤔",
    celebrating: "🎉",
  };

  return (
    <button 
      className={`
        ${sizes[size]} 
        rounded-full 
        bg-gradient-to-br from-[#ff5b24] to-[#ff7a4d]
        flex items-center justify-center
        shadow-lg shadow-[#ff5b24]/30
        hover:scale-105 active:scale-95
        transition-transform duration-200
        ${onClick ? 'cursor-pointer' : ''}
      `}
      onClick={onClick}
    >
      {/* Vippsi face */}
      <div className="relative flex items-center justify-center">
        {/* Eyes */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-1.5">
          <div className="w-1.5 h-2 bg-white rounded-full" />
          <div className="w-1.5 h-2 bg-white rounded-full" />
        </div>
        {/* Mood indicator */}
        <span className={`text-${size === 'sm' ? 'lg' : size === 'md' ? 'xl' : '3xl'}`}>
          {moods[mood]}
        </span>
      </div>
    </button>
  );
}

// Floating Vippsi (fixed position avatar)
interface FloatingVippsiProps {
  onClick?: () => void;
  hasNotification?: boolean;
}

export function FloatingVippsi({ onClick, hasNotification = false }: FloatingVippsiProps) {
  return (
    <div className="fixed bottom-[180px] right-4 z-50">
      <button 
        className="
          w-16 h-16 
          rounded-full 
          bg-gradient-to-br from-[#ff5b24] to-[#ff7a4d]
          flex items-center justify-center
          shadow-xl shadow-[#ff5b24]/40
          hover:scale-105 active:scale-95
          transition-transform duration-200
          relative
        "
        onClick={onClick}
      >
        {/* Vippsi character */}
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          {/* Body */}
          <circle cx="18" cy="18" r="14" fill="white" fillOpacity="0.2"/>
          {/* Face */}
          <circle cx="13" cy="15" r="2.5" fill="white"/>
          <circle cx="23" cy="15" r="2.5" fill="white"/>
          <circle cx="14" cy="14" r="1" fill="#333"/>
          <circle cx="24" cy="14" r="1" fill="#333"/>
          {/* Smile */}
          <path d="M12 22C12 22 15 26 18 26C21 26 24 22 24 22" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
        
        {/* Notification dot */}
        {hasNotification && (
          <div className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#5e3dc2] rounded-full border-2 border-white flex items-center justify-center">
            <span className="text-[8px] text-white font-bold">!</span>
          </div>
        )}
      </button>
    </div>
  );
}

