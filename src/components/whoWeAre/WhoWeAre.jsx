import React from "react";
import Title from "../ui/Title";
import { faLocation } from "@fortawesome/free-solid-svg-icons";

const WhoWeAre = () => {
  return (
    <section
      id="QuienesSomos"
      className="py-20 2xl:mx-80 lg:text-left text-emerald-10 mx-10 h-screen w-auto flex justify-center items-center"
    >
      <div>
        <Title name={"Quienes Somos"} iconUI={faLocation} />
        <p className="lg:text-xl font-light">
          Somos un emprendimiento especializado en la creación de retablos de
          mapas de ciudades. Nos dedicamos a transformar los mapas urbanos en
          elegantes obras de arte que capturan la esencia y la belleza de las
          ciudades más icónicas del mundo.
        </p>
      </div>
    </section>
  );
};

export default WhoWeAre;
