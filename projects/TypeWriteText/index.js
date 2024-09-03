"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import "./index.css";

gsap.registerPlugin(TextPlugin);

function TypeWriteText() {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.to("#text", {
        visibility: "visible",
        text: { value: "this is wonderful<br/>🤩" },
        duration: 2,
        ease: "none",
      });
    },
    { scope: container }
  );

  return (
    <section ref={container}>
      <p id="text"></p>
    </section>
  );
}

export default TypeWriteText;
