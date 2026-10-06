import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Cormorant_Garamond, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rolla.dev"),
  title: {
    default: "Rolla | Custom Web Software. Engineered for Scale.",
    template: "%s | Rolla",
  },
  description:
    "Rolla builds high-performance websites and web applications that empower businesses to launch, scale, and thrive. Custom software engineering. India-based. Startup-friendly pricing.",
  applicationName: "Rolla",
  authors: [
    { name: "Koteswararao Sankula", url: "https://linkedin.com/in/sankulakoteswararao" },
  ],
  creator: "Koteswararao Sankula",
  publisher: "Rolla Software Solutions",
  keywords: [
    "custom web development",
    "software solutions company",
    "web application development India",
    "MERN stack development",
    "Java Spring Boot developer",
    "full stack development",
    "SaaS development",
    "React developer India",
    "startup web development",
    "enterprise software solutions",
  ],
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://rolla.dev",
    siteName: "Rolla Software Solutions",
    title: "Rolla | Custom Web Software. Engineered for Scale.",
    description:
      "Rolla builds high-performance websites and web applications that empower businesses to launch, scale, and thrive. Custom software engineering. India-based. Startup-friendly pricing.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rolla | Custom Web Software. Engineered for Scale.",
    description:
      "Rolla builds high-performance websites and web applications that empower businesses to launch, scale, and thrive. Custom software engineering. India-based.",
    creator: "@rolla_dev",
  },
  alternates: {
    canonical: "https://rolla.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${cormorant.variable} ${jetbrains.variable} scroll-smooth antialiased`}>
      <body className="min-h-screen flex flex-col font-sans bg-rolla-bg text-rolla-text">
        {children}
      </body>
    </html>
  );
}
