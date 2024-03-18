import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const RRSS = ({ icon }) => {
  return (
    <li className="2xl:mx-10 2xl:text-lg 2xl:mt-10 mx-5 my-3 cursor-pointer hover:text-black-900">
      <FontAwesomeIcon icon={icon} />
    </li>
  );
};

export default RRSS;
