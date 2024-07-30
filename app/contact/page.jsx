"use client";
import React from "react";
import styles from "./contact.module.css";
import LeftNav from "@/components/leftNav/nav";
import Header from "@/components/pageHead/head";
import FloatingNav from "@/components/floatingNav/floatNav";
import ContactForm from "@/components/contactForm/form";
import Media from "@/components/media/media";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <>
      <div className={styles.pageContainer4}>
        <div className={styles.colOne4}>
          <LeftNav />
        </div>
        <div className={styles.colTwo4}>
          <Header text="CONTACT" />
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <ContactForm />
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <Media />
          </motion.div>
        </div>
        <div className={styles.colThree4}>
          <FloatingNav />
        </div>
      </div>
    </>
  );
};

export default Contact;
