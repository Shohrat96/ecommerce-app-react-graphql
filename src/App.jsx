import React from "react";
import { ThemeProvider } from "styled-components";
import { Container, Content } from "./AppStyles";
import Header from "./components/header";
import HomePage from "./pages/Home";
import { theme } from "./theme";
import { Route, Switch } from "react-router-dom";
import SingleProduct from "./pages/SingleProduct";
import NavigationContext from "./context/navigation";
import CardProductsPage from "./pages/CardProducts";

class App extends React.Component {
  static contextType = NavigationContext;
  
  render() {
    const { activeNavName } = this.context;
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <Header navContext={this.context} />
          <Content>
            <Switch>
              <Route
                path="/products/:id"
                component={(props) => <SingleProduct {...props} />}
              />
              <Route path="/cart" component={() => <CardProductsPage />} />
              <Route
                path="/*"
                exact
                component={(props) => (
                  <HomePage categoryName={activeNavName} {...props} />
                )}
              />
            </Switch>
          </Content>
        </Container>
      </ThemeProvider>
    );
  }
}

export default App;
