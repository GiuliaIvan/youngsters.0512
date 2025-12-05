"use client";

import { ChevronRight } from "lucide-react";

interface SectionHeaderProps {
  title: string;
  action?: string;
  onActionClick?: () => void;
}

export function SectionHeader({ title, action, onActionClick }: SectionHeaderProps) {
  return (
    <div className="flex items-center justify-between px-4 pb-2">
      <h2 className="text-[18px] font-semibold text-black leading-6 tracking-[-0.45px]">
        {title}
      </h2>
      {action && (
        <button 
          className="flex items-center gap-0.5 text-[#5e3dc2] hover:opacity-80 transition-opacity"
          onClick={onActionClick}
        >
          <span className="text-[15px] font-medium">{action}</span>
          <ChevronRight className="w-4 h-4" strokeWidth={2} />
        </button>
      )}
    </div>
  );
}

