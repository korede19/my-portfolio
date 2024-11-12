"use client";
import React from "react";
import styles from "./media.module.css";
import Gmail from "@/svg/mail";
import Phone from "@/svg/phone";
import Linkedln from "@/svg/linkedln";
import Twitter from "@/svg/twitter";
import { motion } from "framer-motion";
import Link from "next/link";

const Media = () => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 2 }}
      className={styles.mediaContainer}
    >
      <div className={styles.mediaColOne}>
        <h3>Get In Touch</h3>
        <div className={styles.mediaIcon}>
          <Gmail />
          <p>oyeyemikorede5@gmail.com </p>
        </div>
        <div className={styles.mediaIcon}>
          <Phone />
          <Link
            href="tel:+2348138131061"
            target="_blank"
            className={styles.linkText}
          >
            +234 81 381 310 61
          </Link>
        </div>
      </div>
      <div className={styles.mediaColTwo}>
        <h3>Media</h3>
        <div className={styles.mediaIcon}>
          <Linkedln />
          <Link
            href="https://www.linkedin.com/in/korede-oyeyemi-aa0b981b3/"
            target="_blank"
            className={styles.linkText}
          >
            @Oyeyemi_Korede
          </Link>
        </div>
        <div className={styles.mediaIcon}>
          <Twitter />
          <Link
            href="https://x.com/KoredeSimon_"
            target="_blank"
            className={styles.linkText}
          >
            @koredesimon_
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Media;
