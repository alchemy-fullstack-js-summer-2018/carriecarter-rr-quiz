import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class RainbowLightBulb extends Component {

  static propTypes ={
    on: true
  }

}

export default connect(
  state => ({
    on: true
  }),
)(RainbowLightBulb);

