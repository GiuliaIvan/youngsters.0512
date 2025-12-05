"use client";

import { 
  ChevronRight, 
  User, 
  Palette, 
  Users, 
  Settings, 
  Sparkles, 
  HelpCircle, 
  Shield,
  Bell,
  Moon,
  Globe,
  Calendar
} from "lucide-react";
import { Card, AccentCard } from "../ui/card";
import { Avatar } from "../ui/avatar";
import { SectionHeader } from "../layout/section-header";

// Profile Header
function ProfileHeader() {
  return (
    <div className="px-4">
      <Card className="p-4">
        <div className="flex items-center gap-4">
          <Avatar initials="AK" size="xl" variant="user" />
          <div className="flex-1">
            <h2 className="text-[20px] font-bold text-black">Alex Karlsen</h2>
            <p className="text-[14px] text-[rgba(60,60,67,0.6)]">Youngster since March 2024</p>
            <div className="flex items-center gap-2 mt-2">
              <span className="px-2 py-0.5 rounded-full bg-[#5e3dc2]/10 text-[12px] font-medium text-[#5e3dc2]">
                Level 5
              </span>
              <span className="px-2 py-0.5 rounded-full bg-[#ff5b24]/10 text-[12px] font-medium text-[#ff5b24]">
                🔥 5 day streak
              </span>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-[rgba(60,60,67,0.3)]" />
        </div>
      </Card>
    </div>
  );
}

// Year in Review Card
function YearInReview() {
  return (
    <div className="px-4">
      <AccentCard variant="orange" className="p-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
            <Calendar className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <span className="text-white/80 text-[12px] font-medium uppercase tracking-wider">New!</span>
            <h3 className="text-white text-[16px] font-semibold">Your Year with Vippsi 🎉</h3>
            <p className="text-white/80 text-[13px]">See all your 2024 highlights</p>
          </div>
          <ChevronRight className="w-5 h-5 text-white/60" />
        </div>
      </AccentCard>
    </div>
  );
}

// Settings Row Component
interface SettingsRowProps {
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  subtitle?: string;
  badge?: string;
  onClick?: () => void;
}

function SettingsRow({ icon, iconBg, title, subtitle, badge, onClick }: SettingsRowProps) {
  return (
    <button 
      className="w-full flex items-center gap-3 py-3 hover:bg-[#fafafa] transition-colors rounded-lg -mx-2 px-2"
      onClick={onClick}
    >
      <div 
        className="w-9 h-9 rounded-[8px] flex items-center justify-center"
        style={{ backgroundColor: iconBg }}
      >
        {icon}
      </div>
      <div className="flex-1 text-left">
        <div className="flex items-center gap-2">
          <span className="text-[15px] font-medium text-black">{title}</span>
          {badge && (
            <span className="px-1.5 py-0.5 rounded bg-[#ff5b24] text-[10px] font-semibold text-white">
              {badge}
            </span>
          )}
        </div>
        {subtitle && (
          <span className="text-[13px] text-[rgba(60,60,67,0.6)]">{subtitle}</span>
        )}
      </div>
      <ChevronRight className="w-4 h-4 text-[rgba(60,60,67,0.3)]" />
    </button>
  );
}

// Vippsi Customization Preview
function VippsiCustomization() {
  return (
    <Card className="p-4 mx-4">
      <div className="flex items-center gap-4">
        {/* Current Vippsi */}
        <div className="relative">
          <div className="w-20 h-20 rounded-full bg-white overflow-hidden flex items-center justify-center shadow-md">
            <img 
              src="/Vippsi 1.png" 
              alt="Vippsi" 
              className="w-[72px] h-[72px] object-cover scale-150 translate-y-1"
            />
          </div>
          {/* Accessory */}
          <div className="absolute -top-2 left-1/2 -translate-x-1/2">
            <span className="text-2xl">🎩</span>
          </div>
        </div>
        
        <div className="flex-1">
          <h3 className="text-[16px] font-semibold text-black">Customize Vippsi</h3>
          <p className="text-[13px] text-[rgba(60,60,67,0.6)] mb-2">Dress up your buddy!</p>
          <div className="flex gap-1">
            <span className="text-lg">🕶️</span>
            <span className="text-lg opacity-40">🎀</span>
            <span className="text-lg opacity-40">👑</span>
            <span className="text-lg opacity-40">🧢</span>
          </div>
        </div>
        <ChevronRight className="w-5 h-5 text-[rgba(60,60,67,0.3)]" />
      </div>
    </Card>
  );
}

// AI Transparency Card
function AITransparency() {
  return (
    <Card className="p-4 mx-4 bg-gradient-to-r from-[#5e3dc2]/5 to-transparent">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-full bg-[#5e3dc2]/10 flex items-center justify-center flex-shrink-0">
          <Sparkles className="w-5 h-5 text-[#5e3dc2]" />
        </div>
        <div className="flex-1">
          <h3 className="text-[15px] font-semibold text-black">How Vippsi Works</h3>
          <p className="text-[13px] text-[rgba(60,60,67,0.6)] mt-1 leading-[1.4]">
            Learn how Vippsi uses AI to give you personalized tips and help you learn about money.
          </p>
        </div>
        <ChevronRight className="w-5 h-5 text-[rgba(60,60,67,0.3)] mt-0.5" />
      </div>
    </Card>
  );
}

export function MeScreen() {
  return (
    <div className="flex flex-col gap-5 pt-2 pb-[140px]">
      {/* Page Header */}
      <div className="px-4">
        <h1 className="text-[28px] font-bold text-black tracking-[-0.5px]">Me</h1>
      </div>
      
      {/* Profile Header */}
      <ProfileHeader />
      
      {/* Year in Review */}
      <YearInReview />
      
      {/* Vippsi Customization */}
      <div className="flex flex-col">
        <SectionHeader title="Your Vippsi" />
        <VippsiCustomization />
      </div>
      
      {/* Account Settings */}
      <div className="flex flex-col">
        <SectionHeader title="Account" />
        <div className="mx-4">
          <Card className="px-4 py-2">
            <SettingsRow 
              icon={<User className="w-4 h-4 text-white" />}
              iconBg="#5e3dc2"
              title="Profile"
              subtitle="Edit your info"
            />
            <SettingsRow 
              icon={<Users className="w-4 h-4 text-white" />}
              iconBg="#00a651"
              title="Parental Link"
              subtitle="Connected to Mom"
            />
            <SettingsRow 
              icon={<Bell className="w-4 h-4 text-white" />}
              iconBg="#ff5b24"
              title="Notifications"
              subtitle="Manage alerts"
            />
          </Card>
        </div>
      </div>
      
      {/* AI Transparency */}
      <AITransparency />
      
      {/* App Settings */}
      <div className="flex flex-col">
        <SectionHeader title="Settings" />
        <div className="mx-4">
          <Card className="px-4 py-2">
            <SettingsRow 
              icon={<Palette className="w-4 h-4 text-white" />}
              iconBg="#ff5b24"
              title="Appearance"
              subtitle="Light mode"
            />
            <SettingsRow 
              icon={<Globe className="w-4 h-4 text-white" />}
              iconBg="#0077b6"
              title="Language"
              subtitle="Norsk"
            />
            <SettingsRow 
              icon={<Shield className="w-4 h-4 text-white" />}
              iconBg="#5e3dc2"
              title="Privacy & Security"
            />
            <SettingsRow 
              icon={<Settings className="w-4 h-4 text-white" />}
              iconBg="#666"
              title="App Settings"
            />
          </Card>
        </div>
      </div>
      
      {/* Help & Support */}
      <div className="flex flex-col">
        <SectionHeader title="Help" />
        <div className="mx-4">
          <Card className="px-4 py-2">
            <SettingsRow 
              icon={<HelpCircle className="w-4 h-4 text-white" />}
              iconBg="#00a651"
              title="Help & Support"
              subtitle="FAQs and contact"
            />
            <SettingsRow 
              icon={<Sparkles className="w-4 h-4 text-white" />}
              iconBg="#ffd700"
              title="What's New"
              badge="NEW"
            />
          </Card>
        </div>
      </div>
      
      {/* Version */}
      <div className="px-4 text-center">
        <p className="text-[12px] text-[rgba(60,60,67,0.4)]">
          Vipps Youngsters v2.0.0 • Made with 💜
        </p>
      </div>
    </div>
  );
}

