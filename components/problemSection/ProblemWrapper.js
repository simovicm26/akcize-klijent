import React from "react";
import modules from "./ProblemWrapper.module.css";
import Image from "next/image";
import Stressed from "../../public/stressed.jpg";
import Star from "../../public/Vector1.svg";

function ProblemWrapper() {
  return (
    <div className={modules.ProblemWrapper}>
      <div className={modules.ImageContainer}>
        <Image
          placeholder="blur"
          width={1304}
          height={1168}
          alt="Zena se nervira iznad hrpe dokumenata"
          src={Stressed}
        ></Image>
      </div>
      <div className={modules.ContentContainer}>
        <h2>Da li se susrecete sa nekim od sledecih problema?</h2>
        <div className={modules.TextHolder}>
          <p>
            <Image
              alt=""
              aria-hidden="true"
              width={30}
              height={30}
              src={Star}
            ></Image>
            Nemate dovoljno zaposlenih kojima biste poverili posao povraćaja
            akcize
          </p>
          <p>
            <Image
              alt=""
              aria-hidden="true"
              width={30}
              height={30}
              src={Star}
            ></Image>
            Ne uspevate da spremite dokumentaciju u skladu sa zahtevima poreske
            uprave
          </p>
          <p>
            <Image
              alt=""
              aria-hidden="true"
              width={30}
              height={30}
              src={Star}
            ></Image>
            Vasi zaposleni nisu dovoljno upoznati sa postupkom refakcije akcize
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProblemWrapper;
