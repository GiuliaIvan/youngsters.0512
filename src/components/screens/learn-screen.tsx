"use client";

import { Lock, Check, Play, ChevronRight, Sparkles, Zap } from "lucide-react";
import { Card, AccentCard } from "../ui/card";
import { ProgressBar, CircularProgress } from "../ui/progress-bar";
import { StreakBadge, XPBadge } from "../ui/badge";
import { SectionHeader } from "../layout/section-header";

// Streak & XP Header
function StreakHeader() {
  return (
    <div className="px-4 flex items-center justify-between">
      <StreakBadge count={5} isActive />
      <XPBadge amount={1250} />
    </div>
  );
}

// Today's Progress
function TodayProgress() {
  return (
    <div className="px-4">
      <Card className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h3 className="text-[16px] font-semibold text-black">Today's Goal</h3>
            <p className="text-[13px] text-[rgba(60,60,67,0.6)]">Complete 1 lesson to keep your streak!</p>
          </div>
          <CircularProgress progress={33} size={56} variant="orange">
            <span className="text-[12px] font-bold text-[#ff5b24]">1/3</span>
          </CircularProgress>
        </div>
        <ProgressBar progress={33} variant="gradient" size="md" />
      </Card>
    </div>
  );
}

// Module Card Component
interface ModuleCardProps {
  emoji: string;
  title: string;
  description: string;
  lessonsCompleted: number;
  totalLessons: number;
  xpReward: number;
  status: "completed" | "in_progress" | "locked";
  color: string;
}

function ModuleCard({ 
  emoji, 
  title, 
  description, 
  lessonsCompleted, 
  totalLessons, 
  xpReward,
  status,
  color 
}: ModuleCardProps) {
  const isLocked = status === "locked";
  const isCompleted = status === "completed";
  
  return (
    <Card 
      className={`overflow-hidden ${isLocked ? 'opacity-60' : ''}`}
      onClick={isLocked ? undefined : () => {}}
    >
      {/* Color bar */}
      <div className="h-1.5" style={{ backgroundColor: isLocked ? '#ccc' : color }} />
      
      <div className="p-4">
        <div className="flex items-start gap-3">
          {/* Icon */}
          <div 
            className={`w-14 h-14 rounded-[12px] flex items-center justify-center text-2xl ${
              isLocked ? 'bg-[#f0f0f0]' : 'bg-opacity-10'
            }`}
            style={{ backgroundColor: isLocked ? undefined : `${color}15` }}
          >
            {isLocked ? <Lock className="w-6 h-6 text-[#999]" /> : emoji}
          </div>
          
          {/* Content */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className={`text-[16px] font-semibold ${isLocked ? 'text-[#999]' : 'text-black'}`}>
                {title}
              </h3>
              {isCompleted && (
                <div className="w-5 h-5 rounded-full bg-[#00a651] flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" strokeWidth={3} />
                </div>
              )}
            </div>
            <p className={`text-[13px] mb-2 ${isLocked ? 'text-[#bbb]' : 'text-[rgba(60,60,67,0.6)]'}`}>
              {description}
            </p>
            
            {/* Progress & XP */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 text-[12px] text-[rgba(60,60,67,0.6)]">
                <span>{lessonsCompleted}/{totalLessons} lessons</span>
              </div>
              <div className="flex items-center gap-1 text-[12px] font-medium" style={{ color: isLocked ? '#999' : color }}>
                <Zap className="w-3.5 h-3.5" />
                <span>+{xpReward} XP</span>
              </div>
            </div>
            
            {/* Progress Bar */}
            {!isLocked && (
              <div className="mt-2">
                <ProgressBar 
                  progress={(lessonsCompleted / totalLessons) * 100} 
                  size="sm" 
                  variant={isCompleted ? "green" : "purple"}
                />
              </div>
            )}
          </div>
          
          {/* Action */}
          <div className="flex items-center">
            {!isLocked && !isCompleted && (
              <div className="w-8 h-8 rounded-full bg-[#ff5b24] flex items-center justify-center">
                <Play className="w-4 h-4 text-white ml-0.5" fill="white" />
              </div>
            )}
            {isCompleted && <ChevronRight className="w-5 h-5 text-[rgba(60,60,67,0.3)]" />}
          </div>
        </div>
      </div>
    </Card>
  );
}

// Lesson Preview Card (for current lesson)
function CurrentLesson() {
  return (
    <div className="px-4">
      <AccentCard variant="purple" className="p-4">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-[12px] bg-white/20 flex items-center justify-center">
            <span className="text-2xl">🛒</span>
          </div>
          <div className="flex-1">
            <span className="text-white/70 text-[11px] font-medium uppercase tracking-wider">Continue</span>
            <h3 className="text-white text-[16px] font-semibold">Lesson 3: Need vs. Want</h3>
            <p className="text-white/80 text-[13px]">Learn to make smart choices</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
            <Play className="w-5 h-5 text-[#5e3dc2] ml-0.5" fill="currentColor" />
          </div>
        </div>
      </AccentCard>
    </div>
  );
}

// Quiz Challenge Card
function QuizChallenge() {
  return (
    <div className="px-4">
      <Card className="p-4 bg-gradient-to-r from-[#ffd700]/10 to-[#ffb700]/10 border-2 border-[#ffd700]/30">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-[#ffd700]/20 flex items-center justify-center">
            <span className="text-2xl">🏆</span>
          </div>
          <div className="flex-1">
            <h3 className="text-[15px] font-semibold text-black">Weekly Quiz Challenge</h3>
            <p className="text-[13px] text-[rgba(60,60,67,0.6)]">Test your knowledge for bonus XP!</p>
          </div>
          <div className="px-3 py-1.5 rounded-full bg-[#ffd700] text-[12px] font-semibold text-black">
            +100 XP
          </div>
        </div>
      </Card>
    </div>
  );
}

// Vippsi Learning Tip
function VippsiLearningTip() {
  return (
    <div className="px-4">
      <div className="bg-gradient-to-r from-[#ff5b24]/10 to-[#5e3dc2]/10 rounded-[14px] p-4">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ff5b24] to-[#ff7a4d] flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <h4 className="text-[14px] font-semibold text-black mb-1">Did you know? 💡</h4>
            <p className="text-[14px] text-[rgba(60,60,67,0.8)] leading-[1.4]">
              People who set specific savings goals save 2x more than those who don't! 
              That's why your goals matter so much!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function LearnScreen() {
  return (
    <div className="flex flex-col gap-5 pt-2 pb-[140px]">
      {/* Page Header */}
      <div className="px-4">
        <h1 className="text-[28px] font-bold text-black tracking-[-0.5px]">Learn</h1>
        <p className="text-[15px] text-[rgba(60,60,67,0.6)] mt-1">Level up your money skills</p>
      </div>
      
      {/* Streak & XP */}
      <StreakHeader />
      
      {/* Today's Progress */}
      <TodayProgress />
      
      {/* Continue Learning */}
      <CurrentLesson />
      
      {/* Quiz Challenge */}
      <QuizChallenge />
      
      {/* Learning Modules */}
      <div className="flex flex-col">
        <SectionHeader title="Learning Path" />
        <div className="px-4 flex flex-col gap-3">
          <ModuleCard 
            emoji="💰"
            title="Saving Basics"
            description="Learn why saving is important"
            lessonsCompleted={5}
            totalLessons={5}
            xpReward={250}
            status="completed"
            color="#00a651"
          />
          <ModuleCard 
            emoji="🛒"
            title="Smart Spending"
            description="Make your money work for you"
            lessonsCompleted={2}
            totalLessons={5}
            xpReward={250}
            status="in_progress"
            color="#5e3dc2"
          />
          <ModuleCard 
            emoji="🎯"
            title="Goals & Planning"
            description="Set goals and reach them"
            lessonsCompleted={0}
            totalLessons={5}
            xpReward={250}
            status="locked"
            color="#ff5b24"
          />
          <ModuleCard 
            emoji="🏦"
            title="Banking Basics"
            description="Understand how banks work"
            lessonsCompleted={0}
            totalLessons={4}
            xpReward={200}
            status="locked"
            color="#0077b6"
          />
        </div>
      </div>
      
      {/* Vippsi Tip */}
      <VippsiLearningTip />
    </div>
  );
}

