import React from "react";

import Architecture from "../assets/images/architecture1.png";
import InteriorDesign from "../assets/images/interiordesign.svg";
import Planning from "../assets/images/planning.svg";
import ServiceCard from "./cards/ServiceCard";
import HorizontalSlider from "./HorizontalSlider";

const services = [
  {
    title: "Interior Design",
    text: "Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore",
    img: InteriorDesign,
  },
  {
    title: "Architecture",
    text: "Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore",
    img: Architecture,
  },
  {
    title: "Planning",
    text: "Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore",
    img: Planning,
  },
  {
    title: "Planning",
    text: "Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore",
    img: Planning,
  },
  {
    title: "Planning",
    text: "Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore",
    img: Planning,
  },
  {
    title: "Planning",
    text: "Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore",
    img: Planning,
  },
];

export default function ServiceCardList() {
  const Items = () =>
    services.map((item, i) => {
      return <ServiceCard title={item.title} img={item.img} text={item.text} key={i}/>;
    });
  return <HorizontalSlider data={Items()} item="Item" id="1" width="330"/>;
}
