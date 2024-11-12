"use client";
import React from "react";
import styles from "./othermedia.module.css";
import Github from "@/svg/github";
import WhatsApp from "@/svg/whatsApp";
import Download from "@/svg/download";
import { motion } from "framer-motion";
import Link from "next/link";

const OtherMedia = () => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 2.5 }}
      className={styles.mediaContainer}
    >
      <div className={styles.mediaContain}>
        <div className={styles.mediaColOne}>
          <h3>Other Platforms</h3>
          <div className={styles.mediaIcon}>
            <Github />
            <Link
              href="https://github.com/korede19"
              target="_blank"
              className={styles.mediaLink}
            >
              @korede19
            </Link>
          </div>
          <div className={styles.mediaIcon}>
            <WhatsApp />
            <Link
              href="https://wa.link/tptsfa"
              target="_blank"
              className={styles.mediaLink}
            >
              +234 81 381 310 61
            </Link>
          </div>
        </div>
        <div className={styles.mediaColTwo}>
          <h3>Resumé</h3>
          <div className={styles.mediaIcon}>
            <button className={styles.downloadBtn}>
              <Link
                href="/CV.pdf"
                Download
                target="_blank"
                className={styles.btnLink}
              >
                Dowload Resumé <Download />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default OtherMedia;
