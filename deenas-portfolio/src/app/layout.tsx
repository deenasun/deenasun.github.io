import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import Galaxy from "@/components/Galaxy";

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Deena's Portfolio",
  description: "Deena's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <Galaxy />
        <main>
          {children}
          </main>
        <Footer />
      </body>
    </html>
  );
}
