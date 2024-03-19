import React from "react";

const BtnNavBar = ({ name, section }) => {
  return (
    <a href={`#${section}`}>
      <li className="2xl:text-base p-1 rounded mx-2 text-sm font-semibold cursor-pointer hover:text-black-900">
        {name}
      </li>
    </a>
  );
};

export default BtnNavBar;
