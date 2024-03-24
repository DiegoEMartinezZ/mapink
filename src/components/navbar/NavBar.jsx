import React from "react";
import BtnNavBar from "../ui/BtnNavBar";

const NavBar = () => {
  return (
    <nav>
      <ul className="scroll-smooth bg-black-950 z-20 text-black-500 fixed top-0 right-0 left-0 flex flex-nowrap items-center  justify-around ">
        <a href="/">
          <img src="/favicon-32x32.png" alt="Home" className="opacity-50 h-7" />
        </a>
        <BtnNavBar name={"Home"} section={"QuienesSomos"} />
        <BtnNavBar name={"Catálogo"} section={"Catalogo"} />
        <BtnNavBar name={"FAQ"} section={"FAQ"} />
      </ul>
    </nav>
  );
};

export default NavBar;
