"use client";

import { useState } from "react";
import { StatusBar } from "@/components/layout/status-bar";
import { TabBar, TabId } from "@/components/layout/tab-bar";
import { HomeScreen } from "@/components/screens/home-screen";
import { GoalsScreen } from "@/components/screens/goals-screen";
import { InsightsScreen } from "@/components/screens/insights-screen";
import { LearnScreen } from "@/components/screens/learn-screen";
import { RewardsScreen } from "@/components/screens/rewards-screen";
import { MeScreen } from "@/components/screens/me-screen";
import { VippsiAssistant, FloatingVippsiButton } from "@/components/vippsi/vippsi-assistant";

export default function VippsYoungsters() {
  const [activeTab, setActiveTab] = useState<TabId>("home");
  const [isVippsiOpen, setIsVippsiOpen] = useState(false);

  const renderScreen = () => {
    switch (activeTab) {
      case "home":
        return <HomeScreen />;
      case "goals":
        return <GoalsScreen />;
      case "insights":
        return <InsightsScreen />;
      case "learn":
        return <LearnScreen />;
      case "rewards":
        return <RewardsScreen />;
      case "me":
        return <MeScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <div className="mobile-container bg-white min-h-screen">
      {/* Status Bar */}
      <StatusBar />
      
      {/* Main Content */}
      <main className="overflow-y-auto">
        {renderScreen()}
      </main>
      
      {/* Floating Vippsi Button */}
      <FloatingVippsiButton 
        onClick={() => setIsVippsiOpen(true)}
        hasNotification={activeTab === "home"}
      />
      
      {/* Tab Bar */}
      <TabBar 
        activeTab={activeTab} 
        onTabChange={setActiveTab}
      />
      
      {/* Vippsi AI Assistant Panel */}
      <VippsiAssistant 
        isOpen={isVippsiOpen}
        onClose={() => setIsVippsiOpen(false)}
        context={activeTab}
      />
    </div>
  );
}
