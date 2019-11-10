import React, {Component} from 'react';
import Row from "../row";
import {PlanetDetails, PlanetList} from "../sw-components";

export default class PlanetsPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedItemId: null
        }
    }

    onItemSelected = (itemId) => {
        this.setState({selectedItemId: itemId})
    };

    render() {
        const {selectedItemId} = this.state;
        return (
            <Row
                left={<PlanetList spinnerColor="yellow" onItemSelected={this.onItemSelected}/>}
                right={<PlanetDetails itemId={selectedItemId}/>}
            />
        );
    }
}