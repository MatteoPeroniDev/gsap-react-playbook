"use client";
import React, { useRef } from 'react'
import './page.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function Page() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.to('.title', {
      y: 0,
      duration: .1,
      delay: .2,
    });
  }, { scope: container });

  return (
    <section ref={container}>
      <div className="title-container">
        <h1 className="title">
          Hello!
        </h1>
      </div>
    </section>
  )
}

export default Page