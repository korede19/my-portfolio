"use client";
import React from "react";
import styles from "./testimonial-all.module.css";
import { Testimonial } from "@/utills/data";
import TestimonialSingle from "../testimonial/testimonial";
import { motion } from "framer-motion";

const TestimonialAll = () => {
  return (
    <>
      <div className={styles.testContain}>
        {Testimonial?.map((item, index) => {
          return (
            <motion.div
              key={index}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: index * 0.5 }}
            >
              <TestimonialSingle
                image={item.image}
                title={item.title}
                text={item.text}
              />
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default TestimonialAll;
