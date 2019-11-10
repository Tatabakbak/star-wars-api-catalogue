import React, {Component} from 'react';
import Row from "../row";
import {PersonDetails, PersonList} from "../sw-components";

export default class PeoplePage extends Component {

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
                left={<PersonList spinnerColor="yellow" onItemSelected={this.onItemSelected}/>}
                right={<PersonDetails itemId={selectedItemId}/>}
            />
        );
    }
}