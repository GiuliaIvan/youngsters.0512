"use client";

import { ReactNode } from "react";
import Image from "next/image";

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
    vippsi: "bg-white text-white",
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
  onClick?: () => void;
}

export function VippsiAvatar({ size = "md", onClick }: VippsiAvatarProps) {
  const sizes = {
    sm: { container: "w-10 h-10", img: 32 },
    md: { container: "w-14 h-14", img: 48 },
    lg: { container: "w-20 h-20", img: 72 },
    xl: { container: "w-28 h-28", img: 100 },
  };

  return (
    <button 
      className={`
        ${sizes[size].container} 
        rounded-full 
        bg-white
        flex items-center justify-center
        shadow-lg shadow-black/10
        hover:scale-105 active:scale-95
        transition-transform duration-200
        overflow-hidden
        ${onClick ? 'cursor-pointer' : ''}
      `}
      onClick={onClick}
    >
      <Image 
        src="/Vippsi 1.png" 
        alt="Vippsi" 
        width={sizes[size].img}
        height={sizes[size].img}
        className="object-cover scale-150 translate-y-1"
      />
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
      </button>
    </div>
  );
}
