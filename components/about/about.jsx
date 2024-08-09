"use client";
import React from "react";
import styles from "./about.module.css";
import { motion } from "framer-motion";

const AboutText = () => {
  return (
    <>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className={styles.aboutText}>
          <p>
            Hi, I'm Korede Oyeyemi, a passionate web developer and designer with
            4 years of experience in HTML, CSS, and JavaScript frameworks like
            React and Next.js.
          </p>
          <p>
            With a keen eye for detail and a love for creating beautiful,
            user-friendly websites, I bring a unique blend of creativity and
            technical skill to every project. I'm also proficient with
            WordPress, enabling me to craft dynamic and responsive websites that
            meet diverse client needs.
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default AboutText;
