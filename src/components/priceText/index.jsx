import React from "react";
import { Container } from "./styledcomponents";

class PriceText extends React.Component {

  render() { 
    return ( 
      <Container>
        PRICE:
        <p>{this.props.cur}{this.props.value}</p>
      </Container>
     );
  }
}
 
export default PriceText;