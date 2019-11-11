import React, {Component} from 'react';
import './app.css';
import Header from "../header";
import RandomPlanet from "../random-planet";
import SwapiService from "../../services/swapi";
import ErrorBoundry from "../error-boundry/error-boundry";
import {SwapiServiceProvider} from "../swapi-service-context";
import DummySwapiService from "../../services/dummy-swapi";
import {BrowserRouter as Router, Route} from 'react-router-dom';

import {PeoplePage, PlanetsPage, StarshipsPage} from "../pages";
import {StarshipDetails} from "../sw-components";

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
                    <Router>
                        <div>
                            <Header onAPIChange={this.onAPIChange}/>
                            <div className="page-wrapper">
                                {randPlanet}
                                <Route path="/" render={() => <h2>Welcome to StarWars Catalogue</h2>} exact/>
                                <Route path="/people" component={PeoplePage}/>
                                <Route path="/planets" component={PlanetsPage}/>
                                <Route path="/starships" component={StarshipsPage} exact/>
                                <Route path="/starships/:id"
                                       render={({match}) => {
                                           const {id} = match.params;
                                           return <StarshipDetails itemId={id}/>
                                       }} exact/>

                                {/*<button*/}
                                {/*    className='btn btn-success toggle-planet-btn'*/}
                                {/*    onClick={this.toggleRandomPlanet}>*/}
                                {/*    Toggle random planet*/}
                                {/*</button>*/}
                                {/*<ErrorButton/>*/}

                            </div>
                        </div>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    }
};
