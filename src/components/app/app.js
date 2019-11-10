import React, {Component} from 'react';
import './app.css';
import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorButton from "../error-button";
import SwapiService from "../../services/swapi";
import Row from "../row";
import ErrorBoundry from "../error-boundry/error-boundry";
import {SwapiServiceProvider} from "../swapi-service-context";

import {
    PersonList,
    PlanetList,
    StarshipList,
    PersonDetails,
    PlanetDetails,
    StarshipDetails
} from '../sw-components';
import DummySwapiService from "../../services/dummy-swapi";

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showRandomPlanet: true,
            swapiService: new DummySwapiService()
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
                            <button
                                className='btn btn-success toggle-planet-btn'
                                onClick={this.toggleRandomPlanet}>
                                Toggle random planet
                            </button>
                            <ErrorButton/>
                            <PersonList spinnerColor="yellow"/>
                            <PersonDetails itemId={5}/>
                            <PlanetList spinnerColor="yellow"/>
                            <PlanetDetails itemId={5}/>
                            <StarshipList spinnerColor="yellow"/>
                            <StarshipDetails itemId={9}/>
                            {/*<ItemList*/}
                            {/*    getData={this.swapiService.getAllStarships}*/}
                            {/*    onItemSelected={() => {}}>*/}

                            {/*    { ({name}) => <span>{name}</span> }*/}
                            {/*</ItemList>*/}

                            {/*<ItemList*/}
                            {/*    getData={this.swapiService.getAllPlanets}*/}
                            {/*    onItemSelected={() => {}}>*/}

                            {/*    { ({name}) => <span>{name}</span> }*/}
                            {/*</ItemList>*/}

                            {/*<div className="row">*/}
                            {/*    <div className="col-md-6">*/}
                            {/*        <ItemList*/}
                            {/*            onItemSelected={this.onPersonSelected}*/}
                            {/*            getData={this.swapiService.getAllPlanets}*/}
                            {/*            renderItem={(item) => item.name}*/}
                            {/*            spinnerColor="yellow"/>*/}
                            {/*    </div>*/}
                            {/*    <div className="col-md-6">*/}
                            {/*        <PersonDetails personId={5}/>*/}
                            {/*    </div>*/}
                            {/*</div>*/}

                            {/*<div className="row">*/}
                            {/*    <div className="col-md-6">*/}
                            {/*        <ItemList*/}
                            {/*            onItemSelected={this.onPersonSelected}*/}
                            {/*            getData={this.swapiService.getAllStarships}*/}
                            {/*            renderItem={(item) => item.name}*/}
                            {/*            spinnerColor="yellow"/>*/}
                            {/*    </div>*/}
                            {/*    <div className="col-md-6">*/}
                            {/*        <PersonDetails personId={selectedPerson}/>*/}
                            {/*    </div>*/}
                            {/*</div>*/}

                        </div>
                    </div>
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    }
};
