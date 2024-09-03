"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap-trial/SplitText";
import "./page.css";

gsap.registerPlugin(SplitText);

function Page() {
  const container = useRef(null);

  useGSAP(
    () => {
      const textSplitted = new SplitText("#title", {
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
      );
    },
    { scope: container }
  );

  return (
    <section ref={container}>
      <h1 id="title">Hello!</h1>
    </section>
  );
}

export default Page;
