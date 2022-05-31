import React from "react";
import { Container } from "./styledComponents";


class CustomBtn extends React.Component {

  render() { 
    return ( 
      <Container disabled={this.props.disabled} onClick={this.props.onClick} {...this.props}>
        {this.props.title.toUpperCase()}
      </Container>
     );
  }
}
 
export default CustomBtn;