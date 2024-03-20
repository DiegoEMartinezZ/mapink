import React from "react";
import BtnNavBar from "../ui/BtnNavBar";

const NavBar = () => {
  return (
    <nav>
      <ul className="scroll-smooth z-10 right-0 left-0 flex flex-nowrap items-center mx-1 my-2 p-2 justify-around absolute ">
        <a href="/">
          <img
            src="/logo.png"
            alt="logo_mapink"
            className="w-20 h-auto bg-opacity-0 2xl:w-1/2 "
          />
        </a>
        <BtnNavBar name={"Quiénes Somos"} section={"QuienesSomos"} />
        <BtnNavBar name={"Catálogo"} section={"Catalogo"} />
        <BtnNavBar name={"FAQ"} section={"FAQ"} />
      </ul>
    </nav>
  );
};

export default NavBar;
