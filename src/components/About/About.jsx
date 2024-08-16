import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
              As a frontend developer,I build responsive, user-friendly websites,stay updated with tech trends,and use problem-solving skills and effective communication to deliver high-quality digital solutions.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
              As a backend developer,I create fast, optimized systems and focus on building efficient solutions.Committed to learning and staying current with tech trends,I use problem-solving skills and clear communication to help my team deliver great results.
            
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            
            <div className={styles.aboutItemText}>
              <h3> </h3>
              <p>
                
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
