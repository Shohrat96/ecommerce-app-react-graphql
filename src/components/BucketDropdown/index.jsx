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
import uuid from "react-uuid";

class BucketDropdown extends React.Component {
  componentDidMount() {
    document.body.style.overflow = "hidden";
  }
  componentWillUnmount() {
    document.body.style.overflow = "unset";
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
    const activeCurrencySymbol =
      cardProducts.length > 0
        ? convertPrice(cardProducts[0].prices, this.props.activeCurrency)
            .currencySymbol
        : "";

    const totalCardProductsCount = cardProducts
      .map((item) => item.count)
      ?.reduce((a, b) => a + b, 0);
    return (
        <>
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
            <span>
              {activeCurrencySymbol}
              {totalPrice.toFixed(2)}
            </span>
          </TotalPrice>
          <ButtonsWrapper>
            <CustomBtn
              onClick={this.props.viewBugHandler}
              title="View bag"
            />
            <CustomBtn
              title="Check out" 
            />
          </ButtonsWrapper>
        </>
    );
  }
}
export class BucketDropDownWithOutsideClick extends React.Component {
  constructor(props) {
    super(props);
    this.bucketRef = React.createRef();
  }
  handleOutsideClick=(event) => {
    if (this.bucketRef.current && !this.bucketRef.current.contains(event.target)) {
      this.props.outsideClick();
    }
  }
  componentDidMount() {
    document.addEventListener('click', this.handleOutsideClick, true)
  }
  componentWillUnmount() {
    document.removeEventListener('click', this.handleOutsideClick)

  }
  render() { 
    return (
      <Container ref={this.bucketRef}>
        <BucketDropdown {...this.props} />
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
              <BucketDropDownWithOutsideClick
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
