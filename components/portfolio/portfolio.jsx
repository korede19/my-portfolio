import React from "react";
import styles from "./portfolio.module.css";
import Image from "next/image";
import Link from "next/link";

const Portfolio = ({ image, title, text, link }) => {
  return (
    <>
      <div className={styles.portContainer}>
        <Image src={image} alt="img" width={500} height={400} className={styles.portImg} loading="lazy" />
        <h2>{title}</h2>
        <p>{text}</p>
        <Link href={link} target="_blank">
          <button className={styles.portBtn}> Visit Site </button>
        </Link>
      </div>
    </>
  );
};

export default Portfolio;
