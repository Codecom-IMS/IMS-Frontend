import React from "react";
import "./headerChip.css";
function HeaderChip({ children }) {
  return (
    <div>
      <div className="chip">
        <h1>{children}</h1>
      </div>
    </div>
  );
}

export default HeaderChip;
