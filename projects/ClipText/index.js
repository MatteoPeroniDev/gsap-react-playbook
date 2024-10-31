"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "./index.module.css";

function ClipText() {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.to(`.${styles.title}`, {
        y: 0,
        duration: 0.1,
        delay: 0.2,
      });
    },
    { scope: container }
  );

  return (
    <section className={styles.container} ref={container}>
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>Hello!</h1>
      </div>
    </section>
  );
}

export default ClipText;
