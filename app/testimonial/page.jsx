import React from "react";
import styles from "./testimonials.module.css";
import LeftNav from "@/components/leftNav/nav";
import Header from "@/components/pageHead/head";
import FloatingNav from "@/components/floatingNav/floatNav";

const Testimonials = () => {
  return (
    <>
      <div className={styles.pageContainer3}>
        <div className={styles.colOne3}>
          <LeftNav />
        </div>
        <div className={styles.colTwo3}>
          <Header text="Testimonials" />
        </div>
        <div className={styles.colThree3}>
          <FloatingNav />
        </div>
      </div>
    </>
  );
};

export default Testimonials;
