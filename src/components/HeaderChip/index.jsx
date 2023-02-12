import React from "react";
import "./headerChip.css";
function HeaderChip({ HeaderText }) {
  return (
    <div>
      <div className="chip">
        <h1>{HeaderText}</h1>
      </div>
    </div>
  );
}

export default HeaderChip;
