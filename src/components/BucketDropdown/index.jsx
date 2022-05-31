import React from "react";
import {
  Container,
  ListWrapper,
  TotalPrice,
  Title,
  ButtonsWrapper,
} from "./styledComponents";
import ProductsContext from "../../context/products";
import SingleDropdownRecord from "./singleRecord";
import CurrencyContext from "../../context/currency";
import { convertPrice } from "../../utils/helpers";
import CustomBtn from "../customBtn";
import uuid from 'react-uuid'

const buttonStyles = {
  width: "140px",
  height: "43px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "14px",
  padding: "0",
};

class BucketDropdown extends React.Component {
  componentDidMount() {
    document.body.style.overflow = 'hidden'
  }
  componentWillUnmount() {
    document.body.style.overflow = 'unset';
  }
  render() {
    const { cardProducts } = this.props;
    const totalPrice = cardProducts
      .map(
        (item) =>
          item.count *
          convertPrice(item.prices, this.props.activeCurrency).amount
      )
      .reduce((a, b) => a + b, 0);
    const activeCurrencySymbol = cardProducts.length > 0 ? (
      convertPrice(cardProducts[0].prices, this.props.activeCurrency)
    ).currencySymbol : '';

    const totalCardProductsCount = cardProducts
      .map((item) => item.count)
      ?.reduce((a, b) => a + b, 0);
    return (
      <Container onClick={(ev) => ev.stopPropagation()}>
        <Title>
          <span>My Bag, </span>
          <span>{totalCardProductsCount} items</span>
        </Title>
        <ListWrapper>
          {cardProducts?.map((item) => {
            return <SingleDropdownRecord key={uuid()} item={item} />;
          })}
        </ListWrapper>
        <TotalPrice>
          <span>Total</span>
          <span>{activeCurrencySymbol}{totalPrice.toFixed(2)}</span>
        </TotalPrice>
        <ButtonsWrapper>
          <CustomBtn
            onClick={this.props.viewBugHandler}
            style={{
              ...buttonStyles,
              backgroundColor: "white",
              color: "#000",
              border: "1px solid #1d1f22",
            }}
            title="View bag"
          />
          <CustomBtn style={buttonStyles} title="Check out" />
        </ButtonsWrapper>
      </Container>
    );
  }
}

export default class BucketDropdownWithContext extends React.Component {
  render() {
    return (
      <CurrencyContext.Consumer>
        {({ activeCurrency, currencies }) => (
          <ProductsContext.Consumer>
            {({ cardProducts }) => (
              <BucketDropdown
                activeCurrency={activeCurrency}
                cardProducts={cardProducts}
                currencies={currencies}
                {...this.props}
              />
            )}
          </ProductsContext.Consumer>
        )}
      </CurrencyContext.Consumer>
    );
  }
}
