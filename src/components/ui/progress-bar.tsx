"use client";

interface ProgressBarProps {
  progress: number; // 0-100
  variant?: "default" | "orange" | "purple" | "green" | "gradient";
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
  label?: string;
  animated?: boolean;
}

export function ProgressBar({ 
  progress, 
  variant = "default", 
  size = "md", 
  showLabel = false,
  label,
  animated = true 
}: ProgressBarProps) {
  const variants = {
    default: "bg-[#5e3dc2]",
    orange: "bg-[#ff5b24]",
    purple: "bg-[#5e3dc2]",
    green: "bg-[#00a651]",
    gradient: "bg-gradient-to-r from-[#ff5b24] to-[#5e3dc2]",
  };

  const sizes = {
    sm: "h-1.5",
    md: "h-2.5",
    lg: "h-4",
  };

  return (
    <div className="w-full">
      {(showLabel || label) && (
        <div className="flex justify-between items-center mb-1.5">
          <span className="text-[13px] text-[rgba(60,60,67,0.6)] tracking-[-0.08px]">
            {label || "Progress"}
          </span>
          <span className="text-[13px] font-medium text-black tracking-[-0.08px]">
            {Math.round(progress)}%
          </span>
        </div>
      )}
      <div className={`w-full bg-[rgba(118,118,128,0.12)] rounded-full ${sizes[size]} overflow-hidden`}>
        <div 
          className={`${sizes[size]} rounded-full ${variants[variant]} ${animated ? 'transition-all duration-500 ease-out' : ''}`}
          style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
        />
      </div>
    </div>
  );
}

// Circular Progress for XP/achievements
interface CircularProgressProps {
  progress: number;
  size?: number;
  strokeWidth?: number;
  variant?: "orange" | "purple" | "green";
  children?: React.ReactNode;
}

export function CircularProgress({ 
  progress, 
  size = 80, 
  strokeWidth = 6,
  variant = "purple",
  children 
}: CircularProgressProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;

  const colors = {
    orange: "#ff5b24",
    purple: "#5e3dc2",
    green: "#00a651",
  };

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="rgba(118,118,128,0.12)"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={colors[variant]}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-500 ease-out"
        />
      </svg>
      {children && (
        <div className="absolute inset-0 flex items-center justify-center">
          {children}
        </div>
      )}
    </div>
  );
}

