import React, { Component } from 'react';


// In componentDidMount, call loadColors prop with an array of 3 colors of your choosing
class ColorChooser extends Component {
  state = {  }
  render() { 

    // A list of Color components based on mapping the colors prop. Each Color component is also passed the selectColor prop.
    // An AddColor component that is passed the addColor prop

    return (  );
  }
}
 
export default connect(
  state => ({
    //mapStateToProps - add props selectedColor and colors from state
    // mapDispatchToProps - add action props selectColor, loadColors, and addColor
  }),
)(ColorChooser);