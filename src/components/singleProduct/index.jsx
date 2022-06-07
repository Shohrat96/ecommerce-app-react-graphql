import React from "react";
import {
  Container,
  ImgWrapper,
  ProductInfo,
  ProductImage,
  AddToCardWrapper,
  OutOfStockLayer,
} from "./styledComponents";
import { Link } from "react-router-dom";
import CurrencyContext from "../../context/currency";
import { convertPrice } from "../../utils/helpers";
import BucketIcon from "../../assets/icons/bucketIcon";
import ProductsContext from "../../context/products";

export default class SingleProduct extends React.Component {
  render() {
    let defaultSelectedAtributes = {};
    this.props.item?.attributes.forEach((att) => {
      defaultSelectedAtributes[att.name] = att.items[0]?.id;
    });
    return (
      <Link to={`products/${this.props.item.id}`}>
        <CurrencyContext.Consumer>
          {({ activeCurrency }) => {
            const { currencySymbol, amount } = convertPrice(
              this.props.item.prices,
              activeCurrency
            );
            return (
              <ProductsContext.Consumer>
                {({ addToCard, cardProducts, incrementCardProduct }) => {

                  const thisItemInProduct = cardProducts.find((prod) => {
                    const prodCopy = JSON.parse(JSON.stringify(prod));
                    if ("count" in prodCopy) delete prodCopy.count;
                    if (
                      JSON.stringify(prodCopy) === JSON.stringify({
                        ...this.props.item,
                        ...defaultSelectedAtributes,
                      })
                    ) {
                      return true;
                    }
                    return false;
                  });
                  const addToCardHandle = () => {
                    if (thisItemInProduct) {
                      incrementCardProduct(thisItemInProduct)
                    } else {
                      addToCard({
                        ...this.props.item,
                        ...defaultSelectedAtributes,
                      });
                    }

                  };
                  return (
                    <Container>
                      <ImgWrapper>
                        <ProductImage
                          src={this.props.item.gallery[0]}
                          alt="product gallery"
                        />
                        <AddToCardWrapper
                          onClick={(ev) => {
                            ev.preventDefault();
                            this.props.item.inStock && addToCardHandle();
                          }}
                        >
                          <BucketIcon color="#fff" />
                        </AddToCardWrapper>
                      </ImgWrapper>
                      <ProductInfo>
                        <span>
                          {this.props.item.brand} {this.props.item.name}
                        </span>
                        <span>
                          {currencySymbol}
                          {amount}
                        </span>
                      </ProductInfo>
                      {
                        !this.props.item.inStock && (
                          <OutOfStockLayer>
                            <span>OUT OF STOCK</span>
                          </OutOfStockLayer>

                        )
                      }
                    </Container>
                  );
                }}
              </ProductsContext.Consumer>
            );
          }}
        </CurrencyContext.Consumer>
      </Link>
    );
  }
}
