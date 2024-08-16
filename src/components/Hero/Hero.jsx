import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
      <h1 className={styles.title}>
  <span className={styles.word1}> Dive into my Tech Journey,</span>
  <span className={styles.word2}>I am</span>
  <span className={styles.word3}>Yaperla Guru Raghavendra Reddy</span>
 
</h1>

        <p className={styles.description}>
          As a Computer Science and Engineering student, I excel in full-stack
          web development and intelligent algorithms. My strong problem-solving
          skills and effective teamwork, paired with a commitment to continuous
          learning and innovation, drive my contributions to successful
          projects. I balance technical expertise with clear communication to
          deliver impactful solutions.
        </p>
        <a
          href="mailto:gururaghavendrareddy12005@email.com"
          className={styles.contactBtn}
        >
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
