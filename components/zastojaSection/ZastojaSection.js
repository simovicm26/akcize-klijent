import React from "react";
import styles from "./zastojaSection.module.css";
import ZastojaWrapper from "./ZastojaWrapper";
import Clock from "../../public/Clock.json";
import Docs from "../../public/Arrow.json";
import Calc from "../../public/Calc.json";
import Shield from "../../public/Shield.json";

function ZastojaSection() {
  return (
    <div className={styles.zastojaSection}>
      <h2>Zasto da radite sa mnom?</h2>
      <ZastojaWrapper
        title="Ustedite vreme i snagu"
        lottie={Clock}
        text="Ukoliko su vaši zaposleni prezauzeti drugim zadacima ili niste sigurni da mogu da vam garantuju povraćaj akcize prepustite taj zadatak meni"
      ></ZastojaWrapper>
      <ZastojaWrapper
        reverse="sdsad"
        lottie={Calc}
        title="Radim povraćaj 5 godina unazad"
        text="Refakcija akcize moze da se radi 5 godina unazad od trenutka podnosenja prvog zahteva za povraćaj akcize"
      ></ZastojaWrapper>
      <ZastojaWrapper
        lottie={Docs}
        title="Korigujem i pripremam dokumenaciju"
        text="Dostavljam listu dokumenata potrebnih za refakciju akcize, selektujem i korigujem vasu dokumentaciju i vrsim obradu podataka i izradu izvestaja u skladu sa zahtevima poreske uprave"
      ></ZastojaWrapper>
      <ZastojaWrapper
        reverse="sdsad"
        lottie={Shield}
        title="Zastupam vašu firmu pred Poreskom upravom"
        text="Zahvaljujući svom iskustvu sa Poreskim upravama širom Srbije dobro poznajem njihove zahteve  i mogu stručno da predstavim vasu firmu pred njima tako da je povraćaj akciza zagarantovan"
      ></ZastojaWrapper>
    </div>
  );
}

export default ZastojaSection;
