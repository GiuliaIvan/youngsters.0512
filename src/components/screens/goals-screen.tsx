"use client";

import { Plus, ChevronRight, Sparkles, Calendar, TrendingUp } from "lucide-react";
import { Card, AccentCard } from "../ui/card";
import { ProgressBar, CircularProgress } from "../ui/progress-bar";
import { Button } from "../ui/button";
import { SectionHeader } from "../layout/section-header";

interface GoalCardProps {
  emoji: string;
  title: string;
  currentAmount: number;
  targetAmount: number;
  daysLeft: number;
  color: "purple" | "orange" | "green";
}

function GoalCard({ emoji, title, currentAmount, targetAmount, daysLeft, color }: GoalCardProps) {
  const progress = (currentAmount / targetAmount) * 100;
  const dailySaveAmount = Math.ceil((targetAmount - currentAmount) / daysLeft);
  
  return (
    <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
      <div className="flex items-start gap-4">
        {/* Progress Circle */}
        <CircularProgress progress={progress} size={72} variant={color}>
          <span className="text-2xl">{emoji}</span>
        </CircularProgress>
        
        {/* Content */}
        <div className="flex-1">
          <div className="flex items-start justify-between mb-1">
            <h3 className="text-[16px] font-semibold text-black">{title}</h3>
            <ChevronRight className="w-4 h-4 text-[rgba(60,60,67,0.3)]" />
          </div>
          
          <p className="text-[14px] text-[rgba(60,60,67,0.6)] mb-2">
            {currentAmount.toLocaleString()} kr of {targetAmount.toLocaleString()} kr
          </p>
          
          <div className="flex items-center gap-3 text-[12px]">
            <div className="flex items-center gap-1 text-[rgba(60,60,67,0.6)]">
              <Calendar className="w-3.5 h-3.5" />
              <span>{daysLeft} days left</span>
            </div>
            <div className="flex items-center gap-1 text-[#5e3dc2]">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Save {dailySaveAmount} kr/day</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

function CompletedGoalCard({ emoji, title, amount }: { emoji: string; title: string; amount: number }) {
  return (
    <Card className="p-3 bg-[rgba(8,145,63,0.08)]">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-[rgba(8,145,63,0.15)] flex items-center justify-center">
          <span className="text-lg">{emoji}</span>
        </div>
        <div className="flex-1">
          <h4 className="text-[14px] font-medium text-black">{title}</h4>
          <p className="text-[12px] text-[#006627]">✓ Reached {amount.toLocaleString()} kr</p>
        </div>
        <span className="text-[18px]">🎉</span>
      </div>
    </Card>
  );
}

function VippsiTip() {
  return (
    <div className="px-4">
      <div className="bg-gradient-to-r from-[#ff5b24]/10 to-[#5e3dc2]/10 rounded-[14px] p-4">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-white overflow-hidden flex items-center justify-center flex-shrink-0 shadow-sm">
            <img 
              src="/Vippsi 1.png" 
              alt="Vippsi" 
              className="w-9 h-9 object-cover scale-150 translate-y-0.5"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <Sparkles className="w-4 h-4 text-[#5e3dc2]" />
              <span className="text-[12px] font-medium text-[#5e3dc2] uppercase tracking-wider">Vippsi Tip</span>
            </div>
            <p className="text-[14px] text-[rgba(60,60,67,0.8)] leading-[1.4]">
              Save 10 kr today to stay on track for your gaming headset! You're doing amazing! 🎧✨
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function AddGoalButton() {
  return (
    <div className="px-4 mt-4">
      <Button 
        variant="primary" 
        fullWidth 
        icon={<Plus className="w-5 h-5" />}
        size="lg"
      >
        Add New Goal
      </Button>
    </div>
  );
}

function QuickSaveAction() {
  return (
    <div className="px-4">
      <AccentCard variant="orange" className="p-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-white text-[16px] font-semibold mb-1">Quick Save</h3>
            <p className="text-white/80 text-[14px]">Add to your goals instantly</p>
          </div>
          <div className="flex gap-2">
            {[10, 25, 50].map((amount) => (
              <button 
                key={amount}
                className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center text-white font-semibold text-[14px]"
              >
                {amount}
              </button>
            ))}
          </div>
        </div>
      </AccentCard>
    </div>
  );
}

export function GoalsScreen() {
  return (
    <div className="flex flex-col gap-5 pt-2 pb-[140px]">
      {/* Page Header */}
      <div className="px-4">
        <h1 className="text-[28px] font-bold text-black tracking-[-0.5px]">Your Goals</h1>
        <p className="text-[15px] text-[rgba(60,60,67,0.6)] mt-1">Save for what matters most</p>
      </div>
      
      {/* Vippsi Tip */}
      <VippsiTip />
      
      {/* Quick Save Action */}
      <QuickSaveAction />
      
      {/* Active Goals */}
      <div className="flex flex-col">
        <SectionHeader title="Active Goals" />
        <div className="px-4 flex flex-col gap-3">
          <GoalCard 
            emoji="🎧"
            title="Gaming Headset"
            currentAmount={720}
            targetAmount={1200}
            daysLeft={45}
            color="purple"
          />
          <GoalCard 
            emoji="🎫"
            title="Concert Tickets"
            currentAmount={150}
            targetAmount={500}
            daysLeft={60}
            color="orange"
          />
          <GoalCard 
            emoji="🎮"
            title="New Game"
            currentAmount={280}
            targetAmount={400}
            daysLeft={14}
            color="green"
          />
        </div>
      </div>
      
      {/* Completed Goals */}
      <div className="flex flex-col">
        <SectionHeader title="Completed" action="View all" />
        <div className="px-4 flex flex-col gap-2">
          <CompletedGoalCard emoji="📱" title="Phone Case" amount={250} />
          <CompletedGoalCard emoji="🍿" title="Movie Night" amount={150} />
        </div>
      </div>
      
      {/* Add Goal Button */}
      <AddGoalButton />
    </div>
  );
}

