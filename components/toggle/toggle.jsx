"use client";

import { useTheme } from "next-themes";
import { Button } from "@nextui-org/react";
import { useEffect } from "react";

const ThemeToggleButton = () => {
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    if (theme === "dark")
      document.querySelector("body")?.setAttribute("data-theme", "dark");
    else document.querySelector("body")?.setAttribute("data-theme", "light");
  });

  return (
    <Button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      Switch to {theme === "light" ? "Dark" : "light"} Mode
    </Button>
  );
};

export default ThemeToggleButton;
