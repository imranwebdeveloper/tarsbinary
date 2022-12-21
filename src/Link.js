import React from "react";

const Link = ({ link }) => {
  return (
    <li className="list-none   ">
      <a href="/" className="p-0">
        {link}
      </a>
    </li>
  );
};

export default Link;
