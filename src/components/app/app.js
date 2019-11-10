import React, {Component} from 'react';
import './app.css';
import Header from "../header";
import RandomPlanet from "../random-planet";
import SwapiService from "../../services/swapi";
import ErrorBoundry from "../error-boundry/error-boundry";
import {SwapiServiceProvider} from "../swapi-service-context";
import DummySwapiService from "../../services/dummy-swapi";

import {PeoplePage, PlanetsPage, StarshipsPage} from "../pages";

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showRandomPlanet: true,
            swapiService: new SwapiService()
        };
    }

    toggleRandomPlanet = () => {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet
            }
        });
    };

    onAPIChange = () => {
        this.setState(({swapiService}) => {
            const Service = swapiService instanceof SwapiService ?
                DummySwapiService :
                SwapiService;
            return {
                swapiService: new Service()
            }
        });
    };

    render() {
        const {showRandomPlanet, swapiService} = this.state;
        const randPlanet = showRandomPlanet ? <RandomPlanet/> : null;

        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={swapiService}>
                    <div>
                        <Header onAPIChange={this.onAPIChange}/>
                        <div className="page-wrapper">
                            {randPlanet}
                            {/*<button*/}
                            {/*    className='btn btn-success toggle-planet-btn'*/}
                            {/*    onClick={this.toggleRandomPlanet}>*/}
                            {/*    Toggle random planet*/}
                            {/*</button>*/}
                            {/*<ErrorButton/>*/}
                            <PeoplePage/>
                            <PlanetsPage/>
                            <StarshipsPage/>

                        </div>
                    </div>
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    }
};
