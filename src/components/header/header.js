import React from 'react';
import {Link} from 'react-router-dom';
import './header.css';

const Header = ({onAPIChange}) => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <Link className="navbar-brand" to="/">Star Wars Catalogue</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01"
                    aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/people/">People</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/planets/">Planets</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/starships/">Starships</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/secret">Secret</Link>
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
