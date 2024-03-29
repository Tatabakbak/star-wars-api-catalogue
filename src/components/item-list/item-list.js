import React from 'react';
import './item-list.css';
import ErrorBoundry from "../error-boundry/error-boundry";
import PropTypes from 'prop-types';

const ItemList = ({onItemSelected, data, children: renderLabel}) => {

    const items = data.map((item) => {
        const {id} = item;
        const label = renderLabel(item);
        return (
            <li className="list-group-item bg-warning"
                key={id}
                onClick={() => onItemSelected(id)}>
                {label}
            </li>
        );
    });

    return (
        <ErrorBoundry>
            <ul className="item-list">
                {items}
                {/*<ErrorButton/>*/}
            </ul>
        </ErrorBoundry>
    );
};

ItemList.defaultProps = {
    onItemSelected: () => {}
};

ItemList.propTypes = {
    onItemSelected: PropTypes.func,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    children: PropTypes.func.isRequired
};

export default ItemList;