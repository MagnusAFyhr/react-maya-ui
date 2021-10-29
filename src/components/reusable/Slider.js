import { StaticRouter } from "react-router";
import ReactSlider from "react-slider";

import "./Slider.css"

const Slider = (props) => {

    return (
        <div className="slider-area">
            <ReactSlider
                onChange={props.onChange}
                onAfterChange={props.onAfterChange}
                value={props.value}

                max={props.maxValue}
                min={0}
                step={1}
                className="horizontal-slider"
                thumbClassName="example-thumb"
                trackClassName="example-track"
                renderThumb={(props, state) => <div {...props}></div>}
            />
        </div>
    );
};

export default Slider;