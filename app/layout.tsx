import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import StructuredData from "./components/StructuredData";
import { profile, siteUrl } from "./lib/data";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const TITLE = `${profile.name} — ${profile.role} · Web · Mobile · AI · Data · DevOps`;
const DESCRIPTION = `${profile.name} is a ${profile.role} based in Bengaluru, India. ${profile.experienceLabel} shipping production software across web, mobile, AI/GenAI, data and DevOps. Available for hire — contact ${profile.email}.`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: TITLE,
    template: `%s — ${profile.name}`,
  },
  description: DESCRIPTION,
  applicationName: `${profile.name} — Portfolio`,
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  publisher: profile.name,
  generator: "Next.js",
  keywords: [
    profile.name,
    "Devanandan",
    "Devanandan S",
    "Devanandan S portfolio",
    "Devanandan developer",
    "Devanandan engineer",
    "Devanandan Bengaluru",
    "Full-Stack Engineer Bengaluru",
    "Full-Stack Developer India",
    "React Developer Bengaluru",
    "Next.js Developer",
    "Node.js Developer",
    "React Native Developer India",
    "iOS Developer Bengaluru",
    "AI Engineer India",
    "GenAI Developer",
    "LLM Engineer",
    "RAG pipelines",
    "LangChain developer",
    "Data Scientist Bengaluru",
    "DevOps Engineer India",
    "Web3 Developer India",
    "MERN Stack Developer",
    "Hire React developer India",
    "Hire full-stack engineer",
    "Freelance developer Bengaluru",
  ],
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    locale: "en_IN",
    url: siteUrl,
    siteName: `${profile.name} — Portfolio`,
    title: TITLE,
    description: DESCRIPTION,
    firstName: profile.firstName,
    lastName: profile.lastName,
    username: "devanandan5",
    gender: "male",
    images: [
      {
        url: "/profile.png",
        width: 1024,
        height: 1024,
        alt: `${profile.name} — ${profile.role}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    creator: "@devanandan_s_",
    images: ["/profile.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add tokens here once you set up Search Console / Bing / Yandex.
    // google: "GOOGLE_VERIFICATION_TOKEN",
    // other: { "msvalidate.01": "BING_VERIFICATION_TOKEN" },
  },
  other: {
    "geo.region": "IN-KA",
    "geo.placename": "Bengaluru",
    "geo.position": "12.9716;77.5946",
    ICBM: "12.9716, 77.5946",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
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
      <body className="min-h-screen antialiased">
        {children}
        <StructuredData />
      </body>
    </html>
  );
}
