"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import styles from "./index.module.css";
/* import { SplitText } from "gsap-trial/SplitText"; */
/* gsap.registerPlugin(SplitText); */

function SplitText() {
  const container = useRef(null);

  useGSAP(
    () => {
      // This is necessary to prevent flickering
      gsap.set(`.${styles.title}`, { visibility: "visible" });

      new SplitType(`.${styles.title}`);
      gsap.fromTo(
        `.${styles.title} .char`,
        {
          y: 100,
        },
        {
          y: 0,
          stagger: 0.1,
          delay: 0.2,
          duration: 0.3,
        }
      );

      /* const textSplitted = new SplitText("#title", {
        type: "chars",
      });
      let chars = textSplitted.chars;
      gsap.fromTo(
        chars,
        {
          y: 100,
          visibility: "visible", // This is necessary to prevent flickering
        },
        {
          y: 0,
          stagger: 0.1,
          delay: 0.2,
          duration: 0.3,
        }
      ); */
    },
    { scope: container }
  );

  return (
    <section className={styles.container} ref={container}>
      <h1 className={styles.title}>Hello!</h1>
    </section>
  );
}

export default SplitText;
