import React from "react";
import styles from "./page.module.css";
import ThemeToggleButton from "../toggle/toggle";

const MobileHead = ({ Pagename }) => {
  return (
    <>
      <div className={styles.MobileHead}>
        <div className={styles.colOne}>
          <h1>{Pagename}</h1>
        </div>
        <div className={styles.colTwo}>
          <div>
            <ThemeToggleButton />
          </div>
          <div>
            <p>menu</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileHead;
