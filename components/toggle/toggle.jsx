"use client";
import { useTheme } from "next-themes";
import styles from "./toogle.module.css";
import { Button } from "@nextui-org/react";
import { useEffect } from "react";
import DarkMode from "@/svg/dark";
import LightMode from "@/svg/light";

const ThemeToggleButton = () => {
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    if (theme === "dark")
      document.querySelector("body")?.setAttribute("data-theme", "dark");
    else document.querySelector("body")?.setAttribute("data-theme", "light");
  });

  return (
    <>
      <div className={styles.btnContain}>
        <Button
          className={styles.themeBtn}
          onClick={() => setTheme("light")}
          disabled={theme === "light"}
        >
          <DarkMode />
        </Button>
        <Button
          className={styles.themeBtn}
          onClick={() => setTheme("dark")}
          disabled={theme === "dark"}
        >
          <LightMode />
        </Button>
      </div>
    </>
  );
};

export default ThemeToggleButton;
