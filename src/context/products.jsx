import React, { Component } from "react";

const ProductsContext = React.createContext();

class ProductsProvider extends Component {
  // Context state
  state = {
    products: [],
    cardProducts: localStorage.getItem("cardProducts")
      ? JSON.parse(localStorage.getItem("cardProducts"))
      : [],
  };

  // products actions
  setProducts = (products) => {
    this.setState((prevState) => ({
      ...prevState,
      products,
    }));
  };
  // card products actions
  addToCard = (product) => {
    this.setState((prevState) => ({
      ...prevState,
      cardProducts: [
        ...prevState.cardProducts,
        {
          ...product,
          count: 1,
        },
      ],
    }));
  };
  incrementCardProduct = (product) => {
    this.setState((prevState) => ({
      ...prevState,
      cardProducts: prevState.cardProducts.map((item) => {
        if (JSON.stringify(item) === JSON.stringify(product)) {
          return {
            ...item,
            count: item.count + 1,
          };
        }
        return item;
      }),
    }));
  };
  removeCardProduct = (product) => {
    this.setState((prevState) => {
      const productFound = prevState.cardProducts.find(
        (item) => JSON.stringify(item) === JSON.stringify(product)
      );
      if (productFound.count === 1) {
        return {
          ...prevState,
          cardProducts: prevState.cardProducts.filter(
            (item) => JSON.stringify(item) !== JSON.stringify(product)
          ),
        };
      } else {
        return {
          ...prevState,
          cardProducts: prevState.cardProducts.map((item) => {
            if (JSON.stringify(item) === JSON.stringify(product)) {
              return {
                ...item,
                count: item.count - 1,
              };
            }
            return item;
          }),
        };
      }
    });
  };
  componentDidUpdate() {
    localStorage.setItem(
      "cardProducts",
      JSON.stringify(this.state.cardProducts)
    );
  }
  render() {
    const { children } = this.props;
    const { products, cardProducts } = this.state;
    const { setProducts, addToCard, removeCardProduct, incrementCardProduct } =
      this;

    return (
      <ProductsContext.Provider
        value={{
          products,
          setProducts,
          cardProducts,
          addToCard,
          removeCardProduct,
          incrementCardProduct,
        }}
      >
        {children}
      </ProductsContext.Provider>
    );
  }
}

export default ProductsContext;

export { ProductsProvider };
