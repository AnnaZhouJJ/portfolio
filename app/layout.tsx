import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavBar } from "./components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Anna Zhou | Portfolio",
    template: "Anna Zhou | %s"  // This will be used for other pages
  },
  description: "Personal portfolio of Anna Zhou",
  icons: {
    icon: [
      { url: "/favicon.ico" },  // Try this first
      { url: "/profile-icon.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/profile-icon.png",
    apple: "/profile-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
