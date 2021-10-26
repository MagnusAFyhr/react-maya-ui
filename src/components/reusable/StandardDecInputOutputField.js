import React, {Component} from 'react';

import * as IoIcons from 'react-icons/io'
import * as WiIcons from 'react-icons/wi'
import * as TiIcons from 'react-icons/ti'


import "./StandardButton.css"

export default function StandardDecInputOutputField(props) {

    const [value, setValue] = useState(0);

    const handleChangeValue = (e) => {
        const newValue = e.target.value.replace(/\D/g, "");
        setValue(newValue);
    };


    return (
        <input className="reusable-input" value={value} onChange={handleChangeValue}/>
    );
}