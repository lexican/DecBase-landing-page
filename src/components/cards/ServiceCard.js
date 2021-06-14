import React from "react";
import "./servicecard.scss";

export default function ServiceCard(props) {
  return (
    <div className="service-card">
      <div className="card">
        <img src={props.img} alt="Architecture" />
        <div className="ml-3">
          <p className="card-text">{props.text}</p>
        </div>
      </div>
    </div>
  );
}
