"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  onClick?: () => void;
  disabled?: boolean;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  icon,
  iconPosition = "left",
  onClick,
  disabled = false,
}: ButtonProps) {
  const variants = {
    primary: "bg-[#ff5b24] text-white hover:bg-[#e55420] active:bg-[#cc4a1c]",
    secondary: "bg-[#5e3dc2] text-white hover:bg-[#5236ad] active:bg-[#462f98]",
    outline: "bg-transparent border-2 border-[#5e3dc2] text-[#5e3dc2] hover:bg-[#5e3dc2]/5",
    ghost: "bg-transparent text-[#5e3dc2] hover:bg-[#5e3dc2]/10",
  };

  const sizes = {
    sm: "h-8 px-3 text-[13px] gap-1.5",
    md: "h-11 px-5 text-[15px] gap-2",
    lg: "h-14 px-6 text-[17px] gap-2.5",
  };

  return (
    <button
      className={`
        inline-flex items-center justify-center font-semibold rounded-full
        transition-all duration-200
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? "w-full" : ""}
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
      `}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && iconPosition === "left" && icon}
      {children}
      {icon && iconPosition === "right" && icon}
    </button>
  );
}

// Icon Button
interface IconButtonProps {
  icon: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "surface";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  label?: string;
}

export function IconButton({ icon, variant = "ghost", size = "md", onClick, label }: IconButtonProps) {
  const variants = {
    primary: "bg-[#ff5b24] text-white hover:bg-[#e55420]",
    secondary: "bg-[#5e3dc2] text-white hover:bg-[#5236ad]",
    ghost: "bg-transparent text-[#5e3dc2] hover:bg-[#5e3dc2]/10",
    surface: "bg-[#f7f7f7] text-[#5e3dc2] hover:bg-[#ebebeb]",
  };

  const sizes = {
    sm: "w-8 h-8",
    md: "w-11 h-11",
    lg: "w-14 h-14",
  };

  return (
    <button
      className={`
        inline-flex items-center justify-center rounded-full
        transition-all duration-200
        ${variants[variant]}
        ${sizes[size]}
      `}
      onClick={onClick}
      aria-label={label}
    >
      {icon}
    </button>
  );
}

// Action Button (used in floating bars)
interface ActionButtonProps {
  icon: ReactNode;
  label: string;
  onClick?: () => void;
}

export function ActionButton({ icon, label, onClick }: ActionButtonProps) {
  return (
    <button 
      className="flex flex-col items-center justify-center w-[56px] text-white hover:opacity-80 transition-opacity gap-1.5"
      onClick={onClick}
    >
      {icon}
      <span className="text-[12px] font-semibold leading-[13px]">{label}</span>
    </button>
  );
}

