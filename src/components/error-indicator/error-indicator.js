import React from 'react';
import './error-indicator.css';
import icon from './death-star.png';
const ErrorIndicator = () => {
    return(
        <div className="error-indicator d-flex flex-column align-items-center w-100">
            <img src={icon} alt="death star"/>
            <span className="boom">OOPS!</span>
            <span>Something went terribly wrong</span>
            <span>(but we already sent droids to fix it)</span>
        </div>
    );
};

export default ErrorIndicator;