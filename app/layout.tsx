import type { Metadata } from "next";
import { Inter, Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
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
      className={`${inter.variable} ${fraunces.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative">
        <div className="grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
