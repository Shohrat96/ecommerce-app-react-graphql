import React from "react";
import {
  Container,
  ImgWrapper,
  ProductInfo,
  ProductImage,
} from "./styledComponents";
import { Link } from "react-router-dom";
import CurrencyContext from "../../context/currency";
import { convertPrice } from "../../utils/helpers";

export default class SingleProduct extends React.Component {
  render() {
    return (
      <Link to={`products/${this.props.item.id}`}>
        <CurrencyContext.Consumer>
          {
            ({activeCurrency}) => {
              const { currencySymbol, amount } = convertPrice(this.props.item.prices, activeCurrency)
              return (
                <Container>
                <ImgWrapper>
                  <ProductImage
                    src={this.props.item.gallery[0]}
                    alt="product gallery"
                  />
                </ImgWrapper>
                <ProductInfo>
                  <span>{this.props.item.brand} {this.props.item.name}</span>
                  <span>{currencySymbol}{amount}</span>
                </ProductInfo>
              </Container>
              )
            }
          }
        </CurrencyContext.Consumer>
      </Link>
    );
  }
}
