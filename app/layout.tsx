import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wilhelm Gusztav Francia — Project & Product Manager",
  description:
    "Project & Product Manager with 5+ years translating business objectives into roadmaps and driving cross-functional execution across platform, infrastructure, and operations.",
  openGraph: {
    title: "Wilhelm Gusztav Francia — Project & Product Manager",
    description:
      "Project & Product Manager with 5+ years translating business objectives into roadmaps and driving cross-functional execution across platform, infrastructure, and operations.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative">
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
