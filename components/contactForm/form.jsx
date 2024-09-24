"use client";
import React, { useState } from "react";
import styles from "./form.module.css";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { ThreeDots } from "react-loader-spinner";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);

  const onSubmit = (e) => {
    setLoading(true);
    const data = {
      name: e.name,
      email: e.email,
      message: e.message,
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    console.log("Submitting form with data:", data);
    console.log("Fetch options:", options);

    fetch(`/api/send`, options)
      .then((response) => {
        console.log(response);
        if (!response.ok) throw new Error(response.statusText);
        return response.json();
      })
      .then(() => {
        toast.success("Message sent Successfully");
        setLoading(false);
        reset();
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
        toast.error("Something went wrong!! Please try again");
      });
  };
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className={styles.formContain}
    >
      <p>Reach Out</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.contain}>
          <input
            type="text"
            placeholder="Name"
            className={styles.input}
            {...register("name", { required: "* Your Name is required" })}
          />
          {errors.name && (
            <p className={styles.errorMessage}>{errors.name.message}</p>
          )}

          <input
            type="email"
            placeholder="Email"
            className={styles.input}
            {...register("email", {
              required: "* Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "* Entered value does not match email format",
              },
            })}
          />
          {errors.email && (
            <p className={styles.errorMessage}>{errors.email.message}</p>
          )}

          <textarea
            id="message"
            placeholder="Feel free to reach out to me if you are looking for a developer, have a query, or simply want to connect"
            className={styles.textarea}
            {...register("message", { required: "* Message is required" })}
          />
          {errors.message && (
            <p className={styles.errorMessage}>{errors.message.message}</p>
          )}
        </div>
        {loading ? (
          <ThreeDots
            visible={true}
            height="40"
            width="40"
            color="var(--color)"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        ) : (
          <button className={styles.formBtn} type="submit">
            <p>Submit</p>
          </button>
        )}
      </form>
    </motion.div>
  );
};

export default ContactForm;
