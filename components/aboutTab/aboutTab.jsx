import React from "react";
import styles from "./aboutTab.module.css";
import Experience from "../experienceTab/experience";
import { expText, logoImage } from "@/utills/data";
import Skills from "../skills/skills";

const AboutTab = () => {
  return (
    <>
      <div className={styles.Tabcontain}>
        <div className={styles.tabOne}>
          {expText?.map((item, index) => {
            return (
              <Experience key={index} title={item.title} text={item.text} />
            );
          })}
        </div>
        <div className={styles.tabTwo}>
          {logoImage?.map((item, index) => {
            return (
              <Skills
                key={index}
                image1={item.image1}
                image2={item.image2}
                image3={item.image3}
                image4={item.image4}
                image5={item.image5}
                image6={item.image6}
                image7={item.image7}
                image8={item.image8}
                image9={item.image9}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AboutTab;
