import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const TitleQuestions = ({ question }) => {
  return (
    <h3 className="text-emerald-400 font-semibold my-5">
      <FontAwesomeIcon icon={faCircleQuestion} className="mr-1" />
      {question}
    </h3>
  );
};

export default TitleQuestions;
