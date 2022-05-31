import React from "react";
import { ThemeProvider } from "styled-components";
import { Container, Content } from "./AppStyles";
import Header from "./components/header";
import HomePage from "./pages/Home";
import { theme } from "./theme";
import { Route } from "react-router-dom";
import SingleProduct from "./pages/SingleProduct";
import NavigationContext from "./context/navigation";
import CardProductsPage from "./pages/CardProducts";
import { Overlay } from "./components/BucketDropdown/styledComponents";

class App extends React.Component {
  static contextType = NavigationContext;
  state = {
    showCardDropdown: false,
  };
  render() {
    const { activeNavName } = this.context;
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <Header
            showCardDropdown={this.state.showCardDropdown}
            onClick={() => {
              this.setState({ showCardDropdown: false });
            }}
            hideBugDropdown={() => this.setState({showCardDropdown: false})}
            onBucketClick={(ev) => {
              ev.stopPropagation();
              this.setState({
                showCardDropdown: true,
              });
            }}
            navContext={this.context}
          />
          <Content>
            <Route
              path="/"
              exact
              component={(props) => (
                <HomePage categoryName={activeNavName} {...props} />
              )}
            />
            <Route
              path="/products/:id"
              component={(props) => <SingleProduct {...props} />}
            />
            <Route path="/cart" component={() => <CardProductsPage />} />
            {this.state.showCardDropdown && (
              <Overlay
                onClick={() => this.setState({ showCardDropdown: false })}
              />
            )}
          </Content>
        </Container>
      </ThemeProvider>
    );
  }
}

export default App;
