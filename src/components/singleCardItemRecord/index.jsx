import React from "react";
import CurrencyContext from "../../context/currency";
import ProductsContext from "../../context/products";
import { convertPrice } from "../../utils/helpers";
import Attributes from "../attributes";
import TitleAndSubtitle from "../titleAndSubtitle";
import {
  Container,
  ProductInfo,
  ProductCount,
  ProductCountAndImage,
  ProductImage,
  PlusMinusButton,
  Count,
  ImageChange,
  PreviousImg,
  NextImg,
} from "./styledComponents";

class SingleCardItemRecord extends React.Component {
  state = {
    currentGalleryImageIndex: 0,
  };
  render() {
    const { item } = this.props;
    const selectedAttributes = {};
    item.attributes.forEach((element) => {
      selectedAttributes[element.name] = item[element.name];
    });
    const {currencySymbol, amount} = convertPrice(item.prices, this.props.activeCurrency)
    return (
      <Container>
        <ProductInfo>
          <TitleAndSubtitle title={item.brand} subtitle={item.name} />
          <span>{currencySymbol}{amount}</span>
          <Attributes
            attributes={item.attributes}
            selectedAttributes={selectedAttributes}
          />
        </ProductInfo>
        <ProductCountAndImage>
          <ProductCount>
            <PlusMinusButton onClick={() => this.props.incrementCardProduct(item)} >+</PlusMinusButton>
            <Count>{item.count}</Count>
            <PlusMinusButton onClick={() => this.props.removeCardProduct(item)}>-</PlusMinusButton>
          </ProductCount>
          <ProductImage>
            <img
              src={item?.gallery[this.state.currentGalleryImageIndex]}
              alt="product img"
            />
            {item?.gallery?.length > 0 && (
              <ImageChange>
                {this.state.currentGalleryImageIndex !== 0 && (
                  <PreviousImg
                    onClick={() =>
                      this.setState({
                        currentGalleryImageIndex:
                          this.state.currentGalleryImageIndex - 1,
                      })
                    }
                  >
                    <div />
                  </PreviousImg>
                )}

                {item?.gallery.length !==
                  this.state.currentGalleryImageIndex + 1 && (
                  <NextImg
                    onClick={() =>
                      this.setState({
                        currentGalleryImageIndex:
                          this.state.currentGalleryImageIndex + 1,
                      })
                    }
                  >
                    <div />
                  </NextImg>
                )}
              </ImageChange>
            )}
          </ProductImage>
        </ProductCountAndImage>
      </Container>
    );
  }
}

export default class SingleCardItemRecordWithContexts extends React.Component {
  
  render() {
    return (
      <ProductsContext.Consumer>
        {({ incrementCardProduct, removeCardProduct }) => {
          return (
            <CurrencyContext.Consumer>
              {({ activeCurrency }) => (
                <SingleCardItemRecord
                  incrementCardProduct={incrementCardProduct}
                  removeCardProduct={removeCardProduct}
                  activeCurrency={activeCurrency}
                  {...this.props}
                />
              )}
            </CurrencyContext.Consumer>
          );
        }}
      </ProductsContext.Consumer>
    );
  }
}
