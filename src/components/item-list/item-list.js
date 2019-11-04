import React, {Component} from 'react';
import './item-list.css';

export default class ItemList extends Component {
    render() {
        return (
            <ul className="item-list">
                <li className="list-group-item bg-warning">
                    Person1
                </li>
                <li className="list-group-item bg-warning">
                    Person2
                </li>
                <li className="list-group-item bg-warning">
                    Person3
                </li>
            </ul>
        );
    };
};

