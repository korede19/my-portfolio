"use client";
import React, { useState } from "react";
import styles from "./portfolio-all.module.css";
import { portfolio } from "@/utills/data";
import Portfolio from "../portfolio/portfolio";

const PortfolioAll = () => {
  const [active, setActive] = useState("");
  return (
    <>
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
              <Portfolio
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

export default PortfolioAll;
