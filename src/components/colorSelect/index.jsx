import React from "react";
import { Container, ColorsWrapper, OuterWrapper, SingleColor } from "./styledComponents";


class ColorSelect extends React.Component {

  render() { 
    const {onSelect, activeColorId, dropdown} = this.props;
    return ( 
      <Container>
        <p>COLOR:</p>
        <ColorsWrapper>
          {
            this.props?.colors?.map(item => {
              return (
                <OuterWrapper
                  dropdown={dropdown}
                  onClick={onSelect && (() => onSelect('Color', item.id))}
                  active={item.id === activeColorId}
                  key={item.id}
                >
                  <SingleColor dropdown={dropdown} color={item.value} />
                </OuterWrapper>
              )
            })
          }
        </ColorsWrapper>
      </Container>
     );
  }
}
 
export default ColorSelect;