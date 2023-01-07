import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import modules from "./MyNameSection.module.css";
import Image from "next/image";
import Portrait from "../../public/mamaSlika.jpg";

function MyNameSection() {
  const container = useRef(null);

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const el = container.current;
    gsap.fromTo(
      el,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.75,
        stagger: 1,
        ease: "power1.out",
        scrollTrigger: { trigger: el },
      }
    );
  }, []);

  return (
    <div className={modules.MyNameSection}>
      <div className={modules.ContentSection}>
        <h2>Zdravo, ja sam Vladanka Simović</h2>
        <p>
          Apsolutni stručnjak za saobraćajne propise i knjigovodstvo sa više od
          10 godina iskustva rada sa poreskim upravama i firmama koje vrše
          privatni i javni prevoz.
        </p>
      </div>
      <div ref={container} className={modules.ImageContainer}>
        <Image
          placeholder="blur"
          width={1160}
          height={1236}
          alt="Poslovna zena stoji sa prekrstenim rukama i gleda pravo"
          src={Portrait}
        ></Image>
      </div>
    </div>
  );
}

export default MyNameSection;
