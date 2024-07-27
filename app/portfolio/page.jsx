import React from "react";
import styles from "./portfolio.module.css";
import LeftNav from "@/components/leftNav/nav";
import Header from "@/components/pageHead/head";
import FloatingNav from "@/components/floatingNav/floatNav";
import PortfolioAll from "@/components/portfolio-all/portfolio-all";

const Portfolio = () => {
  return (
    <>
      <div className={styles.pageContainer}>
        <div className={styles.colOne}>
          <LeftNav />
        </div>
        <div className={styles.colTwo}>
          <div className={styles.portcontain}>
            <Header text="PORTFOLIO" />
          </div>
          <div className={styles.tabContain}>
            <p>All</p>
            <p>Wordpress</p>
            <p>Javascript</p>
          </div>
          {/* <div className={styles.PortfolioContain}> */}
          <PortfolioAll />
          {/* </div> */}
        </div>
        <div className={styles.colThree}>
          <FloatingNav />
        </div>
      </div>
    </>
  );
};

export default Portfolio;
