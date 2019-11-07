import React, {Component} from 'react';
import './people-page.css'
import ItemList from "../item-list";
import ItemDetails from "../item-details";
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi";
import Row from "../row";
import ErrorBoundry from "../error-boundry/error-boundry";

export default class PeoplePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedItem: 3,
            hasError: false
        };
        this.swapiService = new SwapiService();
    }

    componentDidCatch(error, errorInfo) {
        this.setState({hasError: true});
    };

    onItemSelected = (id) => {
        this.setState({selectedItem: id});
    };

    render() {
        const {selectedItem, hasError} = this.state;

        if (hasError) {
            return <ErrorIndicator/>
        }

        const itemList = (
            <ItemList
                onItemSelected={this.onItemSelected}
                spinnerColor="yellow"
                getData={this.swapiService.getAllPeople}>
                {(item) => `${item.name} (${item.birthYear})`}
            </ItemList>
        );

        const itemDetails = (
            <ErrorBoundry>
                <ItemDetails itemId={selectedItem}/>
            </ErrorBoundry>
        );

        return (
            <Row left={itemList} right={itemDetails}/>
        );
    }
}

