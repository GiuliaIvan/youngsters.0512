"use client";

import { Home, Target, BarChart3, GraduationCap, Trophy, User } from "lucide-react";

export type TabId = "home" | "goals" | "insights" | "learn" | "rewards" | "me";

interface TabBarProps {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
}

interface TabItemProps {
  icon: React.ReactNode;
  activeIcon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

function TabBarItem({ icon, activeIcon, label, isActive, onClick }: TabItemProps) {
  return (
    <button 
      className={`flex-1 h-[50px] flex flex-col items-center justify-center gap-0.5 transition-colors ${
        isActive ? "text-[#ff5b24]" : "text-[#999999]"
      }`}
      onClick={onClick}
    >
      <div className="w-6 h-6">
        {isActive ? activeIcon : icon}
      </div>
      <span className={`text-[10px] font-medium leading-4 ${isActive ? "text-[#ff5b24]" : ""}`}>
        {label}
      </span>
    </button>
  );
}

export function TabBar({ activeTab, onTabChange }: TabBarProps) {
  const tabs: { id: TabId; label: string; icon: React.ReactNode; activeIcon: React.ReactNode }[] = [
    {
      id: "home",
      label: "Home",
      icon: <Home className="w-6 h-6" strokeWidth={1.5} />,
      activeIcon: <Home className="w-6 h-6" fill="currentColor" strokeWidth={0} />,
    },
    {
      id: "goals",
      label: "Goals",
      icon: <Target className="w-6 h-6" strokeWidth={1.5} />,
      activeIcon: <Target className="w-6 h-6" strokeWidth={2.5} />,
    },
    {
      id: "insights",
      label: "Insights",
      icon: <BarChart3 className="w-6 h-6" strokeWidth={1.5} />,
      activeIcon: <BarChart3 className="w-6 h-6" strokeWidth={2.5} />,
    },
    {
      id: "learn",
      label: "Learn",
      icon: <GraduationCap className="w-6 h-6" strokeWidth={1.5} />,
      activeIcon: <GraduationCap className="w-6 h-6" strokeWidth={2.5} />,
    },
    {
      id: "rewards",
      label: "Rewards",
      icon: <Trophy className="w-6 h-6" strokeWidth={1.5} />,
      activeIcon: <Trophy className="w-6 h-6" strokeWidth={2.5} />,
    },
    {
      id: "me",
      label: "Me",
      icon: <User className="w-6 h-6" strokeWidth={1.5} />,
      activeIcon: <User className="w-6 h-6" strokeWidth={2.5} />,
    },
  ];

  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-[rgba(255,255,255,0.95)] backdrop-blur-[25px] border-t border-[rgba(60,60,67,0.12)] z-40">
      <div className="flex items-center">
        {tabs.map((tab) => (
          <TabBarItem
            key={tab.id}
            icon={tab.icon}
            activeIcon={tab.activeIcon}
            label={tab.label}
            isActive={activeTab === tab.id}
            onClick={() => onTabChange(tab.id)}
          />
        ))}
      </div>
      {/* Home indicator */}
      <div className="flex justify-center pb-2 pt-1">
        <div className="w-[134px] h-[5px] bg-black rounded-full" />
      </div>
    </div>
  );
}

