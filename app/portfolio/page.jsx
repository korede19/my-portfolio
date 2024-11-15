import React from "react";
import PortfolioAll from "@/components/portfolio-all/portfolio-all";
import Layout from "@/layout";

export const metadata = {
  title: "Testimonial - Korede Digital Designs",
  description: "Checkout my recent projects",
};

const Portfolio = () => {
  return (
    <Layout text="PORTFOLIO" head="Portfolio">
      <PortfolioAll />
    </Layout>
  );
};

export default Portfolio;
