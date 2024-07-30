"use client";
import React from "react";
import styles from "./about.module.css";
import LeftNav from "@/components/leftNav/nav";
import Header from "@/components/pageHead/head";
import FloatingNav from "@/components/floatingNav/floatNav";
import AboutTab from "@/components/aboutTab/aboutTab";
import Media from "@/components/media/media";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <>
      <div className={styles.pageContainer}>
        <div className={styles.colOne}>
          <LeftNav />
        </div>
        <div className={styles.colTwo}>
          <Header text="ABOUT ME" />
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className={styles.aboutText}>
              <p>
                Hi, I'm Korede Oyeyemi, a passionate web developer and designer
                with 4 years of experience in HTML, CSS, and JavaScript
                frameworks like React and Next.js.
              </p>
              <p>
                With a keen eye for detail and a love for creating beautiful,
                user-friendly websites, I bring a unique blend of creativity and
                technical skill to every project. I'm also proficient with
                WordPress, enabling me to craft dynamic and responsive websites
                that meet diverse client needs.
              </p>
            </div>
          </motion.div>
          <div className={styles.aboutTab}>
            <AboutTab />
          </div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.8 }}
          >
            <div className={styles.mediaTab}>
              <Media />
            </div>
          </motion.div>
        </div>
        <div className={styles.colThree}>
          <FloatingNav />
        </div>
      </div>
    </>
  );
};

export default AboutPage;
