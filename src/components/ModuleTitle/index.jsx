import React from "react";
import "./moduleTitle.css";
const HeaderChip = ({ headerText }) => {
  return (
    <div>
      <div className="chip">
        <h1>{headerText}</h1>
      </div>
    </div>
  );
};

export default HeaderChip;
