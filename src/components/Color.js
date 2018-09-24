import React, { Component } from 'react';
import PropTypes from 'prop-types';

static propTypes ={
  color: PropTypes.string,
  onSelect: PropTypes.func
};

// onSelect()

class Color  extends Component {
  
  render() { 
    const { selectedColor } = this.props;
    // Element (like <span>) with text set to color name, and when clicked calls onSelect prop with its color
    return (
        <li>
          <span>{selectedColor}</span>
        </li>
      );
  }
}
 
export default Color;