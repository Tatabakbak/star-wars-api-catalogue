import React from 'react';
import './spinner.css';

const Spinner = () => {
    return(
        <div className="d-flex justify-content-center w-100">
            <div className="lds-flickr">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Spinner;

