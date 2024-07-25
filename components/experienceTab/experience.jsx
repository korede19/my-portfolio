import React from "react";
import styles from "./experience.module.css";

const Experience = ({ title }) => {
  return (
    <>
      <div className={styles.expContainer}>
        <h1>{title}</h1>
        <div className={styles.textContain}>
          <p>
            - 4 years of experience in HTML, CSS, WordPress and JavaScript
            frameworks like React and Next.js.
          </p>
          <p>
            - Freelance WordPress/ Frontend Developer from March 2022 - Present.
          </p>
          <p>
            - 4Software Engineering Certificate from African Learning Experience
            ALX, August 2021 - 2022.
          </p>
        </div>
      </div>
    </>
  );
};

export default Experience;
