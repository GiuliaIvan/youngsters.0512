import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vipps Youngsters | Learn Money, Have Fun",
  description: "AI-powered financial learning for ages 12-14. Learn to save, spend smart, and reach your goals with Vippsi!",
  keywords: ["vipps", "youngsters", "financial learning", "kids", "money", "savings"],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#ff5b24",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#f5f5f5]">
        {children}
      </body>
    </html>
  );
}
