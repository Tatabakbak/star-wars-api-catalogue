import React, {Component} from 'react';
import './peron-details.css';
import SwapiService from "../../services/swapi";
import Spinner from "../spinner/spinner";
import PersonView from "./person-view";

export default class PersonDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            person: null,
            loading: true
        };
        this.swapiService = new SwapiService();
    }

    componentDidMount() {
        this.updatePerson();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.personId !== this.props.personId) {
            this.setState({ loading:true });
            this.updatePerson();
        }
    };

    updatePerson = () => {
        const {personId} = this.props;

        if(!personId)
            return;

        this.swapiService
            .getPerson(personId)
            .then((person) => this.setState({person, loading:false}));
    };

    render() {

        const {person, loading} = this.state;
        if(!person) {
            return <Spinner color='blue'/>; /*<div className="w-100 text-center">Select a person from the list</div>*/
        }

        const content = loading ? <Spinner color='blue'/> : <PersonView person={person}/>;
        return (
            <div className="person-details card text-white bg-info">
                {content}
            </div>
        );
    }
};

