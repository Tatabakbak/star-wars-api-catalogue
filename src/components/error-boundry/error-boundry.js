import React, {Component} from "react";
import ErrorIndicator from "../error-indicator";
import './error-boundry.css';

export default class ErrorBoundry extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };
    }

    componentDidCatch(error, errorInfo) {
        console.log('ErrorBoundry catch', error, errorInfo);
        this.setState({hasError: true});
    };

    render() {
        if (this.state.hasError)
            return <ErrorIndicator/>;
        else
            return this.props.children;
    }
}