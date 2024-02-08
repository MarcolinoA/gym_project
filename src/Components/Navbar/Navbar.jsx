import React, { useEffect, useState } from "react";
import "./NavbarStyle.css";
import { ReactComponent as Menu } from "../Icons/Menu.svg";
import { ReactComponent as Logo } from "../Icons/Logo.svg";
import { ReactComponent as LogoExt } from "../Icons/Logo_esteso.svg";

const Navbar = () => {
  //useState, funzione e useEffect per tenere traccia della larghezza della schermata
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [sceenHeight, setScreenHeight] = useState(window.innerHeight);
  const [icon, setIcon] = useState(false);

  const updateScreenSize = () => {
    setScreenWidth(window.innerWidth);
    setScreenHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", updateScreenSize);
    if (screenWidth < 415) {
      setIcon(true);
    }
    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  return (
    <div className="container">
      <div className="logo">
        <LogoExt />
      </div>

      <nav className="navigate">
        <div className={`menu-icon-svg ${icon ? "show-icon" : ""}`}>
          <Menu />
        </div>
        <div className="container-btns">
          <div className="home-page">Home</div>
          <div className="chi-siamo">Personale</div>
          <div className="attivita">Attivita</div>
          <div className="info">Info</div>
          <div className="contattaci">Contattaci</div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
