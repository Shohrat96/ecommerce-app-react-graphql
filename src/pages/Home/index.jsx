import React from "react";
import SingleProduct from "../../components/singleProduct";
import { Container, Title, ListWrapper } from "./styledComponents";
import ProductsContext from "../../context/products";
import { capitalizeFirstLetter } from "../../utils/helpers";


class HomePage extends React.Component {
  static contextType = ProductsContext;

  render() {
    const { products } = this.context;

    return (
      <Container>
        <Title>{capitalizeFirstLetter(this.props.categoryName)}</Title>
        <ListWrapper>
          {products?.map((item) => {
            return (
              <SingleProduct key={item.id} item={item}>
                {item.name}
              </SingleProduct>
            );
          })}
        </ListWrapper>
      </Container>
    );
  }
}

export default HomePage;
