import "./LabeledSlider.css"

const LabledSlider = (title, maxValue) => {
  return (
    <>
        <div className="labled-slider-title-area">
            {title}
        </div>
        <div className="labled-slider-slider-area">
            <Slider />
        </div>
        <div className="labled-slider-text-field-area">

        </div>
    </>
  );
};

export default LabledSlider;