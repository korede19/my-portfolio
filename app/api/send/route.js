import { NextApiRequest, NextApiResponse } from "next";
import emailjs from "emailjs-com";

const handleSubmit = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  try {
    const params = {
      name,
      email,
      message,
    };

    emailjs.init("gZglzS91gfya7P_fc"); // Replace with your EmailJS user ID

    const result = await emailjs.send(
      "service_rrzvfu7", // Replace with your EmailJS service ID
      "template_gje48a6", // Replace with your EmailJS template ID
      params
    );

    console.log("SUCCESS!", result.status, result.text);
    return res
      .status(200)
      .json({ message: "Thank you! Your message has been sent." });
  } catch (error) {
    console.log("FAILED...", error);
    return res
      .status(500)
      .json({ error: "Error sending email. Please try again." });
  }
};

export default handleSubmit;
