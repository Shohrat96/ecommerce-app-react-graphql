import { Query } from "@apollo/client/react/components";
import React from "react";
import Attributes from "../../components/attributes";
import CustomBtn from "../../components/customBtn";
import PriceText from "../../components/priceText";
import TitleAndSubtitle from "../../components/titleAndSubtitle";
import CurrencyContext from "../../context/currency";
import NavigationContext from "../../context/navigation";
import ProductsContext from "../../context/products";
import { GET_SINGLE_PRODUCT } from "../../graphql/queries";
import { convertPrice } from "../../utils/helpers";
import "./customStyles.css";
import {
  Container,
  OtherImages,
  SingleImageWrapper,
  SelectedImage,
  DetailsWrapper,
} from "./styledComponents";
import parse from 'html-react-parser';
import DOMPurify from "dompurify";

class SingleProduct extends React.Component {
  state = {
    attributes: {},
    shownImageUrlIdx: 0,
  };
  attributeSelectHandler = (attributeName, itemId) => {
    this.setState((prevState) => ({
      ...prevState,
      attributes: {
        ...this.state.attributes,
        [attributeName]: itemId,
      },
    }));
  };
  addToCardHandler = (product) => {
    const thisItemInProduct = this.props.cardProducts.find((prod) => {
      const prodCopy = JSON.parse(JSON.stringify(prod));
      if ("count" in prodCopy) delete prodCopy.count;
      if (
        JSON.stringify(prodCopy) ===
        JSON.stringify({
          ...product,
          ...this.state.attributes,
        })
      ) {
        return true;
      }
      return false;
    });

    if (thisItemInProduct) {
      this.props.incrementCardProduct(thisItemInProduct);
    } else {
      this.props.addToCard({
        ...product,
        ...this.state.attributes,
      });
    }
    this.setState({
      attributes: {},
    });
  };
  addToCardButtonDisabled = (fetchedProduct) => {
    if (fetchedProduct.attributes.length > 0) {
      if (
        fetchedProduct.attributes.some(
          (att) => !this.state.attributes[att?.name]
        )
      )
        return true;
    }
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
                  {product.gallery.map((imgUrl, idx) => {
                    return (
                      <SingleImageWrapper
                        onClick={() =>
                          this.setState({
                            shownImageUrlIdx: idx,
                          })
                        }
                        key={imgUrl}
                      >
                        <img src={imgUrl} alt="product img" />
                      </SingleImageWrapper>
                    );
                  })}
                </OtherImages>
              )}
              <SelectedImage>
                <img
                  src={product?.gallery[this.state.shownImageUrlIdx]}
                  alt="selected product img"
                />
              </SelectedImage>
              <DetailsWrapper>
                <TitleAndSubtitle
                  title={product?.brand}
                  subtitle={product?.name}
                />

                <Attributes
                  attributes={product.attributes}
                  onSelect={this.attributeSelectHandler}
                  selectedAttributes={this.state.attributes}
                />
                <PriceText cur={price?.currencySymbol} value={price?.amount} />
                <CustomBtn
                  disabled={this.addToCardButtonDisabled(product)}
                  onClick={
                    () => this.addToCardHandler(product)
                  }
                  title="add to card"
                  className="addToCardBtnStyles"
                />
                <div dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(product?.description)
                }} />
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
      <NavigationContext.Consumer>
        {({ setActiveNavName }) => (
          <ProductsContext.Consumer>
            {({ cardProducts, addToCard, incrementCardProduct }) => (
              <CurrencyContext.Consumer>
                {({ activeCurrency }) => {
                  return (
                    <SingleProduct
                      cardProducts={cardProducts}
                      activeCurrency={activeCurrency}
                      addToCard={addToCard}
                      incrementCardProduct={incrementCardProduct}
                      setActiveNavName={setActiveNavName}
                      {...this.props}
                    />
                  );
                }}
              </CurrencyContext.Consumer>
            )}
          </ProductsContext.Consumer>
        )}
      </NavigationContext.Consumer>
    );
  }
}
