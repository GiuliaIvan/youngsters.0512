"use client";

import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "success" | "warning" | "purple" | "orange";
  size?: "sm" | "md";
}

export function Badge({ children, variant = "default", size = "sm" }: BadgeProps) {
  const variants = {
    default: "bg-[rgba(118,118,128,0.12)] text-black",
    success: "bg-[rgba(8,145,63,0.12)] text-[#006627]",
    warning: "bg-[rgba(255,149,0,0.12)] text-[#cc5500]",
    purple: "bg-[rgba(94,61,194,0.12)] text-[#5e3dc2]",
    orange: "bg-[rgba(255,91,36,0.12)] text-[#ff5b24]",
  };

  const sizes = {
    sm: "px-2 py-0.5 text-[12px]",
    md: "px-3 py-1 text-[14px]",
  };

  return (
    <span className={`inline-flex items-center font-medium rounded-full ${variants[variant]} ${sizes[size]}`}>
      {children}
    </span>
  );
}

// Achievement Badge - larger, more prominent
interface AchievementBadgeProps {
  icon: ReactNode;
  title: string;
  unlocked?: boolean;
  variant?: "bronze" | "silver" | "gold" | "platinum";
}

export function AchievementBadge({ icon, title, unlocked = false, variant = "bronze" }: AchievementBadgeProps) {
  const variantStyles = {
    bronze: {
      bg: unlocked ? "bg-gradient-to-br from-[#cd7f32] to-[#a0522d]" : "bg-[rgba(118,118,128,0.2)]",
      ring: unlocked ? "ring-[#cd7f32]/30" : "ring-transparent",
    },
    silver: {
      bg: unlocked ? "bg-gradient-to-br from-[#c0c0c0] to-[#808080]" : "bg-[rgba(118,118,128,0.2)]",
      ring: unlocked ? "ring-[#c0c0c0]/30" : "ring-transparent",
    },
    gold: {
      bg: unlocked ? "bg-gradient-to-br from-[#ffd700] to-[#ffb700]" : "bg-[rgba(118,118,128,0.2)]",
      ring: unlocked ? "ring-[#ffd700]/30" : "ring-transparent",
    },
    platinum: {
      bg: unlocked ? "bg-gradient-to-br from-[#5e3dc2] to-[#ff5b24]" : "bg-[rgba(118,118,128,0.2)]",
      ring: unlocked ? "ring-[#5e3dc2]/30" : "ring-transparent",
    },
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <div 
        className={`w-16 h-16 rounded-full flex items-center justify-center ring-4 ${variantStyles[variant].bg} ${variantStyles[variant].ring} ${!unlocked ? 'opacity-50' : ''} transition-all`}
      >
        <div className={unlocked ? "text-white" : "text-[rgba(60,60,67,0.4)]"}>
          {icon}
        </div>
      </div>
      <span className={`text-[12px] font-medium text-center ${unlocked ? 'text-black' : 'text-[rgba(60,60,67,0.4)]'}`}>
        {title}
      </span>
    </div>
  );
}

// Streak Badge
interface StreakBadgeProps {
  count: number;
  isActive?: boolean;
}

export function StreakBadge({ count, isActive = true }: StreakBadgeProps) {
  return (
    <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full ${isActive ? 'bg-gradient-to-r from-[#ff5b24] to-[#ff7a4d] text-white' : 'bg-[rgba(118,118,128,0.12)] text-[rgba(60,60,67,0.6)]'}`}>
      <span className="text-[18px]">🔥</span>
      <span className="text-[14px] font-semibold">{count} day streak</span>
    </div>
  );
}

// XP Badge
interface XPBadgeProps {
  amount: number;
}

export function XPBadge({ amount }: XPBadgeProps) {
  return (
    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[rgba(94,61,194,0.12)]">
      <span className="text-[16px]">⭐</span>
      <span className="text-[14px] font-semibold text-[#5e3dc2]">{amount.toLocaleString()} XP</span>
    </div>
  );
}

