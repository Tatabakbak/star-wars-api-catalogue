import React from 'react';
import {withData, withSwapiService} from '../hoc-helpers';
import ItemList from "../item-list";

//HOC
const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        )
    }
};

const renderName = ({name}) => {
    return <span>{name}</span>
};

const renderStarship = ({name, model}) => {
    return <span>{`${name} (${model})`}</span>
};

const mapPersonMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople
    }
};

const mapPlanetMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets
    }
};

const mapStarshipMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarships
    }
};


const PersonList = withSwapiService(withData(
    withChildFunction(ItemList, renderName)), mapPersonMethodsToProps);

const PlanetList = withSwapiService(withData(
    withChildFunction(ItemList, renderName)), mapPlanetMethodsToProps);

const StarshipList = withSwapiService(withData(
    withChildFunction(ItemList, renderStarship)), mapStarshipMethodsToProps);

export {PersonList, PlanetList, StarshipList};