import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Color from './Color';
import AddColor from './AddColor';

static propTypes = {
  colors: PropTypes.str,
  selectedColor: PropTypes.func
};
// In componentDidMount, call loadColors prop with an array of 3 colors of your choosing
componentDidMount() {
  loadColors(['red', 'green', 'blue']);
}
class ColorChooser extends Component {
  state = {  }
  render() { 

    
    

    return ( 
      // A list of Color components based on mapping the colors prop. Each Color component is also passed the selectColor prop.
      <ul>
        {ColorChooser.map(colors)}
      </ul>
      // An AddColor component that is passed the addColor prop
      <input type="text" {AddColor => (addColor.props)}>Add Color</input>
      <button type="submit">Add</button>
     );
  }
}
 
export default connect(
  state => ({
    //mapStateToProps - add props selectedColor and colors from state
    // mapDispatchToProps - add action props selectColor, loadColors, and addColor
  }),
)(ColorChooser);