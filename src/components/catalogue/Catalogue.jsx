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
      id="catalogo"
      className="relative py-20 2xl:mx-80 lg:text-left mx-10 flex justify-center items-center"
    >
      <div>
        <Title name={"Catálogo"} iconUI={faLocationArrow} />
        <p className="lg:text-xl font-light">
          ¡Gracias por tu interés en adquirir nuestros mapas vectoriales!
          Descarga la
          <strong className="font-medium"> guía de proceso de compra </strong>
          para que puedas obtener los mapas que necesitas de manera rápida y
          sencilla. ¡Recuerda! Actualmente disponemos de 2 colecciones: Clásicos
          y Color
        </p>
        <button className="bg-black-950 text-black-50 p-2 rounded font-semibold my-5 cursor-pointer shadow-lg hover:bg-black-100 hover:text-black-950">
          <FontAwesomeIcon icon={faFileArrowDown} className="mx-2 " />
          Guía proceso de compra
        </button>
        <br />

        <Slider name={"Clásicos"} />
        <Slider name={"Color"} />
      </div>
    </section>
  );
};

export default Catalogue;
