import React, { useState } from "react";
import "../css/Dropdown.css";

function Dropdown() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <ul
        className={dropdown ? "services-submenu clicked" : "services-submenu"}
        onClick={() => setDropdown(!dropdown)}>
    
      </ul>
    </>
  );
}

export default Dropdown;
