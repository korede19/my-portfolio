import React from "react";
import styles from "./floatNav.module.css";
import HomeIcon from "@/svg/home";
import AboutIcon from "@/svg/about";
import PortfolioIcon from "@/svg/portfolio";
import TestimonialIcon from "@/svg/testimonial";
import ContactIcon from "@/svg/contact";

const FloatingNav = () => {
  return (
    <div className={styles.iconMenu}>
      <HomeIcon />
      <AboutIcon />
      <PortfolioIcon />
      <TestimonialIcon />
      <ContactIcon />
    </div>
  );
};

export default FloatingNav;
