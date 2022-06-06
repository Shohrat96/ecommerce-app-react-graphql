import React from "react";
import { client } from "../../..";
import ProductsContext from "../../../context/products";
import {
  GET_CATEGORIES,
  GET_PRODUCTS_BY_CATEGORY,
} from "../../../graphql/queries";
import { Container, NavItem } from "./styledComponents";
import { withRouter } from "react-router";
import { Query } from "@apollo/client/react/components";
import { capitalizeFirstLetter } from "../../../utils/helpers";

export default withRouter(
  class Navigation extends React.Component {
    static contextType = ProductsContext;

    changeCatHandler = (category) => {
      this.props.history.push(`/${category}`);
      const { setProducts } = this.context;
      this.props.setActiveNavName(category);
      client
        .query({
          query: GET_PRODUCTS_BY_CATEGORY,
          variables: { arg: category },
        })
        .then((res) => {
          if (res.loading === false) {
            setProducts(res.data.category.products);
          }
        });
    };

    render() {
      const { activeNavName } = this.props;
      return (
        <Query query={GET_CATEGORIES}>
          {({ loading, error, data }) => {
            if (loading) return <div>loading...</div>;
            if (error) return <div>error...</div>;
            return (
              <Container>
                {data.categories.map((item) => {
                  return (
                    <NavItem
                      onClick={() =>
                        this.changeCatHandler(item.name.toLowerCase())
                      }
                      active={item.name.toLowerCase() === activeNavName}
                      key={item.name}
                    >
                      {capitalizeFirstLetter(item?.name)}
                    </NavItem>
                  );
                })}
              </Container>
            );
          }}
        </Query>
      );
    }
  }
);
