import React from "react";
import styles from "./testimonial-all.module.css";
import { Testimonial } from "@/utills/data";
import TestimonialSingle from "../testimonial/testimonial";

const TestimonialAll = () => {
  return (
    <>
      <div className={styles.testContain}>
        {Testimonial?.map((item, index) => {
          return (
            <TestimonialSingle
              key={index}
              image={item.image}
              title={item.title}
              text={item.text}
            />
          );
        })}
      </div>
    </>
  );
};

export default TestimonialAll;
