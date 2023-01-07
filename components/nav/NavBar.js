import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/AkcizeLogo.svg";
import modules from "./NavBar.module.css";
import Lottie from "lottie-web";
import Animation from "../../public/close.json";
import { create } from "@lottiefiles/lottie-interactivity";

function NavBar({ handleScroll, handleScrollSecond }) {
  const [visable, setVisable] = useState(false);

  const [animation, setAnimation] = useState(null);
  const container = useRef(null);

  function handleUsluge() {
    handleScrollSecond();
    setVisable(false);
  }

  function handleForm() {
    handleScroll();
    setVisable(false);
  }

  function handleClick() {
    if (!visable) {
      animation.setSpeed(2);
      animation.playSegments([0, 30], true);
    } else {
      animation.setDirection(-1);
      animation.playSegments([30, 0], true);
    }
    setVisable((prevState) => !prevState);
  }

  useEffect(() => {
    setAnimation(
      Lottie.loadAnimation({
        container: container.current,
        renderer: "svg",
        animationData: Animation,
        loop: false,
        autoplay: false,
      })
    );
  }, []);

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <nav
      className={
        isLoaded ? `${modules.NavBar} ${modules.loadedNav}` : modules.NavBar
      }
    >
      <Link
        className={modules.NavLogo}
        onClick={() => setVisable(false)}
        href="/"
      >
        <Image
          priority="true"
          width="60px"
          src={Logo}
          alt="Logo sajta za akcize"
        />
      </Link>
      <ul className={!visable ? modules.disabled : modules.animated}>
        <li>
          <a onClick={handleUsluge}>Usluge</a>
        </li>
        <li>
          <a onClick={handleForm}>Kontakt</a>
        </li>
        <li>
          <a href="tel:0641225551">064 122 555 1</a>
        </li>
      </ul>
      <button onClick={handleClick}>
        <div ref={container} className={modules.closingMenu}></div>
      </button>
    </nav>
  );
}

export default NavBar;
