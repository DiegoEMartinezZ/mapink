import React from "react";

const BtnNavBar = ({ name, section }) => {
  return (
    <a href={`#${section}`}>
      <li className="2xl:text-base p-1 my-2 rounded mx-2 text-sm font-base cursor-pointer hover:text-black-50 hover:font-semibold">
        {name}
      </li>
    </a>
  );
};

export default BtnNavBar;
