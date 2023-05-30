import styles from "@/app/contact/contact.module.css";
import Link from "next/link";
import { MdEmail, MdVoiceChat, MdForum } from "react-icons/md";

const ContactCard = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.grid_card}>
            <i>
              {" "}
              <MdEmail />{" "}
            </i>
            <h2>Email</h2>
            <p>Monday to Friday Expected</p>
            <p className={styles.last_para}>Response time: 72 hours</p>
            <button disabled>Send Email</button>
          </div>
          <div className={styles.grid_card}>
            <i>
              <MdVoiceChat />
            </i>
            <h2>Live Chat</h2>
            <p>Weekdays: 9AM - 6PM</p>
            <p className={styles.last_para}>Saturday: 9AM - 4PM</p>
            <button disabled>Chat Now</button>
          </div>
          <div className={styles.grid_card}>
            <i>
              <MdForum />
            </i>
            <h2>Community Forum</h2>
            <p>Monday to Friday Expected</p>
            <p className={styles.last_para}>response time: 72 hours </p>
            <button disabled>Ask the Community</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
