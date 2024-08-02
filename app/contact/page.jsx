import React from "react";
import ContactForm from "@/components/contactForm/form";
import Media from "@/components/media/media";
import Layout from "@/layout";

const Contact = () => {
  return (
    <Layout text="CONTACT">
      <ContactForm />
      <Media />
    </Layout>
  );
};

export default Contact;
