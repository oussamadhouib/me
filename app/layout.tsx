import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/language-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Oussema Dhouib - Fullstack Engineer",
  description:
    "Fullstack Engineer specializing in Next.js, NestJS, TypeScript, React Native, and SQL. Building exceptional digital experiences with modern technologies.",
  keywords:
    "fullstack engineer, next.js, nestjs, typescript, react native, sql, web development",
  authors: [{ name: "Oussema Dhouib" }],
  openGraph: {
    title: "Oussema Dhouib - Fullstack Engineer",
    description:
      "Building exceptional digital experiences with modern technologies",
    type: "website",
  },
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
