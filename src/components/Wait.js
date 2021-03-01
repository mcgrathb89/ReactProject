import React from 'react';
import PropTypes from 'prop-types';

class Wait extends React.Component {

    constructor(props) {
        super(props);
        this.state = {hidden : true};
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({hidden: false});
        }, this.props.waitBeforeShow);
    }

    render() {
        return this.state.hidden ? '' : this.props.children;
    }
}

Wait.propTypes = {
  waitBeforeShow: PropTypes.number.isRequired
};

export default Wait;