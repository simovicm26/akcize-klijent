import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import modules from "./MidTextSection.module.css";

function MidTextSection({ children }) {
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
        duration: 0.5,
        ease: "power1.out",
        scrollTrigger: { trigger: el },
      }
    );
  }, []);

  return (
    <div ref={container} className={modules.MidTextSection}>
      {children}
    </div>
  );
}

export default MidTextSection;
