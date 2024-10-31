"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import styles from "./index.module.css";

function LeftToRightFadeText() {
  const container = useRef(null);

  useGSAP(
    () => {
      // This is necessary to prevent flickering
      gsap.set(`.${styles.title}`, { visibility: "visible" });

      new SplitType(`.${styles.title}`);
      gsap.fromTo(
        `.${styles.title} .char`,
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
          stagger: 0.1,
          delay: 0.2,
          duration: 2,
        }
      );
    },
    { scope: container }
  );

  return (
    <section className={styles.container} ref={container}>
      <h1 className={styles.title}>Urca che top!</h1>
    </section>
  );
}

export default LeftToRightFadeText;
