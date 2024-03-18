import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Title = ({ name, iconUI }) => {
  return (
    <h1 className="lg:text-3xl py-2 my-2 text-emerald-400 text-xl font-bold">
      <FontAwesomeIcon icon={iconUI} className="mr-2" />
      {name}
    </h1>
  );
};

export default Title;
