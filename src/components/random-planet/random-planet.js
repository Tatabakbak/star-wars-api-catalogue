import React, {Component} from 'react';
import './random-planet.css';
import SwapiService from "../../services/swapi";
import Spinner from "../spinner/spinner";
import PlanetView from "./planetView";
import ErrorIndicator from "../error-indicator";

export default class RandomPlanet extends Component {

    swapiService = new SwapiService();

    constructor(props) {
        super(props);
        this.state = {
            planet: {},
            loading: true,
            error: false
        };
        this.updatePlanet();
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false
        });
    };

    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    };

    updatePlanet() {
        const id = Math.floor(Math.random() * 17) + 2;
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError);
    }

    render() {
        const {planet, loading, error} = this.state;
        const content =
            error ?
                <ErrorIndicator/> :
                (loading ?
                    <Spinner/> :
                    <PlanetView planet={planet}/>);
        return (
            <div className="random-planet jumbotron rounded">
                {content}
            </div>
        );
    }
}

