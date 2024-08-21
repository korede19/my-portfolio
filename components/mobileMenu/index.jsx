import React from "react";
import styles from "./page.module.css";
import HomeIcon from "@/svg/home";
import AboutIcon from "@/svg/about";
import PortfolioIcon from "@/svg/portfolio";
import TestimonialIcon from "@/svg/testimonial";
import ContactIcon from "@/svg/contact";

const MobileMenu = () => {
  return (
    <>
      <div className={styles.iconMenu}>
        <HomeIcon />
        <AboutIcon />
        <PortfolioIcon />
        <TestimonialIcon />
        <ContactIcon />
      </div>
    </>
  );
};

export default MobileMenu;
