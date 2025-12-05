"use client";

import { ArrowUp, ArrowDown, ChevronRight, Plus, Sparkles, Play } from "lucide-react";
import { Card, AccentCard } from "../ui/card";
import { ProgressBar } from "../ui/progress-bar";
import { SectionHeader } from "../layout/section-header";

// Balance Card Component
function BalanceCard() {
  return (
    <div className="px-4">
      <div 
        className="bg-[#f7f7f7] rounded-[10px] inline-flex items-center h-12"
        style={{ paddingLeft: '12px', paddingRight: '24px', gap: '12px' }}
      >
        <div className="w-6 h-6 rounded-[2.5px] bg-[#5a78ff] flex items-center justify-center overflow-hidden flex-shrink-0">
          <svg width="12" height="11" viewBox="0 0 12 11" fill="none">
            <path d="M1 5.5C1 5.5 2.5 1 6 1C9.5 1 11 5.5 11 5.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M3.5 7.5C3.5 7.5 4.5 4.5 6 4.5C7.5 4.5 8.5 7.5 8.5 7.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
        <div className="flex flex-col justify-center leading-5">
          <span className="text-[14px] font-medium text-black tracking-[-0.15px]">
            1 192 kr
          </span>
          <span className="text-[14px] text-[rgba(60,60,67,0.6)] tracking-[-0.15px]">
            Youngster
          </span>
        </div>
      </div>
    </div>
  );
}

// Now Module - AI Suggestion Card
function NowModule() {
  return (
    <div className="px-4">
      <AccentCard variant="purple" className="p-4">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-white/70 text-[12px] font-medium uppercase tracking-wider">Now</span>
            </div>
            <h3 className="text-white text-[16px] font-semibold mb-1">
              Daily Mission Available! 🎯
            </h3>
            <p className="text-white/80 text-[14px] leading-[1.4] mb-3">
              Save 20 kr today to get bonus XP and stay on your gaming headset goal!
            </p>
            <button className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 transition-colors rounded-full px-4 py-2 text-white text-[14px] font-medium">
              Start Mission
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </AccentCard>
    </div>
  );
}

// Transaction Row Component
interface TransactionRowProps {
  name: string;
  subtitle: string;
  time: string;
  amount: string;
  isPositive?: boolean;
  avatarBg: string;
  avatarContent: React.ReactNode;
  isFirst?: boolean;
  isLast?: boolean;
}

function TransactionRow({
  name,
  subtitle,
  time,
  amount,
  isPositive = false,
  avatarBg,
  avatarContent,
  isFirst = false,
  isLast = false,
}: TransactionRowProps) {
  return (
    <div 
      className={`bg-[#f7f7f7] flex items-center min-h-[72px] ${
        isFirst ? "rounded-t-[10px]" : ""
      } ${isLast ? "rounded-b-[10px]" : ""}`}
      style={{ paddingLeft: '16px', gap: '12px' }}
    >
      <div 
        className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center"
        style={{ backgroundColor: avatarBg }}
      >
        {avatarContent}
      </div>
      
      <div 
        className={`flex-1 flex items-center min-h-[72px] ${
          !isLast ? "border-b border-[rgba(60,60,67,0.12)]" : ""
        }`}
        style={{ paddingRight: '16px', paddingTop: '12px', paddingBottom: '12px', gap: '12px' }}
      >
        <div className="flex-1 flex flex-col">
          <span className="text-[15px] font-medium text-black leading-[18px] tracking-[-0.24px]">
            {name}
          </span>
          <div className="flex items-center gap-1 text-[13px] text-[rgba(60,60,67,0.6)] leading-5 tracking-[-0.08px]">
            <span>{subtitle}</span>
            <span>·</span>
            <span>{time}</span>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <div className={`px-2 py-1 rounded h-7 flex items-center justify-center text-[14px] font-medium tracking-[-0.24px] ${
            isPositive 
              ? "bg-[rgba(8,145,63,0.12)] text-[#006627]" 
              : "bg-[rgba(118,118,128,0.12)] text-black"
          }`}>
            {isPositive && "+"}{amount} kr
          </div>
          <ChevronRight className="w-2 h-4 text-[rgba(60,60,67,0.3)]" strokeWidth={3} />
        </div>
      </div>
    </div>
  );
}

// User Avatar
function UserAvatar({ initials }: { initials: string }) {
  return (
    <div className="w-full h-full bg-[#ffe5db] flex items-center justify-center">
      <span className="text-[#ff5b24] text-[18px] font-semibold uppercase tracking-[0.4px]">
        {initials}
      </span>
    </div>
  );
}

// Merchant Icon
function BurgerIcon() {
  return (
    <svg width="24" height="20" viewBox="0 0 28 24" fill="none">
      <path d="M4 12H24C24 12 24 4 14 4C4 4 4 12 4 12Z" fill="#49367d"/>
      <rect x="3" y="13" width="22" height="3" rx="1.5" fill="#49367d"/>
      <path d="M4 17H24C24 17 24 20 14 20C4 20 4 17 4 17Z" fill="#49367d"/>
    </svg>
  );
}

// Goals Preview Card
function GoalPreviewCard() {
  return (
    <Card className="p-4">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-12 h-12 rounded-full bg-[#5e3dc2]/10 flex items-center justify-center">
          <span className="text-2xl">🎧</span>
        </div>
        <div className="flex-1">
          <h4 className="text-[15px] font-semibold text-black">Gaming Headset</h4>
          <p className="text-[13px] text-[rgba(60,60,67,0.6)]">720 kr of 1,200 kr</p>
        </div>
        <span className="text-[24px] font-bold text-[#5e3dc2]">60%</span>
      </div>
      <ProgressBar progress={60} variant="purple" size="md" />
    </Card>
  );
}

// Add Goal Card
function AddGoalCard() {
  return (
    <Card className="p-4 border-2 border-dashed border-[rgba(60,60,67,0.2)] bg-transparent">
      <div className="flex items-center justify-center gap-2 text-[#5e3dc2]">
        <Plus className="w-5 h-5" />
        <span className="text-[15px] font-medium">Add new goal</span>
      </div>
    </Card>
  );
}

// Learn Preview Carousel
function LearnPreviewCarousel() {
  const lessons = [
    { id: 1, title: "Saving Basics", emoji: "💰", progress: 100, color: "from-[#00a651] to-[#00c853]" },
    { id: 2, title: "Smart Spending", emoji: "🛒", progress: 45, color: "from-[#5e3dc2] to-[#7b5cd6]" },
    { id: 3, title: "Goals & Planning", emoji: "🎯", progress: 0, color: "from-[#ff5b24] to-[#ff7a4d]" },
  ];

  return (
    <div className="flex gap-3 overflow-x-auto px-4 pb-2 scrollbar-hide">
      {lessons.map((lesson) => (
        <div 
          key={lesson.id}
          className={`flex-shrink-0 w-[140px] h-[160px] rounded-[14px] bg-gradient-to-br ${lesson.color} p-4 flex flex-col justify-between`}
        >
          <div>
            <span className="text-3xl">{lesson.emoji}</span>
            <h4 className="text-white text-[14px] font-semibold mt-2">{lesson.title}</h4>
          </div>
          <div className="flex items-center gap-2">
            {lesson.progress === 100 ? (
              <span className="text-white/90 text-[12px] font-medium">✓ Complete</span>
            ) : lesson.progress > 0 ? (
              <span className="text-white/90 text-[12px] font-medium">{lesson.progress}%</span>
            ) : (
              <div className="flex items-center gap-1 text-white/90">
                <Play className="w-3 h-3" fill="currentColor" />
                <span className="text-[12px] font-medium">Start</span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

// Floating Action Bar
function FloatingActionBar() {
  return (
    <div className="fixed bottom-[108px] left-1/2 -translate-x-1/2 z-30">
      <div 
        className="bg-[rgba(255,91,36,0.99)] backdrop-blur-2xl rounded-[40px] h-[64px] flex items-center justify-center shadow-[0px_4px_16px_0px_rgba(0,0,0,0.2)]"
        style={{ paddingLeft: '24px', paddingRight: '24px', gap: '8px' }}
      >
        <button className="flex flex-col items-center justify-center w-[56px] text-white hover:opacity-80 transition-opacity" style={{ gap: '4px' }}>
          <ArrowUp className="w-6 h-6" strokeWidth={2.5} />
          <span className="text-[11px] font-semibold leading-[13px]">Send</span>
        </button>
        <button className="flex flex-col items-center justify-center w-[56px] text-white hover:opacity-80 transition-opacity" style={{ gap: '4px' }}>
          <ArrowDown className="w-6 h-6" strokeWidth={2.5} />
          <span className="text-[11px] font-semibold leading-[13px]">Request</span>
        </button>
      </div>
    </div>
  );
}

// Main Home Screen
export function HomeScreen() {
  return (
    <div className="flex flex-col gap-5 pt-2 pb-[200px]">
      {/* Balance */}
      <BalanceCard />
      
      {/* Now Module - AI Suggestion */}
      <NowModule />
      
      {/* Latest Transactions */}
      <div className="flex flex-col">
        <SectionHeader title="Latest" action="See all" />
        <div className="px-4">
          <TransactionRow
            name="Martin Steen"
            subtitle="Vippsed you"
            time="Today"
            amount="80"
            isPositive
            avatarBg="#ffe5db"
            avatarContent={<UserAvatar initials="MS" />}
            isFirst
          />
          <TransactionRow
            name="Burger Joint"
            subtitle="Paid"
            time="Yesterday"
            amount="169"
            avatarBg="#f9bc4f"
            avatarContent={<BurgerIcon />}
            isLast
          />
        </div>
      </div>
      
      {/* Goals Preview */}
      <div className="flex flex-col">
        <SectionHeader title="Your Goals" action="See all" />
        <div className="px-4 flex flex-col gap-3">
          <GoalPreviewCard />
          <AddGoalCard />
        </div>
      </div>
      
      {/* Learn Preview */}
      <div className="flex flex-col">
        <SectionHeader title="Keep Learning" action="See all" />
        <LearnPreviewCarousel />
      </div>
      
      {/* Floating Action Bar */}
      <FloatingActionBar />
    </div>
  );
}

