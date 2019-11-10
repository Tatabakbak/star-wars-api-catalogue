import React, {Component} from 'react';
import Row from "../row";
import {StarshipDetails, StarshipList} from "../sw-components";

export default class StarshipsPage extends Component {

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
                left={<StarshipList spinnerColor="yellow" onItemSelected={this.onItemSelected}/>}
                right={<StarshipDetails itemId={selectedItemId}/>}
            />
        );
    }
}