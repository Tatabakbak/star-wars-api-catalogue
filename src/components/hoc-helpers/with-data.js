import React, {Component} from 'react';
import Spinner from "../spinner/spinner";

//HOC
const withData = (View) => {

    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                data: null,
                loading: true
            };
        }

        componentDidUpdate(prevProps) {
            if (prevProps.getData !== this.props.getData) {
                this.setState({loading:true});
                this.update();
            }
        }

        componentDidMount() {
            this.setState({loading:true});
            this.update();
        }

        update() {
            this.props.getData()
                .then((data) => {
                    this.setState({data, loading:false})
                });
        }

        render() {
            const {data, loading} = this.state;
            if (loading) {
                return <Spinner color={this.props.spinnerColor}/>;
            }
            return <View {...this.props} data={data}/>
        }
    }
};

export default withData;
