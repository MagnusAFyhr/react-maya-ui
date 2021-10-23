import ReactSlider from "react-slider";

import "./Slider.css"

const Slider = (maxValue) => {
    return (
        <ReactSlider
            className="horizontal-slider"
            thumbClassName="example-thumb"
            trackClassName="example-track"
            renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        />
    );
};

export default Slider;