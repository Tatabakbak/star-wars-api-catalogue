import React from 'react';
import SwapiService from "../../services/swapi";
import {withData} from '../hoc-helpers';
import ItemList from "../item-list";

const swapiService = new SwapiService();
const {getAllPeople, getAllPlanets, getAllStarships} = swapiService;

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

const PersonList = withData(
    withChildFunction(ItemList, renderName),
    getAllPeople);

const PlanetList = withData(
    withChildFunction(ItemList, renderName),
    getAllPlanets);

const StarshipList = withData(
    withChildFunction(ItemList, renderStarship),
    getAllStarships);

export {PersonList, PlanetList, StarshipList};