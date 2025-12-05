"use client";

export function StatusBar() {
  return (
    <div className="h-[50px] flex items-end justify-between px-6 pb-1.5">
      <span className="text-[17px] font-semibold tracking-[-0.44px]">17:24</span>
      <div className="flex items-center gap-1.5">
        {/* Mobile Signal */}
        <svg width="18" height="12" viewBox="0 0 18 12" fill="currentColor">
          <rect x="0" y="6" width="3" height="6" rx="1"/>
          <rect x="5" y="4" width="3" height="8" rx="1"/>
          <rect x="10" y="2" width="3" height="10" rx="1"/>
          <rect x="15" y="0" width="3" height="12" rx="1"/>
        </svg>
        {/* WiFi */}
        <svg width="17" height="12" viewBox="0 0 17 12" fill="currentColor">
          <path d="M8.5 2.5C11.5 2.5 14.1 3.6 16 5.5L14.5 7C13 5.5 10.9 4.5 8.5 4.5C6.1 4.5 4 5.5 2.5 7L1 5.5C2.9 3.6 5.5 2.5 8.5 2.5ZM8.5 6C10.3 6 11.9 6.7 13 7.8L11.5 9.3C10.7 8.5 9.7 8 8.5 8C7.3 8 6.3 8.5 5.5 9.3L4 7.8C5.1 6.7 6.7 6 8.5 6ZM8.5 9.5C9.3 9.5 10 9.8 10.5 10.3L8.5 12.3L6.5 10.3C7 9.8 7.7 9.5 8.5 9.5Z"/>
        </svg>
        {/* Battery */}
        <svg width="27" height="13" viewBox="0 0 27 13" fill="none">
          <rect x="0.5" y="0.5" width="23" height="12" rx="3" stroke="currentColor"/>
          <rect x="2" y="2" width="20" height="9" rx="1.5" fill="currentColor"/>
          <path d="M25 4.5V8.5C25.8 8.5 26 7.5 26 6.5C26 5.5 25.8 4.5 25 4.5Z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  );
}

