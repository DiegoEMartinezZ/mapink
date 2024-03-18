import React from "react";
import Title from "../ui/Title";
import {
  faFileArrowDown,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "../slider/Slider";

const Catalogue = () => {
  return (
    <section
      id="Catalogo"
      className="relative 2xl:mx-80 lg:text-left mx-10 flex justify-center items-center"
    >
      <div>
        <Title name={"Catálogo"} iconUI={faLocationArrow} />
        <p className="lg:text-xl font-light">
          ¡Gracias por tu interés en adquirir nuestros mapas vectoriales! Aquí
          te guiamos a través del proceso de compra para que puedas obtener los
          mapas que necesitas de manera rápida y sencilla.
        </p>
        <button className="bg-black-200 p-2 rounded font-semibold my-5 cursor-pointer hover:bg-black-300">
          <FontAwesomeIcon icon={faFileArrowDown} className="mx-2" />
          Guía proceso de compra
        </button>
        <br />
        <p className="lg:text-xl font-light">
          Disponemos de 3 colecciones de mapas:
        </p>
        <Slider name={"Clásico"} />
        <Slider name={"Duotono"} />
        <Slider name={"Videojuegos"} />
      </div>
    </section>
  );
};

export default Catalogue;
