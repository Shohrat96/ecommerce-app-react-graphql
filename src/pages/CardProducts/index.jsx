import React from "react";
import { Container, Title, ListWrapper } from "./styledComponents";
import ProductsContext from "../../context/products";
import SingleCardItemRecord from "../../components/singleCardItemRecord";
import uuid from 'react-uuid'

class CardProductsPage extends React.Component {
  static contextType = ProductsContext;

  render() {
    const { cardProducts } = this.context;
    return (
      <Container>
        <Title>CART</Title>
        <ListWrapper>
          {cardProducts?.map((item) => {
            return <SingleCardItemRecord key={uuid()} item={item} />;
          })}
        </ListWrapper>
      </Container>
    );
  }
}

export default CardProductsPage;
