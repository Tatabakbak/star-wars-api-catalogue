import SwapiService from "../../services/swapi";
import ItemDetails, {Record} from "../item-details";

import React from "react";
import ErrorBoundry from "../error-boundry/error-boundry";

const swapiService = new SwapiService();
const {
    getPerson,
    getPlanet,
    getStarship,
    getPersonImage,
    getPlanetImage,
    getStarshipImage
} = swapiService;

const PersonDetails = ({id}) => {
    return (
        <ErrorBoundry>
            <ItemDetails
                itemId={id}
                getData={getPerson}
                getImageUrl={getPersonImage}
            >
                <Record field="name" label="Name"/>
                <Record field="gender" label="Gender"/>
                <Record field="birthYear" label="Birth year"/>
                <Record field="eyeColor" label="Eye color"/>
            </ItemDetails>
        </ErrorBoundry>
    );
};
const PlanetDetails = ({id}) => {
    return (
        <ErrorBoundry>
            <ItemDetails
                itemId={id}
                getData={getPlanet}
                getImageUrl={getPlanetImage}
            >
                <Record field="name" label="Name"/>
                <Record field="population" label="population"/>
                <Record field="climate" label="Climate"/>
                <Record field="terrain" label="Terrain"/>
                <Record field="diameter" label="Diameter"/>
            </ItemDetails>
        </ErrorBoundry>
    );
};
const StarshipDetails = ({id}) => {
    return (
        <ErrorBoundry>
            <ItemDetails
                itemId={id}
                getData={getStarship}
                getImageUrl={getStarshipImage}
            >
                <Record field="name" label="Name"/>
                <Record field="model" label="Model"/>
                <Record field="manufacturer" label="Manufacturer"/>
                <Record field="costInCredits" label="Cost"/>
                <Record field="length" label="Length"/>
                <Record field="crew" label="Crew"/>
                <Record field="cargoCapacity" label="Cargo capacity"/>
            </ItemDetails>
        </ErrorBoundry>
    );
};

export {PersonDetails, PlanetDetails, StarshipDetails};