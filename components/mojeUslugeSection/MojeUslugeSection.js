/* eslint-disable react/display-name */
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import styles from "./MojeUslugeSection.module.css";
import Image from "next/image";
import Portrait from "../../public/mama2.jpg";

const mojeUslugeSection = React.forwardRef((props, ref) => {
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
    <div ref={ref} className={styles.mojeUslugeSection}>
      <div className={styles.mojeUslugeContent}>
        <h2>Sta sve obuhvataju moje usluge?</h2>
        <h3>Dokumentacija</h3>
        <p>
          Pregledanje, priprema i korekcija dokumentacije koja je potrebna za
          refakciju prema zahtevima poreske uprave
        </p>
        <h3>Zastupanje firme pred poreskom upravom</h3>
        <p>
          Zbog mog višegodišnjeg iskustva rada sa Poreskim upravama iz
          razlicitih gradova Srbije znam kako da ispunim sve zahteve poreske
          uprave i učinim proces refakcije sto bezbolnijim
        </p>
        <h3>Savetodavne usluge</h3>
        <p>
          Možete me angažovati kao konsultanta - podršku knjigovodstvenom
          sektoru u slučaju drugih vrsta kontrola
        </p>
      </div>
      <div ref={container} className={styles.mojeUslugeImage}>
        <Image
          placeholder="blur"
          width={1962}
          height={2432}
          src={Portrait}
          alt="Racunovodja koje radi na nekim dokumentima"
        ></Image>
      </div>
    </div>
  );
});

export default mojeUslugeSection;
