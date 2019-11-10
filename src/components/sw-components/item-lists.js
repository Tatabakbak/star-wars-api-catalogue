import React from 'react';
import {withData, withChildFunction, withSwapiService, compose} from '../hoc-helpers';
import ItemList from "../item-list";

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

const PersonList =
    compose(
        withSwapiService(mapPersonMethodsToProps),
        withData,
        withChildFunction(renderName)
    )(ItemList);

const PlanetList =
    compose(
        withSwapiService(mapPlanetMethodsToProps),
        withData,
        withChildFunction(renderName)
    )(ItemList);

const StarshipList =
    compose(
        withSwapiService(mapStarshipMethodsToProps),
        withData,
        withChildFunction(renderStarship)
    )(ItemList);

export {PersonList, PlanetList, StarshipList};