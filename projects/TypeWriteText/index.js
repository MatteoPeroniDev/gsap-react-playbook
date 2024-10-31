"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import styles from "./index.module.css";

gsap.registerPlugin(TextPlugin);

function TypeWriteText() {
  const container = useRef(null);

  useGSAP(
    () => {
      // This is necessary to prevent flickering
      gsap.set(`.${styles.text}`, { visibility: "visible" });

      gsap.to(`.${styles.text}`, {
        text: { value: "this is wonderful<br/>🤩" },
        duration: 2,
        ease: "none",
      });
    },
    { scope: container }
  );

  return (
    <section className={styles.container} ref={container}>
      <p className={styles.text}></p>
    </section>
  );
}

export default TypeWriteText;
