import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rolla | Automate your business. No code needed.",
  description: "Rolla is a no-code automation agency helping businesses build smart automated workflows using Make, Zapier, and n8n.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} scroll-smooth antialiased`}>
      <body className="min-h-screen flex flex-col font-sans bg-brand-bg text-gray-900">
        {children}
      </body>
    </html>
  );
}
