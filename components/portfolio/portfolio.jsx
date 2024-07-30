import React from "react";
import styles from "./portfolio.module.css";
import Image from "next/image";

const Portfolio = ({ image, title, text }) => {
  return (
    <>
      <div className={styles.portContainer}>
        <Image src={image} alt="img" width={550} height={250} priority />
        <h2>{title}</h2>
        <p>{text}</p>
        <button className={styles.portBtn}> Visit Site </button>
      </div>
    </>
  );
};

export default Portfolio;
