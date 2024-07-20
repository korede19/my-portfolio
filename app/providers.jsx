"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";

export function Providers({ children }) {
  const { theme } = useTheme();
  return (
    <NextUIProvider suppressHydrationWarning>
      <NextThemesProvider
        attribute="class"
        defaultTheme="dark"
        suppressHydrationWarning
      >
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  );
}
