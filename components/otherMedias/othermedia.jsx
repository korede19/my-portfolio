"use client";
import React from "react";
import styles from "./othermedia.module.css";
import Github from "@/svg/github";
import WhatsApp from "@/svg/whatsApp";
import Download from "@/svg/download";
import { motion } from "framer-motion";

const OtherMedia = () => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 2.5 }}
      className={styles.mediaContain}
    >
      <div className={styles.mediaColOne}>
        <h3>Other Platforms</h3>
        <div className={styles.mediaIcon}>
          <Github />
          <p>@korede19 </p>
        </div>
        <div className={styles.mediaIcon}>
          <WhatsApp />
          <p>+234 81 381 310 61</p>
        </div>
      </div>
      <div className={styles.mediaColTwo}>
        <h3>Resumé</h3>
        <div className={styles.mediaIcon}>
          <button className={styles.downloadBtn}>
            <p> Dowload Resumé </p> <Download />
          </button>
        </div>
      </div>
      <div className={styles.spacer}></div>
    </motion.div>
  );
};

export default OtherMedia;
