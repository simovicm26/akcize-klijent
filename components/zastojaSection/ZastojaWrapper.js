import React, { useEffect, useState, useRef } from "react";
import Lottie from "lottie-web";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import styles from "./zastojaWrapper.module.css";
import TextBox from "../UI/TextBox";

function ZastojaWrapper(props) {
  gsap.registerPlugin(ScrollTrigger);
  const container = useRef(null);
  const el = container.current;

  useEffect(() => {
    const animation = Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      animationData: props.lottie,
      loop: false,
      autoplay: false,
    });

    ScrollTrigger.create({
      trigger: container.current,
      stagger: 0.5,
      onEnter: () => {
        animation.play();
      },
    });
  }, [props.lottie]);

  return (
    <div
      className={`${styles.ZastoJaWrapper} ${props.reverse && styles.reverse}`}
    >
      <TextBox title={props.title} text={props.text}></TextBox>
      <div className={styles.lottie} ref={container}></div>
    </div>
  );
}

export default ZastojaWrapper;
