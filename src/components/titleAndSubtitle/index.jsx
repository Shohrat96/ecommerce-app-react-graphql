import { Component } from "react";
import { Container, Title, Subtitle } from "./styledComponents";


class TitleAndSubtitle extends Component {

  render() {
    const {title, subtitle} = this.props;
    return ( 
      <Container>
        <Title>
          {title}
        </Title>
        <Subtitle>
          {subtitle}
        </Subtitle>
      </Container>
     );
  }
}
 
export default TitleAndSubtitle;