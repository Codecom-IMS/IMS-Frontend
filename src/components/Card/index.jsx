import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

const Card = ({ image, title, path }) => {
  return (
    <Link to={path}>
      <div className="card">
        <div className="user-logo">
          <img src={image} alt="" srcSet="" />
        </div>
        <div className="user-title-div">
          <p className="title-text">{title}</p>
        </div>
      </div>
    </Link>
  );
};
export default Card;
