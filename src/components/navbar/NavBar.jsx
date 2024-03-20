import React from "react";
import BtnNavBar from "../ui/BtnNavBar";

const NavBar = () => {
  return (
    <nav>
      <ul className="scroll-smooth bg-black-950 text-black-500 fixed top-0 right-0 left-0 z-10 flex flex-nowrap items-center  justify-around ">
        <BtnNavBar name={"Quiénes Somos"} section={"QuienesSomos"} />
        <BtnNavBar name={"Catálogo"} section={"Catalogo"} />
        <BtnNavBar name={"FAQ"} section={"FAQ"} />
      </ul>
    </nav>
  );
};

export default NavBar;
