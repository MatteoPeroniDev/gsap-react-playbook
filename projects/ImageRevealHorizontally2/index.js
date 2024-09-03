"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./index.css";
import Image from "next/image";
import LandscapeImg from "@/assets/images/landscape.jpg";

function ImageRevealHorizontally2() {
  const container = useRef(null);
  const imageRef = useRef(null);

  useGSAP(
    () => {
      gsap.to(imageRef.current, {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        duration: 1.5,
        ease: "power2.inOut",
      });
      gsap.to(imageRef.current, {
        opacity: 1,
        duration: 3,
      });
    },
    { scope: container }
  );

  return (
    <section ref={container}>
      <Image
        ref={imageRef}
        src={LandscapeImg}
        alt="A beautiful landscape"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
    </section>
  );
}

export default ImageRevealHorizontally2;
