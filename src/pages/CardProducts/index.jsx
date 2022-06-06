import React from "react";
import {
  Container,
  Title,
  ListWrapper,
  CardTotals,
  CardTotalWrapper,
  BreakEl,
} from "./styledComponents";
import ProductsContext from "../../context/products";
import SingleCardItemRecord from "../../components/singleCardItemRecord";
import uuid from "react-uuid";
import CustomBtn from "../../components/customBtn";
import CurrencyContext from "../../context/currency";

class CardProductsPage extends React.Component {
  render() {
    const taxPercent = 21;
    const { cardProducts, activeCurrency, currencies } = this.props;
    const activeCurLabel = currencies.find(
      (cur) => cur?.label === activeCurrency
    )?.symbol;
    const totalPrice = cardProducts
      .map(
        (prod) =>
          prod.prices.find((price) => price?.currency?.label === activeCurrency)
            ?.amount * prod.count
      )
      .reduce((a, b) => a + b, 0);
    const totalItemCount = cardProducts
      .map((product) => product.count)
      .reduce((a, b) => a + b, 0);
    const taxAmount = ((totalPrice * taxPercent) / 100).toFixed(2);
    return (
      <Container>
        <Title>CART</Title>
        <ListWrapper>
          {cardProducts?.map((item) => {
            return <SingleCardItemRecord key={uuid()} item={item} />;
          })}
        </ListWrapper>
        <CardTotalWrapper>
          <CardTotals>
            <tbody>
              <tr>
                <td>Tax {taxPercent}%: </td>
                <td>
                  {activeCurLabel}
                  {taxAmount}
                </td>
              </tr>
              <tr>
                <td>Quantity: </td>
                <td>{totalItemCount}</td>
              </tr>
              <tr>
                <td>Total: </td>
                <td>
                  {activeCurLabel}
                  {totalPrice.toFixed(2)}
                </td>
              </tr>
            </tbody>
          </CardTotals>
          <BreakEl />
          <CustomBtn title="order" />
        </CardTotalWrapper>
      </Container>
    );
  }
}

export default class CardProductsPageWithContext extends React.Component {
  render() {
    return (
      <ProductsContext.Consumer>
        {({ cardProducts }) => (
          <CurrencyContext.Consumer>
            {({ activeCurrency, currencies }) => (
              <CardProductsPage
                cardProducts={cardProducts}
                activeCurrency={activeCurrency}
                currencies={currencies}
                {...this.props}
              />
            )}
          </CurrencyContext.Consumer>
        )}
      </ProductsContext.Consumer>
    );
  }
}
