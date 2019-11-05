import React, {Component} from 'react';
import './app.css';
import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorIndicator from "../error-indicator";
import ErrorButton from "../error-button";
import PeoplePage from "../people-page";

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showRandomPlanet: true,
            hasError: false
        };
    }

    componentDidCatch() {
        this.setState({hasError: true});
    }

    toggleRandomPlanet = () => {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet
            }
        });
    };

    render() {
        const {showRandomPlanet, hasError} = this.state;

        if (hasError)
            return (
                <div className='mt-5'>
                    <ErrorIndicator/>
                </div>
            );

        const randPlanet = showRandomPlanet ? <RandomPlanet/> : null;

        return (
            <div>
                <Header/>
                <div className="page-wrapper">
                    {randPlanet}
                    <button
                        className='btn btn-success toggle-planet-btn'
                        onClick={this.toggleRandomPlanet}>
                        Toggle random planet
                    </button>
                    <ErrorButton/>
                    <PeoplePage/>
                    <PeoplePage/>
                    <PeoplePage/>
                </div>
            </div>
        );
    }
};
