import React from "react";
import styles from "./head.module.css";

const Header = ({ text }) => {
  return (
    <>
      <div className={styles.headerContain}>
        <h1>{text}</h1>
      </div>
    </>
  );
};

export default Header;
