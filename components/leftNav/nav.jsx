"use client";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import React from "react";
import styles from "./nav.module.css";
import Arrow from "@/svg/arrow";
import ThemeToggleButton from "../toggle/toggle";
import Link from "next/link";

const LeftNav = () => {
  const pathname = usePathname();
  return (
    <>
      <div className={styles.navContainer}>
        <div className={styles.imageContain}></div>
        <div className={styles.menuContain}>
          <Link href="/" className={styles.linkStyle}>
            <p>Home</p>
          </Link>
          <Arrow />
          <Link href="/about" className={styles.linkStyle} passHref>
            <p
              className={classNames({ [styles.active]: pathname === "/about" })}
            >
              About Me
            </p>
          </Link>
          <Arrow />
          <Link href="/portfolio" className={styles.linkStyle}>
            <p
              className={classNames({
                [styles.active]: pathname === "/portfolio",
              })}
            >
              Portfolio
            </p>
          </Link>
          <Arrow />
          <p>Testimonials</p>
          <Arrow />
          <p>Contact</p>
        </div>
        <div className={styles.globalBtn}>
          <ThemeToggleButton />
        </div>
      </div>
    </>
  );
};

export default LeftNav;
