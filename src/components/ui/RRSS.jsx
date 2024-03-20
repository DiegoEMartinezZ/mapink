import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const RRSS = ({ icon, url }) => {
  return (
    <li className="2xl:mx-5 2xl:text-lg 2xl:mt-10 mx-5 my-3 cursor-pointer hover:text-black-900">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={icon} />
      </a>
    </li>
  );
};

export default RRSS;
