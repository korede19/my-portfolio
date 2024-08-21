"use client";
import { useState } from "react";
import styles from "./page.module.css";
import ThemeToggleButton from "../toggle/toggle";
import Link from "next/link";
import MenuOpen from "@/svg/menuOpen";
import MenuClose from "@/svg/menuClose";
import Arrow from "@/svg/arrow";

const MobileHead = ({ Pagename }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className={styles.MobileHead}>
        <div className={styles.colOne}>
          <h1>{Pagename}</h1>
        </div>
        <div className={styles.colTwo}>
          <div>
            <ThemeToggleButton />
          </div>
          <div>
            <nav className={styles.navbar}>
              <div className={styles.hamburger} onClick={toggleMenu}>
                {isOpen ? <MenuClose /> : <MenuOpen />}
              </div>
              <div
                className={`${styles.overlay} ${
                  isOpen ? styles.showOverlay : ""
                }`}
              >
                <ul className={styles.menu}>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <Arrow />
                  <li>
                    <Link href="/about">About Me</Link>
                  </li>
                  <Arrow />
                  <li>
                    <Link href="/portfolio">Portfolio</Link>
                  </li>
                  <Arrow />
                  <li>
                    <Link href="/testimonials">Testimonials</Link>
                  </li>
                  <Arrow />
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileHead;
