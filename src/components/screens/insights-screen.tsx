"use client";

import { TrendingUp, TrendingDown, Sparkles, ChevronDown } from "lucide-react";
import { Card, AccentCard } from "../ui/card";
import { ProgressBar } from "../ui/progress-bar";
import { Badge } from "../ui/badge";
import { SectionHeader } from "../layout/section-header";
import { useState } from "react";

// Simple Pie Chart Component
function SpendingChart() {
  const categories = [
    { name: "Snacks", amount: 89, color: "#ff5b24", percentage: 36 },
    { name: "Fun", amount: 75, color: "#5e3dc2", percentage: 31 },
    { name: "Gifts", amount: 45, color: "#00a651", percentage: 18 },
    { name: "Savings", amount: 36, color: "#ffd700", percentage: 15 },
  ];
  
  // Calculate stroke-dasharray and stroke-dashoffset for each segment
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  let currentOffset = 0;
  
  return (
    <div className="flex items-center justify-center gap-8 py-4">
      {/* Pie Chart */}
      <div className="relative">
        <svg width="160" height="160" viewBox="0 0 160 160">
          {categories.map((category, index) => {
            const segmentLength = (category.percentage / 100) * circumference;
            const offset = currentOffset;
            currentOffset += segmentLength;
            
            return (
              <circle
                key={category.name}
                cx="80"
                cy="80"
                r={radius}
                fill="none"
                stroke={category.color}
                strokeWidth="20"
                strokeDasharray={`${segmentLength} ${circumference - segmentLength}`}
                strokeDashoffset={-offset}
                transform="rotate(-90 80 80)"
                className="transition-all duration-500"
              />
            );
          })}
          {/* Center text */}
          <text x="80" y="75" textAnchor="middle" className="text-[24px] font-bold fill-black">
            245 kr
          </text>
          <text x="80" y="95" textAnchor="middle" className="text-[13px] fill-[rgba(60,60,67,0.6)]">
            this week
          </text>
        </svg>
      </div>
      
      {/* Legend */}
      <div className="flex flex-col gap-2">
        {categories.map((category) => (
          <div key={category.name} className="flex items-center gap-2">
            <div 
              className="w-3 h-3 rounded-full" 
              style={{ backgroundColor: category.color }}
            />
            <span className="text-[13px] text-[rgba(60,60,67,0.8)]">{category.name}</span>
            <span className="text-[13px] font-medium text-black ml-auto">{category.amount} kr</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Category Breakdown Row
interface CategoryRowProps {
  emoji: string;
  name: string;
  amount: number;
  percentage: number;
  trend: "up" | "down" | "same";
  trendAmount: number;
}

function CategoryRow({ emoji, name, amount, percentage, trend, trendAmount }: CategoryRowProps) {
  return (
    <div className="flex items-center gap-3 py-3 border-b border-[rgba(60,60,67,0.08)] last:border-0">
      <div className="w-10 h-10 rounded-full bg-[#f7f7f7] flex items-center justify-center">
        <span className="text-lg">{emoji}</span>
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between mb-1">
          <span className="text-[15px] font-medium text-black">{name}</span>
          <span className="text-[15px] font-semibold text-black">{amount} kr</span>
        </div>
        <div className="flex items-center justify-between">
          <ProgressBar progress={percentage} size="sm" variant="purple" />
          <div className={`flex items-center gap-1 ml-3 ${
            trend === "down" ? "text-[#006627]" : trend === "up" ? "text-[#ff5b24]" : "text-[rgba(60,60,67,0.6)]"
          }`}>
            {trend === "down" ? (
              <TrendingDown className="w-3.5 h-3.5" />
            ) : trend === "up" ? (
              <TrendingUp className="w-3.5 h-3.5" />
            ) : null}
            <span className="text-[12px] font-medium">
              {trend === "down" ? "-" : trend === "up" ? "+" : ""}{trendAmount} kr
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Positive Reinforcement Card
function InsightCard() {
  return (
    <AccentCard variant="green" className="p-4 mx-4">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
          <span className="text-xl">🎉</span>
        </div>
        <div>
          <h3 className="text-white text-[15px] font-semibold mb-1">Great job!</h3>
          <p className="text-white/90 text-[14px] leading-[1.4]">
            You saved 15% more this week than last! Keep up the amazing work! 💪
          </p>
        </div>
      </div>
    </AccentCard>
  );
}

// Time Period Selector
function PeriodSelector() {
  const [selected, setSelected] = useState<"week" | "month">("week");
  
  return (
    <div className="px-4 flex gap-2">
      <button 
        className={`flex-1 py-2 rounded-full text-[14px] font-medium transition-all ${
          selected === "week" 
            ? "bg-[#5e3dc2] text-white" 
            : "bg-[#f7f7f7] text-[rgba(60,60,67,0.6)]"
        }`}
        onClick={() => setSelected("week")}
      >
        This Week
      </button>
      <button 
        className={`flex-1 py-2 rounded-full text-[14px] font-medium transition-all ${
          selected === "month" 
            ? "bg-[#5e3dc2] text-white" 
            : "bg-[#f7f7f7] text-[rgba(60,60,67,0.6)]"
        }`}
        onClick={() => setSelected("month")}
      >
        This Month
      </button>
    </div>
  );
}

// AI Explanation
function AIExplanation() {
  return (
    <div className="px-4">
      <Card className="p-4">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#ff5b24] to-[#ff7a4d] flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <div>
            <h4 className="text-[14px] font-semibold text-black mb-1">Vippsi says:</h4>
            <p className="text-[14px] text-[rgba(60,60,67,0.8)] leading-[1.5]">
              "Your biggest spending this week was on snacks 🍿 That's totally normal! 
              Maybe try a snack-free day challenge to save a bit more?"
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}

// Summary Stats
function SummaryStats() {
  return (
    <div className="px-4 grid grid-cols-3 gap-3">
      <Card className="p-3 text-center">
        <p className="text-[22px] font-bold text-[#5e3dc2]">245 kr</p>
        <p className="text-[11px] text-[rgba(60,60,67,0.6)] mt-0.5">Spent</p>
      </Card>
      <Card className="p-3 text-center">
        <p className="text-[22px] font-bold text-[#006627]">80 kr</p>
        <p className="text-[11px] text-[rgba(60,60,67,0.6)] mt-0.5">Received</p>
      </Card>
      <Card className="p-3 text-center">
        <p className="text-[22px] font-bold text-[#ff5b24]">36 kr</p>
        <p className="text-[11px] text-[rgba(60,60,67,0.6)] mt-0.5">Saved</p>
      </Card>
    </div>
  );
}

export function InsightsScreen() {
  return (
    <div className="flex flex-col gap-5 pt-2 pb-[140px]">
      {/* Page Header */}
      <div className="px-4">
        <h1 className="text-[28px] font-bold text-black tracking-[-0.5px]">Insights</h1>
        <p className="text-[15px] text-[rgba(60,60,67,0.6)] mt-1">See where your money goes</p>
      </div>
      
      {/* Period Selector */}
      <PeriodSelector />
      
      {/* Summary Stats */}
      <SummaryStats />
      
      {/* Positive Insight */}
      <InsightCard />
      
      {/* Spending Chart */}
      <div className="px-4">
        <Card className="py-2">
          <SpendingChart />
        </Card>
      </div>
      
      {/* AI Explanation */}
      <AIExplanation />
      
      {/* Category Breakdown */}
      <div className="flex flex-col">
        <SectionHeader title="Spending Breakdown" />
        <div className="mx-4">
          <Card className="px-4">
            <CategoryRow 
              emoji="🍿" 
              name="Snacks" 
              amount={89} 
              percentage={36} 
              trend="down" 
              trendAmount={12}
            />
            <CategoryRow 
              emoji="🎮" 
              name="Fun & Games" 
              amount={75} 
              percentage={31} 
              trend="up" 
              trendAmount={25}
            />
            <CategoryRow 
              emoji="🎁" 
              name="Gifts" 
              amount={45} 
              percentage={18} 
              trend="same" 
              trendAmount={0}
            />
            <CategoryRow 
              emoji="💰" 
              name="Savings" 
              amount={36} 
              percentage={15} 
              trend="down" 
              trendAmount={5}
            />
          </Card>
        </div>
      </div>
    </div>
  );
}

