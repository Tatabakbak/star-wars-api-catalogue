import React, {Component} from 'react';
import Spinner from "../spinner/spinner";

//HOC
const withData = (View) => {

    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                data: null
            };
        }

        componentDidMount() {
            this.props.getData()
                .then((data) => {
                    this.setState({
                        data
                    })
                });
        }

        render() {
            const {data} = this.state;
            if (!data) {
                return <Spinner color={this.props.spinnerColor}/>;
            }
            return <View {...this.props} data={data}/>
        }
    }
};

export default withData;
