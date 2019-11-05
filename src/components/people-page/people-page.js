import React, {Component} from 'react';
import './people-page.css'
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import ErrorIndicator from "../error-indicator";

export default class PeoplePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedPerson: 3,
            hasError: false
        }
    }

    componentDidCatch(error, errorInfo) {
        this.setState({hasError: true});
    };

    onPersonSelected = (id) => {
        this.setState({selectedPerson: id});
    };

    render() {
        const {selectedPerson, hasError} = this.state;

        if (hasError) {
            return <ErrorIndicator/>
        }

        return (
            <div className="row">
                <div className="col-md-6">
                    <ItemList onItemSelected={this.onPersonSelected} spinnerColor="yellow"/>
                </div>
                <div className="col-md-6">
                    <PersonDetails personId={selectedPerson}/>
                </div>
            </div>
        );
    }
}