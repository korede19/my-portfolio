"use client";
import React from "react";
import styles from "./form.module.css";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <div className={styles.formContain}>
        <p>Reach Out</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.contain}>
            <input
              type="text"
              placeholder="Name"
              className={styles.input}
              {...register("Name", { required: "* Your Name is required" })}
            />
            {errors.Name && (
              <p className={styles.errorMessage}>{errors.Name.message}</p>
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
              placeholder="Reach free to reach out to me, if you are looking foa developer, have a query, or simply want to connect"
              className={styles.textarea}
              {...register("message", { required: "* Message is required" })}
            />
            {errors.message && (
              <p className={styles.errorMessage}>{errors.message.message}</p>
            )}
          </div>
          <button className={styles.formBtn} type="submit">
            <p>Submit</p>
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
