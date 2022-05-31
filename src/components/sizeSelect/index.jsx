import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import { Container, SizesWrapper, SingleSize } from './styledComponents';

class SizeSelect extends React.Component {

  render() { 
    const { name, items, onSelect, activeItemId, dropdown } = this.props;
    const sizeLabel = dropdown ? capitalizeFirstLetter(name) : name.toUpperCase();
    return ( 
      <Container dropdown={dropdown}>
        <p>{sizeLabel}:</p>
        <SizesWrapper>
          {
            items.map(item => {
              return (
                <SingleSize
                  dropdown={dropdown}
                  key={item.id}
                  onClick={ onSelect && (() => onSelect(name, item.id))}
                  active={item.id === activeItemId}
                >
                  {item.value}
                </SingleSize>
              )
            })
          }
        </SizesWrapper>
      </Container>
     );
  }
}
 
export default SizeSelect;