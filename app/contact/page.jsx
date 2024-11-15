import React from "react";
import ContactForm from "@/components/contactForm/form";
import Media from "@/components/media/media";
import Layout from "@/layout";
import OtherMedia from "@/components/otherMedias/othermedia";

export const metadata = {
  title: "Contact - Korede Digital Designs",
  description: "Contact Me",
};

const Contact = () => {
  return (
    <Layout text="CONTACT" head="Contact">
      <ContactForm />
      <Media />
      <OtherMedia />
    </Layout>
  );
};

export default Contact;
