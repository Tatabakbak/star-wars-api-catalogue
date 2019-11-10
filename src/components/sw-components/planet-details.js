import React from "react";
import ErrorBoundry from "../error-boundry/error-boundry";
import {withSwapiService} from "../hoc-helpers";
import ItemDetails, {Record} from "../item-details";

const PlanetDetails = (props) => {
    return (
        <ErrorBoundry>
            <ItemDetails {...props}>
                <Record field="name" label="Name"/>
                <Record field="population" label="population"/>
                <Record field="climate" label="Climate"/>
                <Record field="terrain" label="Terrain"/>
                <Record field="diameter" label="Diameter"/>
            </ItemDetails>
        </ErrorBoundry>
    );
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPlanet,
        getImageUrl: swapiService.getPlanetImage
    }
};

export default withSwapiService(mapMethodsToProps)(PlanetDetails);