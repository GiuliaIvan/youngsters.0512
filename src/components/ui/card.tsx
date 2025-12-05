"use client";

import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function Card({ children, className = "", onClick }: CardProps) {
  return (
    <div 
      className={`bg-[#f7f7f7] rounded-[10px] ${onClick ? 'cursor-pointer hover:bg-[#f0f0f0] transition-colors' : ''} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

interface CardHeaderProps {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  action?: ReactNode;
}

export function CardHeader({ title, subtitle, icon, action }: CardHeaderProps) {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center gap-3">
        {icon && (
          <div className="w-10 h-10 rounded-full bg-[#5e3dc2]/10 flex items-center justify-center text-[#5e3dc2]">
            {icon}
          </div>
        )}
        <div>
          <h3 className="text-[16px] font-semibold text-black tracking-[-0.32px]">{title}</h3>
          {subtitle && (
            <p className="text-[14px] text-[rgba(60,60,67,0.6)] tracking-[-0.15px]">{subtitle}</p>
          )}
        </div>
      </div>
      {action && action}
    </div>
  );
}

export function CardContent({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`px-4 pb-4 ${className}`}>
      {children}
    </div>
  );
}

// Accent Card variant for highlighted content
interface AccentCardProps {
  children: ReactNode;
  variant?: "orange" | "purple" | "green";
  className?: string;
  onClick?: () => void;
}

export function AccentCard({ children, variant = "orange", className = "", onClick }: AccentCardProps) {
  const variants = {
    orange: "bg-gradient-to-br from-[#ff5b24] to-[#ff7a4d]",
    purple: "bg-gradient-to-br from-[#5e3dc2] to-[#7b5cd6]",
    green: "bg-gradient-to-br from-[#00a651] to-[#00c853]",
  };

  return (
    <div 
      className={`${variants[variant]} rounded-[14px] text-white ${onClick ? 'cursor-pointer hover:opacity-95 transition-opacity' : ''} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

