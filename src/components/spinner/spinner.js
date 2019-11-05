import React from 'react';
import './spinner.css';

const Spinner = ({color}) => {

    const userColor = color ? color : 'green';

    const lightColors = {
        green: '#8dd5c1',
        blue: '#B4E1ED',
        yellow: '#FFDB90'
    };

    const darkColors = {
        green: '#54aa92',
        blue: '#3BB3CC',
        yellow: '#F4B52C'
    };

    const lightStyle = {
        background: lightColors[userColor]
    };

    const darkStyle = {
        background: darkColors[userColor]
    };

    return(
        <div className="d-flex justify-content-center w-100">
            <div className="lds-flickr">
                <div style={lightStyle}></div>
                <div style={darkStyle}></div>
                <div style={lightStyle}></div>
            </div>
        </div>
    );
};

export default Spinner;

//blue
//#B4E1ED light
//#4FB7CC dark
