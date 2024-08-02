import LeftNav from "@/components/leftNav/nav";
import React from "react";
import styles from "./styles.module.css";
import FloatingNav from "@/components/floatingNav/floatNav";
import Header from "@/components/pageHead/head";

const Layout = ({ children, text }) => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.colOne}>
        <LeftNav />
      </div>
      <div className={styles.colTwo}>
        <Header text={text} />
        {children}
      </div>
      <div className={styles.colThree}>
        <FloatingNav />
      </div>
    </div>
  );
};

export default Layout;
