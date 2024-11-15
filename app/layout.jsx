"use client";
import "./globals.css";
import { useState, useEffect } from "react";
import Preloader from "../components/preloader/preloader";
import { Providers } from "@/redux/provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Meta from "@/components/meta/meta";

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
      <Meta
        title="Korede Digital Designs"
        description="Hi, I'm Korede, a passionate web developer and designer with a keen eye for detail and a love for creating beautiful, user-friendly websites."
      />
      <body className={`body`}>
        <ToastContainer />
        {loading ? (
          <Preloader loading={loading} />
        ) : (
          <Providers>{children}</Providers>
        )}
      </body>
    </html>
  );
}
