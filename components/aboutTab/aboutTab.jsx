"use client";
import React from "react";
import styles from "./aboutTab.module.css";
import Experience from "../experienceTab/experience";
import { expText, logoImage } from "@/utills/data";
import Skills from "../skills/skills";
import { motion } from "framer-motion";

const AboutTab = () => {
  return (
    <>
      <div className={styles.Tabcontain}>
        <div className={styles.tabOne}>
          {expText?.map((item, index) => {
            return (
              <motion.div
                key={index}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2, delay: index * 0.2 }}
              >
                <Experience key={index} title={item.title} text={item.text} />
              </motion.div>
            );
          })}
        </div>
        <div className={styles.tabTwo}>
          {logoImage?.map((item, index) => {
            return (
              <motion.div
                key={index}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.4, delay: index * 0.2 }}
              >
                <Skills
                  key={index}
                  image1={item.image1}
                  image2={item.image2}
                  image3={item.image3}
                  image4={item.image4}
                  image5={item.image5}
                  image6={item.image6}
                  image7={item.image7}
                  image8={item.image8}
                  image9={item.image9}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AboutTab;
