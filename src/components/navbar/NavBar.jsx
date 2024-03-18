import React from "react";
import BtnNavBar from "../ui/BtnNavBar";

const NavBar = () => {
  return (
    <nav>
      <ul className="scroll-smooth z-10 right-0 left-0 flex flex-nowrap mx-1 my-2 p-2 justify-around absolute ">
        <BtnNavBar name={"Map Ink"} />
        <BtnNavBar name={"Quiénes Somos"} section={"QuienesSomos"} />
        <BtnNavBar name={"Catálogo"} section={"Catalogo"} />
        <BtnNavBar name={"FAQ"} section={"FAQ"} />
      </ul>
    </nav>
  );
};

export default NavBar;
