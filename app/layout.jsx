"use client";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { useState, useEffect } from "react";
import Preloader from "../components/preloader/preloader";
import Animation from "@/components/animations/animations";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-inter",
});

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <html lang="en">
      <body className={`body`}>
        <Animation>
          {loading ? (
            <Preloader loading={loading} />
          ) : (
            <Providers>{children}</Providers>
          )}
        </Animation>
      </body>
    </html>
  );
}
