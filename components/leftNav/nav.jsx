import React from "react";
import styles from "./nav.module.css";
import Arrow from "@/svg/arrow";
import ThemeToggleButton from "../toggle/toggle";

const LeftNav = () => {
  return (
    <>
      <div className={styles.navContainer}>
        <div className={styles.imageContain}></div>
        <div className={styles.menuContain}>
          <p>Home</p>
          <Arrow />
          <p>About Me</p>
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
