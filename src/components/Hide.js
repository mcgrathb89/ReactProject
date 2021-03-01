import React from 'react';
import PropTypes from 'prop-types';

class Hide extends React.Component {

    constructor(props) {
        super(props);
        this.state = {hidden : false};
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({hidden: true});
        }, this.props.hideText);
    }

    render() {
        return this.state.hidden ? '' : this.props.children;
    }
}

Hide.propTypes = {
  hideText: PropTypes.number.isRequired
};

export default Hide;