import React from "react"
import PropTypes from "prop-types"
class FiberAI extends React.Component {
    render () {
        return (
            <React.Fragment>
                Greeting: {this.props.greeting}
            </React.Fragment>
        );
    }
}

FiberAI.propTypes = {
    greeting: PropTypes.string
};
export default FiberAI