import React, { useEffect, useState } from "react";
import modules from "./HeroSection.module.css";
import Image from "next/image";
import Main from "./../../public/imageMain.jpg";
import Pump from "./../../public/imagePump.jpg";
import Truck from "./../../public/imageTruck.jpg";
import Button from "../UI/Button";

function HeroSection(props) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className={modules.HeroSection}>
      <div className={modules.ContentContainer}>
        <h1
          className={
            isLoaded
              ? `${modules.animationH1} ${modules.loadedH1}`
              : modules.animationH1
          }
        >
          <span>100%</span>
          <br />
          Zagarantovan povracaj akcize za zadnjih 5 godina
        </h1>
        <Button
          className={
            isLoaded
              ? `${modules.animationButton} ${modules.loadedButton}`
              : modules.animationButton
          }
          onClick={() => props.handleScroll(props.formRef)}
          text="Kontaktirajte me"
        ></Button>
      </div>
      <div className={modules.ImagesContainer}>
        <div className={modules.MainImage}>
          <Image
            placeholder="blur"
            width={1675}
            height={1335}
            alt="Racunovodja racuna poreze i pise na papiru"
            src={Main}
            priority="true"
          ></Image>
        </div>
        <div
          className={
            isLoaded
              ? `${modules.TruckImage} ${modules.loaded}`
              : modules.TruckImage
          }
        >
          <Image
            placeholder="blur"
            width={953}
            height={808}
            alt="Kamion koji se vozi po putu po suncanom danu"
            src={Truck}
            priority="true"
          ></Image>
        </div>
        <div
          className={
            isLoaded
              ? `${modules.PumpImage} ${modules.loaded}`
              : modules.PumpImage
          }
        >
          <Image
            placeholder="blur"
            width={953}
            height={808}
            alt="Kamion koji se vozi po putu po suncanom danu"
            src={Pump}
            priority="true"
          ></Image>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
