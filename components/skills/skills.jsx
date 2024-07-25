import React from "react";
import styles from "./skills.module.css";
import Image from "next/image";

const Skills = ({
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
}) => {
  return (
    <>
      <div className={styles.skillcontainer}>
        <h3>Skills</h3>
        <div className={styles.gridContainer}>
          <div className={styles.itemOne}>
            <Image src={image1} width={32} height={32} alt="html" />
            <h4>HTML 5</h4>
          </div>
          <div className={styles.itemOne}>
            <Image src={image2} width={32} height={32} alt="css" />
            <h4>CSS 3</h4>
          </div>
          <div className={styles.itemOne}>
            <Image src={image3} width={32} height={32} alt="Javascript" />
            <h4>Javascript</h4>
          </div>
          <div className={styles.itemOne}>
            <Image src={image4} width={32} height={32} alt="Figma" />
            <h4>Figma</h4>
          </div>
          <div className={styles.itemOne}>
            <Image src={image5} width={32} height={32} alt="Wordpress" />
            <h4>WordPress</h4>
          </div>
          <div className={styles.itemOne}>
            <Image src={image6} width={32} height={32} alt="Reactjs" />
            <h4>React JS</h4>
          </div>
          <div className={styles.itemOne}>
            <Image src={image7} width={32} height={32} alt="Git" />
            <h4>Git</h4>
          </div>
          <div className={styles.itemOne}>
            <Image src={image8} width={32} height={32} alt="Next Js" />
            <h4>Next JS</h4>
          </div>
          <div className={styles.itemOne}>
            <Image src={image9} width={32} height={32} alt="Typescript" />
            <h4>Typescript</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
