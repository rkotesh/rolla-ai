import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rolla | Custom Website & Web Application Development",
  description: "Rolla is a digital agency helping businesses build custom, high-performance websites and web applications tailored to their needs.",
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
