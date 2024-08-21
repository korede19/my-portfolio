import React from "react";
import PortfolioAll from "@/components/portfolio-all/portfolio-all";
import Layout from "@/layout";

const Portfolio = () => {
  return (
    <Layout text="PORTFOLIO" head="Portfolio">
      <PortfolioAll />
    </Layout>
  );
};

export default Portfolio;
