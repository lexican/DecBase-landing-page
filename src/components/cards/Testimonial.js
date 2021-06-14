import React from "react";
import "./testimonial.scss";

export default function Testimonial(props) {
  return (
    <div className="testimonial">
      <div className="card">
        <img src={props.img} alt="Loius"></img>
        <div>
          <div>
            <p className="card-title">
              {props.name} <span> /{props.job_title}</span>
            </p>
          </div>
          <p className="card-text">{props.text}</p>
        </div>
      </div>
    </div>
  );
}
