"use client";
import React from "react";
import styles from "./about.module.css";
import AboutTab from "@/components/aboutTab/aboutTab";
import Media from "@/components/media/media";
import { motion } from "framer-motion";
import Layout from "@/layout";

const AboutPage = () => {
  return (
    <Layout text="ABOUT ME">
      <div className={styles.aboutText}>
        <p>Hi, I'm Korede Oyeyemi, a passionate web developer and designer with 4 years of experience in HTML, CSS, and JavaScript frameworks like React and Next.js.</p>
        <p>
          With a keen eye for detail and a love for creating beautiful, user-friendly websites, I bring a unique blend of creativity and technical skill to every project. I'm also
          proficient with WordPress, enabling me to craft dynamic and responsive websites that meet diverse client needs.
        </p>
      </div>
      <AboutTab />
      <Media />
    </Layout>
  );
};

export default AboutPage;
