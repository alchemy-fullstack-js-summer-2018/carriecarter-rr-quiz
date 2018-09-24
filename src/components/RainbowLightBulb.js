import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class RainbowLightBulb extends Component {
  state = {
    on: true
  }

  render() { 
    // A <button> that toggles on state when clicked
    <button>ON</button>

    // When on is true, a conditionally rendered <span> 
    // element shows the color name and sets its backgroundColor style dynamically to the name of the color.
    return (  );
  }

}

// Use connect to add prop selectedColor from state (mapStateToProps).
export default connect(
  state => ({
    on: true
  }),
)(RainbowLightBulb);

