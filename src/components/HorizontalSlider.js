import React from "react";
import "./HorizontalSlider.scss";

export default function HorizontalSlider(props) {
  const [slideLeft, setSlideLeft] = React.useState(0);
  const [hideButtonLeft, setHideButtonLeft] = React.useState(true);
  const [hideButtonRight, setHideButtonRight] = React.useState(false);
  const [sliderWidth, setSliderWidth] = React.useState(0);

  const id = "hscroll-"+ props.id;
  React.useEffect(() => {
    // console.log("offsetWidth" , document.getElementById('hscroll').offsetWidth)
    // console.log("clientWidth" , document.getElementById('hscroll').clientWidth)
    // console.log("scrollWidth" , document.getElementById('hscroll').scrollWidth)
    setSliderWidth(
      document.getElementById(id).scrollWidth -
        document.getElementById(id).offsetWidth
    );
  }, []);

  //on arrow click
  const moveRight = () => {
    const el = document.getElementById(id);
    setSlideLeft((el.scrollLeft += props.width));
  };

  const moveLeft = () => {
    const el = document.getElementById(id);
    setSlideLeft((el.scrollLeft -= props.width));
  };

  const onHScroll = () => {
    const el = document.getElementById(id).scrollLeft;
    if (el > 0) {
      setHideButtonLeft(false);
    } else {
      setHideButtonLeft(true);
    }
    if (el < sliderWidth) {
      setHideButtonRight(false);
    } else {
      setHideButtonRight(true);
    }
  };
  return (
    <div id="horizontal-slider">
      <div className="d-flex justify-content-end">
        <div className="d-flex my-2">
          <div className="">
            <button
              onClick={moveLeft}
              disabled={hideButtonLeft}
              className="left-arrow"
              className= {!hideButtonLeft ? "left-arrow": "left-arrow hide"}
            >
              &#10094;
            </button>
          </div>
          <div className="">
            <button
              onClick={moveRight}
              disabled={hideButtonRight}
              className= {!hideButtonRight ? "right-arrow": "right-arrow hide"}
            >
              &#10095;
            </button>
          </div>
        </div>
      </div>
      <div
        className="scroll-container"
        id={"hscroll-"+props.id}
        onScroll={() => onHScroll()}
      >
        {props.data}
      </div>
    </div>
  );
}
