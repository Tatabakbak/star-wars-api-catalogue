import React from "react";
import ErrorBoundry from "../error-boundry/error-boundry";
import ItemDetails, {Record} from "../item-details";
import {withSwapiService} from "../hoc-helpers";

const PersonDetails = (props) => {
    return (
        <ErrorBoundry>
            <ItemDetails {...props}>
                <Record field="name" label="Name"/>
                <Record field="gender" label="Gender"/>
                <Record field="birthYear" label="Birth year"/>
                <Record field="eyeColor" label="Eye color"/>
            </ItemDetails>
        </ErrorBoundry>
    );
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPerson,
        getImageUrl: swapiService.getPersonImage
    }
};

export default withSwapiService(PersonDetails, mapMethodsToProps);