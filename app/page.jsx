"use client";
import React from "react";
import ThemeToggleButton from "../components/toggle/toggle";
import styles from "./page.module.css";
import FloatingNav from "@/components/floatingNav/floatNav";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.colOne}>
        <div className={styles.toogleBtn}>
          <ThemeToggleButton />
        </div>
        <div className={styles.textContain}>
          <h3>Hi There</h3>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1>I’M KOREDE</h1>
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <div className={styles.Aboutbtn}>
              <p>Web developer / Web designer</p>
            </div>
          </motion.div>
          <div className={styles.textBody}>
            <p>
              Hi, Korede, a passionate web developer and designer with a keen
              eye for detail and a love for creating beautiful, user-friendly
              websites.
            </p>
            <p>
              With expertise in both front-end development and design, I bring a
              unique blend of creativity and technical skill to every project.
              Whether it's crafting responsive layouts, developing interactive
              features, or designing intuitive user interfaces, I thrive on
              turning ideas into engaging digital experiences.
            </p>
          </div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <div className={styles.btnContain}>
              <Link href="/about">
                <button>More About Me</button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      <div className={styles.colTwo}>
        <div className={styles.iconMenu}>
          <FloatingNav />
        </div>
      </div>
    </div>
  );
}
