import React from "react";
import AboutTab from "@/components/aboutTab/aboutTab";
import Media from "@/components/media/media";
import Layout from "@/layout";
import AboutText from "@/components/about/about";

export const metadata = {
  title: "About - Korede Digital Designs",
  description: "Learn more about my skills and experience",
};

const AboutPage = () => {
  return (
    <Layout text="ABOUT ME" head="About">
      <AboutText />
      <AboutTab />
      <Media />
    </Layout>
  );
};

export default AboutPage;
