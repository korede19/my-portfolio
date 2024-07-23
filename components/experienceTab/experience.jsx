import React from "react";
import styles from "./experience.module.css";

const Experience = ({ title, text }) => {
  return (
    <>
      <div className={styles.expContainer}>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </>
  );
};

export default Experience;
