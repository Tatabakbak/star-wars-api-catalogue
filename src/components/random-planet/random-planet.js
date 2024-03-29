import React, {Component} from 'react';
import './random-planet.css';
import SwapiService from "../../services/swapi";
import Spinner from "../spinner/spinner";
import PlanetView from "./planet-view";
import ErrorIndicator from "../error-indicator";
import PropTypes from 'prop-types';

export default class RandomPlanet extends Component {

    static defaultProps = {
      updateInterval : 1500
    };

    static propTypes = {
      updateInterval: PropTypes.number
    };

    constructor(props) {
        super(props);
        this.state = {
            planet: {},
            loading: true,
            error: false
        };
        this.swapiService = new SwapiService();
    }

    componentDidMount() {
        this.updatePlanet();
    }

    componentWillUnmount() {
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false
        });
        this.timeout = setTimeout(this.updatePlanet, this.props.updateInterval);
    };

    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    };

    updatePlanet = () => {
        const id = Math.floor(Math.random() * 17) + 2;
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError);
    };

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

