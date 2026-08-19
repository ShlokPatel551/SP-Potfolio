import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeScript from "@/components/ThemeScript";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shlok Patel — Software Engineer & Systems Administrator",
  description:
    "Portfolio of Shlok Patel — Software Engineer and Systems Administrator specializing in backend development, network infrastructure, cybersecurity, and system automation.",
  openGraph: {
    title: "Shlok Patel — Software Engineer & Systems Administrator",
    description:
      "Software Engineer and Systems Administrator based in Edison, NJ. Backend, cybersecurity, IoT, and automation.",
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
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
      </head>
      <body className="min-h-screen flex flex-col bg-white dark:bg-[#0a0a0f] text-gray-900 dark:text-gray-100">
        {children}
      </body>
    </html>
  );
}
