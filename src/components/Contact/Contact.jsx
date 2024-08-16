import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:gururaghavendrareddy12005@email.com">
            gururaghavendrareddy12005@email.com
          </a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/raghavareddy18">
            www.linkedin.com/in/raghavareddy18
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/Raghava12005">https://github.com/Raghava12005</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/PhoneIcon.png")} alt="Phone icon" />
          <a href="tel:+91 9014158418">+91 9014158418</a>
        </li>
      </ul>
    </footer>
  );
};
