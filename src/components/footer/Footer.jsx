import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import RRSS from "../ui/RRSS";

const Footer = () => {
  return (
    <footer className="text-center">
      <ul className="relative bottom-0 right-0 left-0  flex flex-nowrap mx-1  text-sm justify-center items-center text-emerald-400 ">
        <RRSS icon={faInstagram} />
        <RRSS icon={faFacebook} />
        <RRSS icon={faWhatsapp} />
      </ul>
      <h5 className="text-emerald-10 text-xs italic mb-8">
        {" "}
        Map Ink | Vector Map Illustrations &copy; 2024{" "}
      </h5>
    </footer>
  );
};

export default Footer;
