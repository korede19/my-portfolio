import React from "react";
import styles from "./nav.module.css";
import Arrow from "@/svg/arrow";
import ThemeToggleButton from "../toggle/toggle";
import Link from "next/link";

const LeftNav = () => {
  return (
    <>
      <div className={styles.navContainer}>
        <div className={styles.imageContain}></div>
        <div className={styles.menuContain}>
          <Link href="/" className={styles.linkStyle}>
            <p>Home</p>
          </Link>
          <Arrow />
          <Link href="/about" className={styles.linkStyle}>
            <p>About Me</p>
          </Link>
          <Arrow />
          <p>Portfolio</p>
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
