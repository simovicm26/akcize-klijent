import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import styles from "./TextBox.module.css";

function TextBox(props) {
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
        stagger: 0.5,
        ease: "power1.out",
        scrollTrigger: {
          trigger: el,
        },
      }
    );
  }, []);
  return (
    <div ref={container} className={styles.TextBox}>
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </div>
  );
}

export default TextBox;
