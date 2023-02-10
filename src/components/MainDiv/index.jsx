import React from "react";
import "./mainDiv.css";
function MainBox({ children }) {
  return (
    <div className="container">
      <div className="components">{children}</div>
    </div>
  );
}

export default MainBox;
