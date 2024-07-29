import React from "react";
import styles from "./testimonial.module.css";
import Image from "next/image";

const TestimonialSingle = ({ image, title, text }) => {
  return (
    <>
      <div className={styles.testimonialContain}>
        <div className={styles.imageContain}>
          <Image
            src={image}
            width={300}
            height={200}
            alt="Testimonial"
            className={styles.image}
          />
        </div>
        <div className={styles.textContain}>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
};

export default TestimonialSingle;
