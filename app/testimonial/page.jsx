import React from "react";
import TestimonialAll from "@/components/testimonial-all/testimonial-all";
import Layout from "@/layout";

export const metadata = {
  title: "Testimonial - Korede Digital Designs",
  description: "Checkout testimonies from my recent clients",
};

const Testimonials = () => {
  return (
    <>
      <Layout text="TESTIMONIALS" head="Testimonials">
        <TestimonialAll />
      </Layout>
    </>
  );
};

export default Testimonials;
