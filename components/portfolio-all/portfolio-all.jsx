import React from "react";
import styles from "./portfolio-all.module.css";
import { portfolio } from "@/utills/data";
import Portfolio from "../portfolio/portfolio";

const PortfolioAll = () => {
  return (
    <>
      <div className={styles.Container}>
        {portfolio?.map((item, index) => {
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
