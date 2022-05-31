import React from "react";
import ColorSelect from "../colorSelect";
import SizeSelect from "../sizeSelect";
import { Container } from "./styledComponents";


class Attributes extends React.Component {

  state = {  }
  render() { 
    const {attributes, onSelect, selectedAttributes, dropdown} = this.props;
    return attributes?.length > 0 ? (
      <Container>
        {
          attributes.map(attribute => {
            if (attribute.type === 'swatch') {
              return (
                <ColorSelect dropdown={dropdown} activeColorId={selectedAttributes?.Color} onSelect={onSelect && onSelect} key={attribute.id} colors={attribute.items} />
              )
            } 
            return (
              <SizeSelect
              dropdown={dropdown}
              activeItemId={selectedAttributes[attribute?.name]}
              onSelect={onSelect && onSelect}
              name={attribute.name} 
              key={attribute.id} 
              items={attribute.items} 
              />
            )
          })
        }
      </Container>
     ) : null;
  }
}
 
export default Attributes;