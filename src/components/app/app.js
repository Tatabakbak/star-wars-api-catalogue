import React, {Component} from 'react';
import './app.css';
import Header from "../header";
import RandomPlanet from "../random-planet";
import SwapiService from "../../services/swapi";
import ErrorBoundry from "../error-boundry/error-boundry";
import {SwapiServiceProvider} from "../swapi-service-context";
import DummySwapiService from "../../services/dummy-swapi";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {PeoplePage, PlanetsPage, StarshipsPage, LoginPage, SecretPage} from "../pages";
import {StarshipDetails} from "../sw-components";

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            swapiService: new SwapiService(),
            isLoggedIn: false
        };
    }

    onLogin = () => {
        this.setState({isLoggedIn: true});
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
        const {swapiService, isLoggedIn} = this.state;
        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={swapiService}>
                    <Router>
                        <div>
                            <Header onAPIChange={this.onAPIChange}/>
                            <div className="page-wrapper">
                                <RandomPlanet/>
                                <Switch>
                                    <Route path="/" render={() => <h2>Welcome to StarWars Catalogue</h2>} exact/>
                                    <Route path="/people/:id?" component={PeoplePage}/>
                                    <Route path="/planets" component={PlanetsPage}/>
                                    <Route path="/starships" component={StarshipsPage} exact/>
                                    <Route path="/starships/:id"
                                           render={({match}) => {
                                               const {id} = match.params;
                                               return <StarshipDetails itemId={id}/>
                                           }}
                                           exact/>
                                    <Route
                                        path="/login"
                                        render={() => (<LoginPage
                                            isLoggedIn={isLoggedIn}
                                            onLogin={this.onLogin}/>)}/>
                                    <Route
                                        path="/secret"
                                        render={() => (<SecretPage isLoggedIn={isLoggedIn}/>)}/>
                                    <Route render={() => <h2>Page not found</h2>}/>
                                </Switch>
                            </div>
                        </div>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    }
};
