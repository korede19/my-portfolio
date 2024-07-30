import React from "react";
import styles from "./portfolio.module.css";
import LeftNav from "@/components/leftNav/nav";
import Header from "@/components/pageHead/head";
import FloatingNav from "@/components/floatingNav/floatNav";
import PortfolioAll from "@/components/portfolio-all/portfolio-all";

const Portfolio = () => {
  return (
    <>
      <div className={styles.pageContainer2}>
        <div className={styles.colOne2}>
          <LeftNav />
        </div>
        <div className={styles.colTwo2}>
          <Header text="PORTFOLIO" />
          <PortfolioAll />
        </div>
        <div className={styles.colThree2}>
          <FloatingNav />
        </div>
      </div>
    </>
  );
};

export default Portfolio;
