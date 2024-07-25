import React from "react";
import styles from "./portfolio.module.css";
import LeftNav from "@/components/leftNav/nav";
import Header from "@/components/pageHead/head";
import FloatingNav from "@/components/floatingNav/floatNav";

const Portfolio = () => {
  return (
    <>
      <div className={styles.pageContainer}>
        <div className={styles.colOne}>
          <LeftNav />
        </div>
        <div className={styles.colTwo}>
          <Header text="PORTFOLIO" />
        </div>
        <div className={styles.colThree}>
          <FloatingNav />
        </div>
      </div>
    </>
  );
};

export default Portfolio;
