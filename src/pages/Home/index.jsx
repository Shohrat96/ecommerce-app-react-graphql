import React from "react";
import SingleProduct from "../../components/singleProduct";
import { Container, Title, ListWrapper } from "./styledComponents";
import ProductsContext from "../../context/products";
import { capitalizeFirstLetter } from "../../utils/helpers";
import uuid from "react-uuid";
import { Query } from "@apollo/client/react/components";
import { GET_PRODUCTS_BY_CATEGORY } from "../../graphql/queries";

class HomePage extends React.Component {
  static contextType = ProductsContext;

  render() {
    return (
      <Query
        query={GET_PRODUCTS_BY_CATEGORY}
        variables={{ arg: this.props.categoryName }}
      >
        {({ loading, error, data }) => {
          if (loading) return <div>loading...</div>;
          if (error) return <div>error</div>;
          return (
            <Container>
              <Title>{capitalizeFirstLetter(this.props.categoryName)}</Title>
              <ListWrapper>
                {data?.category?.products.map((item) => {
                  return <SingleProduct key={uuid()} item={item} />;
                })}
              </ListWrapper>
            </Container>
          );
        }}
      </Query>
    );
  }
}

export default HomePage;
