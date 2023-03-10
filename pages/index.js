import { useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import NavBar from "../components/nav/NavBar";
import HeroSection from "../components/heroSection/HeroSection";
import ProblemSection from "../components/problemSection/ProblemSection";
import MidTextSection from "../components/UI/MidTextSection";
import MyNameSection from "../components/myNameSection/MyNameSection";
import ZastojaSection from "../components/zastojaSection/ZastojaSection";
import MojeUslugeSection from "../components/mojeUslugeSection/MojeUslugeSection";
import FormaSection from "../components/formaSection/FormaSection";
import Logo from "../public/AkcizeLogo.svg";
import Link from "next/link";

export default function Home() {
  const formRef = useRef(null);
  const uslugeRef = useRef(null);

  const executeScroll = () => {
    formRef.current.scrollIntoView();
  };
  const executeScrollSecond = () => {
    uslugeRef.current.scrollIntoView();
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar
        handleScroll={executeScroll}
        handleScrollSecond={executeScrollSecond}
      ></NavBar>
      <main className={styles.main}>
        <HeroSection
          formRef={formRef}
          handleScroll={executeScroll}
        ></HeroSection>
        <ProblemSection></ProblemSection>
        <MidTextSection>
          <h2>Mogu da vam pomognem</h2>
          <p>
            da brzo i kvalitetno obezbedite dodatna sredstva od refakcije
            akcize, ne narusavajuci vase tekuce poslovanje
          </p>
        </MidTextSection>
        <MyNameSection></MyNameSection>
        <ZastojaSection></ZastojaSection>
        <MidTextSection>
          <h2>I naravno garantujem uspeh refakcije akcize</h2>
          <p>
            Ukoliko prihvatim da radim refakciju, uslugu naplacujem tek nakon
            ??to je refakcija odobrena od strane poreske uprave po zakljucenom
            ugovoru o poslovnoj saradnji
          </p>
        </MidTextSection>
        <MojeUslugeSection ref={uslugeRef}></MojeUslugeSection>
        <FormaSection ref={formRef}></FormaSection>
      </main>
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <Link href="/">
            <Image
              priority="true"
              width="60px"
              src={Logo}
              alt="Logo sajta za akcize"
            />
          </Link>
          <ul>
            <li>
              <Link href="/">Naslovna</Link>
            </li>
            <li>
              <a onClick={executeScrollSecond}>Usluge</a>
            </li>
            <li>
              <Link href="tel:0641225551">064 122 555 1</Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
