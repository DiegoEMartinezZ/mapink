import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const RRSS = ({ icon, url }) => {
  return (
    <li className="2xl:mx-10 2xl:text-lg 2xl:mt-10 mx-5 my-3 cursor-pointer hover:text-black-900">
      <a href={url}>
        <FontAwesomeIcon icon={icon} />
      </a>
    </li>
  );
};

export default RRSS;
