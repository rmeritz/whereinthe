import React from "react"
import PropTypes from "prop-types"
class Title extends React.Component {
  render () {
    return (
      <h1 className="title">
        Where in the world is {this.props.name}?
      </h1>
    );
  }
}

Title.propTypes = {
  name: PropTypes.string
};
export default Title
