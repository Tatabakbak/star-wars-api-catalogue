import React, {Component} from 'react';
import './item-details.css';
import Spinner from "../spinner/spinner";

export default class ItemDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            item: null,
            image: null,
            loading: true,
            hasError: false
        };
    }

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.itemId !== this.props.itemId ||
            prevProps.getData !== this.props.getData ||
            prevProps.getImageUrl !== this.props.getImageUrl) {
            this.setState({loading: true});
            this.updateItem();
        }
    };

    updateItem = () => {
        const {itemId, getData, getImageUrl} = this.props;

        if (!itemId) {
            this.setState({loading: false});
            return;
        }

        getData(itemId)
            .then(
                (item) =>
                    this.setState({
                            item,
                            loading: false,
                            image: getImageUrl(item)
                        }
                    ),
                (err) => {
                    this.setState({hasError: true});
                });
    };

    render() {

        const {item, image, loading, hasError} = this.state;

        if (hasError) {
            throw new Error();
        }

        if (loading) {
            return <Spinner color='blue'/>;
        } else {
            if (!item) {
                return <div className="w-100 text-center">Select item from the list</div>;
            }
        }

        return (
            <div className="item-details card text-white bg-info">
                <img className="person-image" alt={item.name}
                     src={image}/>
                <div className="card-body">
                    <h4>{item.name}</h4>
                    <ul className="list-group list-group-flush">
                        {
                            React.Children.map(this.props.children, (child) => {
                                return React.cloneElement(child, {item});
                            })
                        }
                        {/*<ErrorButton/>*/}
                    </ul>
                </div>
            </div>
        );
    }
};

const Record = ({item, field, label}) => {
    return (
        <li className="list-group-item">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    );
};


export {
    Record
};