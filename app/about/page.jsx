import React from "react";
import styles from "./about.module.css";
import LeftNav from "@/components/leftNav/nav";
import Header from "@/components/pageHead/head";
import FloatingNav from "@/components/floatingNav/floatNav";
import AboutTab from "@/components/aboutTab/aboutTab";

const AboutPage = () => {
  return (
    <>
      <div className={styles.pageContainer}>
        <div className={styles.colOne}>
          <LeftNav />
        </div>
        <div className={styles.colTwo}>
          <Header text="ABOUT ME" />
          <div className={styles.aboutText}>
            <p>
              I’m <b>Korede Oyeyemi</b>, Web Developer/ Web Designer
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Amet pellentesque
              facilisis eu et laoreet. Congue dictum velit fermentum tincidunt
              pulvinar. Urna ut viverra augue sit quam. Bibendum at maecenas
              phasellus donec amet vel bibendum consectetur.
            </p>
          </div>
          <div className={styles.aboutTab}>
            <AboutTab />
          </div>
        </div>
        <div className={styles.colThree}>
          <FloatingNav />
        </div>
      </div>
    </>
  );
};

export default AboutPage;
