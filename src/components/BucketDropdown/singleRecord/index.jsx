import React from "react";
import CurrencyContext from "../../../context/currency";
import ProductsContext from "../../../context/products";
import { convertPrice } from "../../../utils/helpers";
import Attributes from "../../attributes";
import {
  Container,
  ProductInfo,
  ProductCountAndImage,
  ProductCount,
  PlusMinusButton,
  Count,
  ProductImage,
  ProductBrandAndName,
} from "./styledComponents";

class SingleDropdownRecord extends React.Component {
  render() {
    const { item } = this.props;
    const { currencySymbol, amount } = convertPrice(
      item.prices,
      this.props.activeCurrency
    );
    const selectedAttributes = {};
    item.attributes.forEach((element) => {
      selectedAttributes[element.name] = item[element.name];
    });
    return (
      <Container>
        <ProductInfo>
          <ProductBrandAndName>
            <span>{item?.brand}</span>
            <br />
            <span>{item?.name}</span>
          </ProductBrandAndName>
          <span>
            {currencySymbol}
            {amount}
          </span>
          <Attributes
            dropdown
            attributes={item.attributes}
            selectedAttributes={selectedAttributes}
          />
        </ProductInfo>
        <ProductCountAndImage>
          <ProductCount>
            <PlusMinusButton
              onClick={() => this.props.incrementCardProduct(item)}
            >
              +
            </PlusMinusButton>
            <Count>{item.count}</Count>
            <PlusMinusButton onClick={() => this.props.removeCardProduct(item)}>
              -
            </PlusMinusButton>
          </ProductCount>
          <ProductImage>
            <img src={item?.gallery[0]} alt="product img" />
          </ProductImage>
        </ProductCountAndImage>
      </Container>
    );
  }
}

export default class SingleDropdownRecordWithContext extends React.Component {
  render() {
    return (
      <CurrencyContext.Consumer>
        {({ activeCurrency }) => (
          <ProductsContext.Consumer>
            {({ incrementCardProduct, removeCardProduct }) => (
              <SingleDropdownRecord
                activeCurrency={activeCurrency}
                incrementCardProduct={incrementCardProduct}
                removeCardProduct={removeCardProduct}
                {...this.props}
              />
            )}
          </ProductsContext.Consumer>
        )}
      </CurrencyContext.Consumer>
    );
  }
}
