import React from "react";
import { FaPencilAlt } from "react-icons/fa";

function Header() {
  return (
    <header>
      <FaPencilAlt style={{fontSize:"2rem" , color:"white"}}/>
      <h1>Note it</h1>
    </header>
  );
}

export default Header;
