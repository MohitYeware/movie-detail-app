"use client";

import ContactCard from "../components/ContactCard";
import styles from "./contact.module.css";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>Contact US</h1>
        <ContactCard />
        <section className={styles.contact_section}>
          <h2>
            We'd love to hear <span> from you </span>
          </h2>
          <ContactForm />
        </section>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.5175935217867!2d12.919859333745956!3d50.83221826047945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a7465e668ae781%3A0x521b1cb4289dab0!2sChemnitz-Zentrum%2C%20Chemnitz!5e0!3m2!1sen!2sde!4v1685517776818!5m2!1sen!2sde"
          allow="fullscreen"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </>
  );
};

export default Contact;
