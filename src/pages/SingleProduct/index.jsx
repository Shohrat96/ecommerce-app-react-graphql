import { Query } from "@apollo/client/react/components";
import React from "react";
import Attributes from "../../components/attributes";
import CustomBtn from "../../components/customBtn";
import PriceText from "../../components/priceText";
import TitleAndSubtitle from "../../components/titleAndSubtitle";
import CurrencyContext from "../../context/currency";
import ProductsContext from "../../context/products";
import { GET_SINGLE_PRODUCT } from "../../graphql/queries";
import { convertPrice } from "../../utils/helpers";

import {
  Container,
  OtherImages,
  SingleImageWrapper,
  SelectedImage,
  DetailsWrapper,
} from "./styledComponents";

class SingleProduct extends React.Component {
  state = {};
  attributeSelectHandler = (attributeName, itemId) => {
    this.setState((prevState) => ({
      ...prevState,
      [attributeName]: itemId,
    }));
  };

  addToCardButtonDisabled = (fetchedProduct) => {
    if (fetchedProduct.attributes.length > 0) {
      if (fetchedProduct.attributes.some((att) => !this.state[att?.name]))
        return true;
    }
    const thisProductsInCard = this.props.cardProducts.filter(
      (product) => product.id === fetchedProduct.id
    );
    if (thisProductsInCard.length > 0) {
      const thisProductSelectedAttributes = {};

      fetchedProduct.attributes.forEach((item) => {
        thisProductSelectedAttributes[item.name] = thisProductsInCard.map(
          (prod) => prod[item.name]
        );
      });

      const updatedAttributeFields = Object.keys(this.state).filter((attr) => {
        if (!thisProductSelectedAttributes[attr].includes(this.state[attr])) {
          return true;
        }
      });
      if (updatedAttributeFields.length > 0) {
        return false;
      } else return true;
    }
    return false;
  };
  render() {
    return (
      <Query
        query={GET_SINGLE_PRODUCT}
        variables={{ id: this.props?.match?.params?.id }}
      >
        {({ loading, error, data }) => {
          if (loading) return <div>loading...</div>;
          if (error) return <div>error...</div>;
          const { product } = data;

          const price = convertPrice(
            product?.prices,
            this.props.activeCurrency
          );
          return (
            <Container>
              {product?.gallery?.length > 0 && (
                <OtherImages>
                  {product.gallery.map((imgUrl) => {
                    return (
                      <SingleImageWrapper key={imgUrl}>
                        <img src={imgUrl} alt="product img" />
                      </SingleImageWrapper>
                    );
                  })}
                </OtherImages>
              )}
              <SelectedImage>
                <img src={product?.gallery[0]} alt="selected product img" />
              </SelectedImage>
              <DetailsWrapper>
                <div style={{marginBottom: '43px'}}>
                  <TitleAndSubtitle
                    title={product?.brand}
                    subtitle={product?.name}
                  />
                </div>

                <Attributes
                  attributes={product.attributes}
                  onSelect={this.attributeSelectHandler}
                  selectedAttributes={this.state}
                />
                <div style={{marginTop: '36px', marginBottom: '20px'}}>
                  <PriceText cur={price?.currencySymbol} value={price?.amount} />
                </div>
                <CustomBtn
                  disabled={this.addToCardButtonDisabled(product)}
                  onClick={() =>
                    this.props.addToCard({
                      ...product,
                      ...this.state,
                    })
                  }
                  title="add to card"
                />
                <div
                  style={{marginTop: '40px'}}
                  dangerouslySetInnerHTML={{ __html: product?.description }}
                />
              </DetailsWrapper>
            </Container>
          );
        }}
      </Query>
    );
  }
}

export default class SingleProductWithContexts extends React.Component {
  render() {
    return (
      <ProductsContext.Consumer>
        {({ cardProducts, addToCard }) => (
          <CurrencyContext.Consumer>
            {({ activeCurrency }) => {
              return (
                <SingleProduct
                  cardProducts={cardProducts}
                  activeCurrency={activeCurrency}
                  addToCard={addToCard}
                  {...this.props}
                />
              );
            }}
          </CurrencyContext.Consumer>
        )}
      </ProductsContext.Consumer>
    );
  }
}
