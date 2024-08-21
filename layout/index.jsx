"use client";
import LeftNav from "@/components/leftNav/nav";
import React from "react";
import styles from "./styles.module.css";
import FloatingNav from "@/components/floatingNav/floatNav";
import Header from "@/components/pageHead/head";
import MobileHead from "@/components/mobileHead";
import MobileMenu from "@/components/mobileMenu";

const Layout = ({ children, text, head }) => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.colOne}>
        <LeftNav />
      </div>
      <MobileHead Pagename={head} />
      <div className={styles.colTwo}>
        <Header text={text} />
        {children}
      </div>
      <MobileMenu />
      <div className={styles.colThree}>
        <FloatingNav />
      </div>
    </div>
  );
};

export default Layout;
