"use client";
import React, { useState } from "react";
import styles from "./portfolio-all.module.css";
import { portfolio } from "@/utills/data";
import Portfolio from "../portfolio/portfolio";
import { motion } from "framer-motion";

const PortfolioAll = () => {
  const [active, setActive] = useState("");
  return (
    <div>
      <div className={styles.tabContain}>
        <p
          className={active === "" ? styles.active : ""}
          onClick={() => setActive("")}
        >
          All
        </p>
        <p
          onClick={() => setActive("Wordpress")}
          className={active === "Wordpress" ? styles.active : ""}
        >
          Wordpress
        </p>
        <p
          className={active === "Javascript" ? styles.active : ""}
          onClick={() => setActive("Javascript")}
        >
          Javascript
        </p>
      </div>
      <div className={styles.Container}>
        {portfolio
          ?.filter((items) => {
            if (active === "") return items;
            else return items.tech === active;
          })
          ?.map((item, index) => {
            return (
              <motion.div
                key={index}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: index * 0.5 }}
              >
                <Portfolio
                  image={item.image}
                  title={item.title}
                  text={item.text}
                  link={item.link}
                />
              </motion.div>
            );
          })}
      </div>
    </div>
  );
};

export default PortfolioAll;
