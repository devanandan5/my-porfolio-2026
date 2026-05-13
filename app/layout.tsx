import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Devanandan S — Full-Stack Engineer · Web · Mobile · AI",
  description:
    "Devanandan S — Full-Stack Engineer based in Bengaluru. 6+ years shipping web, mobile, AI/GenAI, data and DevOps end-to-end with React, Next.js, Node.js, React Native, Python and the cloud.",
  keywords: [
    "Devanandan S",
    "Full-Stack Engineer",
    "Full-Stack Developer",
    "React Developer",
    "Next.js",
    "Node.js",
    "React Native",
    "iOS Developer",
    "AI Engineer",
    "GenAI",
    "LLM",
    "Data Science",
    "DevOps",
    "Web3",
    "Bengaluru",
    "Portfolio",
  ],
  authors: [{ name: "Devanandan S" }],
  creator: "Devanandan S",
  openGraph: {
    title: "Devanandan S — Full-Stack Engineer · Web · Mobile · AI",
    description:
      "6+ years shipping web, mobile, AI, data and DevOps end-to-end. Full-stack engineer based in Bengaluru.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Devanandan S — Full-Stack Engineer · Web · Mobile · AI",
    description:
      "6+ years shipping web, mobile, AI, data and DevOps end-to-end. Full-stack engineer based in Bengaluru.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
