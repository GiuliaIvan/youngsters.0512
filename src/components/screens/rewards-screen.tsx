"use client";

import { Trophy, Star, Zap, Target, Flame, Gift, Lock, ChevronRight } from "lucide-react";
import { Card, AccentCard } from "../ui/card";
import { ProgressBar, CircularProgress } from "../ui/progress-bar";
import { AchievementBadge, StreakBadge, XPBadge } from "../ui/badge";
import { SectionHeader } from "../layout/section-header";

// XP Progress Header
function XPProgressHeader() {
  const currentXP = 1250;
  const nextLevel = 1500;
  const progress = (currentXP / nextLevel) * 100;
  
  return (
    <div className="px-4">
      <AccentCard variant="purple" className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div>
            <span className="text-white/70 text-[12px] font-medium uppercase tracking-wider">Level 5</span>
            <h2 className="text-white text-[24px] font-bold">{currentXP.toLocaleString()} XP</h2>
          </div>
          <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
            <span className="text-3xl">⭐</span>
          </div>
        </div>
        <div className="space-y-1">
          <div className="flex justify-between text-[12px] text-white/80">
            <span>Progress to Level 6</span>
            <span>{nextLevel - currentXP} XP to go</span>
          </div>
          <div className="h-2.5 bg-white/20 rounded-full overflow-hidden">
            <div 
              className="h-full bg-white rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </AccentCard>
    </div>
  );
}

// Streak Progress
function StreakProgress() {
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  const completed = [true, true, true, true, true, false, false];
  
  return (
    <div className="px-4">
      <Card className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🔥</span>
            <div>
              <h3 className="text-[16px] font-semibold text-black">5 Day Streak!</h3>
              <p className="text-[13px] text-[rgba(60,60,67,0.6)]">Keep it going!</p>
            </div>
          </div>
          <div className="px-3 py-1.5 rounded-full bg-[#ff5b24]/10 text-[13px] font-medium text-[#ff5b24]">
            +50 XP bonus at 7 days!
          </div>
        </div>
        
        <div className="flex justify-between">
          {days.map((day, index) => (
            <div key={index} className="flex flex-col items-center gap-1.5">
              <div className={`w-9 h-9 rounded-full flex items-center justify-center ${
                completed[index] 
                  ? 'bg-[#ff5b24] text-white' 
                  : 'bg-[#f7f7f7] text-[rgba(60,60,67,0.4)]'
              }`}>
                {completed[index] ? (
                  <Flame className="w-4 h-4" fill="currentColor" />
                ) : (
                  <span className="text-[12px] font-medium">{day}</span>
                )}
              </div>
              <span className={`text-[11px] font-medium ${
                completed[index] ? 'text-[#ff5b24]' : 'text-[rgba(60,60,67,0.4)]'
              }`}>
                {day}
              </span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

// Badges Grid
function BadgesGrid() {
  const badges = [
    { icon: <Star className="w-6 h-6" />, title: "First Save", unlocked: true, variant: "gold" as const },
    { icon: <Target className="w-6 h-6" />, title: "Goal Setter", unlocked: true, variant: "silver" as const },
    { icon: <Flame className="w-6 h-6" />, title: "7-Day Streak", unlocked: false, variant: "bronze" as const },
    { icon: <Trophy className="w-6 h-6" />, title: "Super Saver", unlocked: false, variant: "platinum" as const },
    { icon: <Zap className="w-6 h-6" />, title: "Quick Learner", unlocked: true, variant: "bronze" as const },
    { icon: <Gift className="w-6 h-6" />, title: "Generous", unlocked: false, variant: "silver" as const },
  ];
  
  return (
    <div className="grid grid-cols-3 gap-4 px-4">
      {badges.map((badge, index) => (
        <AchievementBadge 
          key={index}
          icon={badge.icon}
          title={badge.title}
          unlocked={badge.unlocked}
          variant={badge.variant}
        />
      ))}
    </div>
  );
}

// Achievement Row
interface AchievementRowProps {
  emoji: string;
  title: string;
  description: string;
  xp: number;
  progress: number;
  isUnlocked: boolean;
}

function AchievementRow({ emoji, title, description, xp, progress, isUnlocked }: AchievementRowProps) {
  return (
    <div className={`flex items-center gap-3 py-3 ${!isUnlocked ? 'opacity-60' : ''}`}>
      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
        isUnlocked ? 'bg-gradient-to-br from-[#ffd700] to-[#ffb700]' : 'bg-[#f7f7f7]'
      }`}>
        <span className="text-xl">{emoji}</span>
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <h4 className="text-[15px] font-semibold text-black">{title}</h4>
          {isUnlocked && <span className="text-[11px] text-[#006627]">✓ Unlocked</span>}
        </div>
        <p className="text-[13px] text-[rgba(60,60,67,0.6)]">{description}</p>
        {!isUnlocked && progress > 0 && (
          <div className="mt-1.5 flex items-center gap-2">
            <ProgressBar progress={progress} size="sm" variant="purple" />
            <span className="text-[11px] text-[rgba(60,60,67,0.6)]">{progress}%</span>
          </div>
        )}
      </div>
      <div className="flex items-center gap-1 text-[#5e3dc2]">
        <Zap className="w-4 h-4" />
        <span className="text-[14px] font-semibold">{xp}</span>
      </div>
    </div>
  );
}

// Vippsi Collectibles Preview
function VippsiCollectibles() {
  const items = [
    { emoji: "🎩", name: "Top Hat", owned: true },
    { emoji: "🕶️", name: "Cool Shades", owned: true },
    { emoji: "🎀", name: "Bow", owned: false },
    { emoji: "👑", name: "Crown", owned: false },
  ];
  
  return (
    <div className="px-4">
      <Card className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ff5b24] to-[#ff7a4d] flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 36 36" fill="none">
                <circle cx="13" cy="15" r="2" fill="white"/>
                <circle cx="23" cy="15" r="2" fill="white"/>
                <path d="M13 22C13 22 15 25 18 25C21 25 23 22 23 22" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <h3 className="text-[15px] font-semibold text-black">Vippsi Collectibles</h3>
              <p className="text-[12px] text-[rgba(60,60,67,0.6)]">2 of 12 items collected</p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-[rgba(60,60,67,0.3)]" />
        </div>
        
        <div className="flex gap-3">
          {items.map((item, index) => (
            <div 
              key={index}
              className={`flex-1 aspect-square rounded-[12px] flex flex-col items-center justify-center gap-1 ${
                item.owned ? 'bg-[#f7f7f7]' : 'bg-[#f7f7f7] opacity-40'
              }`}
            >
              <span className="text-2xl">{item.emoji}</span>
              {!item.owned && <Lock className="w-3 h-3 text-[rgba(60,60,67,0.4)]" />}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

// Next Reward Preview
function NextReward() {
  return (
    <div className="px-4">
      <Card className="p-4 bg-gradient-to-r from-[#5e3dc2]/5 to-[#ff5b24]/5 border-2 border-dashed border-[#5e3dc2]/20">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-full bg-[#5e3dc2]/10 flex items-center justify-center">
            <span className="text-3xl">🎁</span>
          </div>
          <div className="flex-1">
            <span className="text-[11px] text-[#5e3dc2] font-medium uppercase tracking-wider">Next Reward</span>
            <h3 className="text-[16px] font-semibold text-black">Mystery Badge</h3>
            <p className="text-[13px] text-[rgba(60,60,67,0.6)]">250 XP to unlock!</p>
          </div>
          <CircularProgress progress={83} size={50} variant="purple">
            <span className="text-[11px] font-bold text-[#5e3dc2]">83%</span>
          </CircularProgress>
        </div>
      </Card>
    </div>
  );
}

export function RewardsScreen() {
  return (
    <div className="flex flex-col gap-5 pt-2 pb-[140px]">
      {/* Page Header */}
      <div className="px-4">
        <h1 className="text-[28px] font-bold text-black tracking-[-0.5px]">Rewards</h1>
        <p className="text-[15px] text-[rgba(60,60,67,0.6)] mt-1">Your achievements & progress</p>
      </div>
      
      {/* XP Progress */}
      <XPProgressHeader />
      
      {/* Streak Progress */}
      <StreakProgress />
      
      {/* Next Reward */}
      <NextReward />
      
      {/* Badges */}
      <div className="flex flex-col">
        <SectionHeader title="Badges" action="See all" />
        <BadgesGrid />
      </div>
      
      {/* Vippsi Collectibles */}
      <VippsiCollectibles />
      
      {/* Achievements */}
      <div className="flex flex-col">
        <SectionHeader title="Achievements" action="See all" />
        <div className="mx-4">
          <Card className="px-4 divide-y divide-[rgba(60,60,67,0.08)]">
            <AchievementRow 
              emoji="💰"
              title="First 100 kr Saved"
              description="Save your first 100 kr"
              xp={50}
              progress={100}
              isUnlocked={true}
            />
            <AchievementRow 
              emoji="🎯"
              title="Goal Crusher"
              description="Complete 3 savings goals"
              xp={100}
              progress={66}
              isUnlocked={false}
            />
            <AchievementRow 
              emoji="📚"
              title="Money Master"
              description="Complete all learning modules"
              xp={500}
              progress={25}
              isUnlocked={false}
            />
          </Card>
        </div>
      </div>
    </div>
  );
}

