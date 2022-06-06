import React from "react";
import { Container } from "./styledComponents";
class CustomBtn extends React.Component {
  render() {
    const {className, ...rest} = this.props;
    return (
      <Container
        disabled={this.props.disabled}
        onClick={this.props.onClick}
        className={className}
        {...rest}
      >
        {this.props.title.toUpperCase()}
      </Container>
    );
  }
}

export default CustomBtn;
