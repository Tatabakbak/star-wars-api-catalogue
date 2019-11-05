import React, {Component} from 'react';
import './item-list.css';
import SwapiService from "../../services/swapi";
import Spinner from "../spinner/spinner";

export default class ItemList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            peopleList: null
        };
        this.swapiService = new SwapiService();
    }

    componentDidMount() {
        this.swapiService.getAllPeople()
            .then((itemList) => {
                this.setState({
                    itemList
                })
            });
    }

    onItemSelected(id) {
        this.props.onItemSelected(id);
    }

    renderItems(arr) {
        return arr.map(({id, name}) => {
            return (
                <li className="list-group-item bg-warning"
                    key={id}
                    onClick={() => this.onItemSelected(id)}>
                    {name}
                </li>
            );
        });
    }

    render() {
        const {itemList} = this.state;
        if (!itemList) {
            return <Spinner color={this.props.spinnerColor}/>;
        }

        return (
            <ul className="item-list">
                {this.renderItems(itemList)}
            </ul>
        );
    };
};

