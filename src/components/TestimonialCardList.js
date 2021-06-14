import React from "react";

import Louis from "../assets/images/loius.png";
import Recka from "../assets/images/recka.svg";

import Testimonial from "./cards/Testimonial";
import HorizontalSlider from "./HorizontalSlider";

const testimonials = [
    {
      img: Louis,
      name: "Louis Saville",
      job_title: "CEO at Google inc",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      img: Recka,
      name: "Rekha Varadwaz",
      job_title: "CEO at Google inc",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        img: Louis,
        name: "Louis Saville",
        job_title: "CEO at Google inc",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        img: Recka,
        name: "Rekha Varadwaz",
        job_title: "CEO at Google inc",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        img: Louis,
        name: "Louis Saville",
        job_title: "CEO at Google inc",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        img: Recka,
        name: "Rekha Varadwaz",
        job_title: "CEO at Google inc",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
  ];

export default function TestimonialCardList() {
  const Items = () =>
  testimonials.map((item, i) => {
      return <Testimonial name={item.name} img={item.img} text={item.text} job_title={item.job_title} key={i}/>;
    });
  return <HorizontalSlider data={Items()} id="2" width="430"/>;
}
