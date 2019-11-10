import React from 'react';
import './header.css';

const Header = ({onAPIChange}) => {
    return(

        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="./index.js">Star Wars Catalogue</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01"
                    aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="./index.js">People</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="./index.js">Planets</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="./index.js">Starships</a>
                    </li>
                </ul>
                <button
                    className="btn btn-secondary btn-sm"
                    onClick={onAPIChange}>
                    Change API
                </button>
            </div>
        </nav>
    );
};

export default Header;
