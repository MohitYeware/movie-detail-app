"use Client";

import styles from "@/app/contact/contact.module.css";
import { Mulish } from "next/font/google";
import { useState } from "react";

const mulish = Mulish({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

const initialUserState = {
  username: "",
  email: "",
  phone: "",
  message: "",
};

const ContactForm = () => {
  const [user, setUser] = useState(initialUserState);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { Content_Type: "application/json" },
        body: JSON.stringify({
          username: user.username,
          email: user.email,
          phone: user.phone,
          message: user.message,
        }),
      });

      if (response.status === 200) {
        setUser(initialUserState);
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (e) {
      setStatus("error");
    }
  };

  return (
    <form
      className={styles.contact_form}
      onSubmit={handleSubmit}>
      <div className={styles.input_field}>
        <label
          htmlFor="username"
          className={styles.label}>
          Name:
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter your name"
            className={mulish.className}
            value={user.username}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div className={styles.input_field}>
        <label
          htmlFor="email"
          className={styles.label}>
          Email:
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            className={mulish.className}
            value={user.email}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div className={styles.input_field}>
        <label
          htmlFor="phone"
          className={styles.label}>
          Phone:{" "}
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Enter your phone number"
            minLength={9}
            maxLength={14}
            className={mulish.className}
            value={user.phone}
            onChange={handleChange}
            required
          />{" "}
        </label>
      </div>
      <div className={styles.input_field}>
        <label
          htmlFor="message"
          className={styles.label}>
          Message:{" "}
          <textarea
            name="message"
            id="message"
            placeholder="Enter your message"
            className={mulish.className}
            rows={5}
            value={user.message}
            onChange={handleChange}
            required
          />
        </label>
      </div>

      {status === "success" && (
        <p className={styles.success_msg}>Thank you for your message</p>
      )}
      {status === "error" && (
        <p className={styles.error_msg}>
          There was an error submitting your message
        </p>
      )}
      <button
        type="submit"
        className={mulish.className}>
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
