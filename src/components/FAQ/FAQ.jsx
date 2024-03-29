import React from "react";
import Title from "../ui/Title";
import TitleQuestions from "./TitleQuestions";
import { faComments } from "@fortawesome/free-solid-svg-icons";

const FAQ = () => {
  return (
    <section
      id="FAQ"
      className="2xl:mx-80 lg:text-left text-emerald-10 mx-10 py-20 h-auto w-auto flex justify-center items-center"
    >
      <ul className="lg:text-xl font-light">
        <Title name={"FAQ"} iconUI={faComments} />
        <li className="my-10">
          <TitleQuestions
            question={"¿Puedo personalizar los colores y estilos de los mapas?"}
          />
          <p>
            Sí, podemos ajustar fácilmente colores ya que contamos con
            diferentes paletas de colores disponibles según las preferencias que
            tengas para que coincidan con el entorno donde estará expuesto.
          </p>
        </li>

        <li className="my-10">
          <TitleQuestions
            question={
              "¿Puedo solicitar un mapa vectorial personalizado de una ciudad específica?"
            }
          />
          <p>
            Sí, ofrecemos servicios de ilustración personalizados. Por favor,
            ponte en contacto con nuestro equipo via WhatsApp con tus
            requisitos, y estaremos encantados de discutir la creación de un
            mapa vectorial personalizado adaptado a tus necesidades.
          </p>
        </li>
        <li className="my-10">
          <TitleQuestions
            question={
              "¿Existen limitaciones en el tamaño/resolución de los mapas?"
            }
          />
          <p>
            Nuestros mapas vectoriales son escalables, lo que significa que
            puedes cambiar su tamaño sin perder calidad. Podemos imprimirlo en 4
            distintos tamaños:{" "}
            <strong> 30 x 40 cm / 45 x 60 cm / 60 x 80 cm</strong>
          </p>
        </li>
        <li className="my-10">
          <TitleQuestions
            question={"¿Son precisos y están actualizados los mapas?"}
          />
          <p>
            Nos esforzamos por garantizar la precisión de nuestros mapas
            vectoriales. Sin embargo, ten en cuenta que los mapas pueden no
            reflejar cambios en tiempo real. Recomendamos verificar la
            información con fuentes oficiales para aplicaciones críticas.
          </p>
        </li>
        <li className="my-10">
          <TitleQuestions
            question={"¿Ofrecen descuentos para compras al por mayor?"}
          />
          <p>
            Sí, ofrecemos descuentos para compras al por mayor. Por favor, ponte
            en contacto por WhatsApp con los detalles de tus requisitos y te
            proporcionaremos un presupuesto adaptado a tus necesidades.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default FAQ;
