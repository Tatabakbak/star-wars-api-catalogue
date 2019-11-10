import React from 'react';
import {withData, withSwapiService} from '../hoc-helpers';
import ItemList from "../item-list";

//HOC
const withChildFunction = (fn) => (Wrapped) => {
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

const PersonList =
    withSwapiService(mapPersonMethodsToProps)(
        withData(
            withChildFunction(renderName)(
                ItemList)));

const PlanetList =
    withSwapiService(mapPlanetMethodsToProps)(
        withData(
            withChildFunction(renderName)(
                ItemList)));

const StarshipList =
    withSwapiService(mapStarshipMethodsToProps)(
        withData(
            withChildFunction(renderStarship)(
                ItemList)));

export {PersonList, PlanetList, StarshipList};