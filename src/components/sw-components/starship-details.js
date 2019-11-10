import React from "react";
import ErrorBoundry from "../error-boundry/error-boundry";
import {withSwapiService} from "../hoc-helpers";
import ItemDetails, {Record} from "../item-details";

const StarshipDetails = (props) => {
    return (
        <ErrorBoundry>
            <ItemDetails {...props}>
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

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getStarship,
        getImageUrl: swapiService.getStarshipImage
    }
};

export default withSwapiService(mapMethodsToProps)(StarshipDetails);