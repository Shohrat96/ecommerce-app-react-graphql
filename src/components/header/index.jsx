import React from "react";
import BucketIcon from "../../assets/icons/bucketIcon";
import CurrencySelect from "../currencySelect";
import Navigation from "./navigation";
import {
  Container,
  CurrencyAndBucket,
  BucketWrapper,
  CardItemCount,
} from "./styledComponents";
import { withRouter } from "react-router";
import BucketDropdown from "../BucketDropdown";
import ProductsContext from "../../context/products";
import LogoIcon from "../../assets/icons/logoIcon";
import { Overlay } from "../BucketDropdown/styledComponents";

export default withRouter(
  class Header extends React.Component {
    static contextType = ProductsContext;
    state = {
      showCardDropdown: false,
    };
    render() {
      const { cardProducts } = this.context;
      const totalCardProductsCount = cardProducts
        .map((item) => item.count)
        ?.reduce((a, b) => a + b, 0);
      return (
        <>
          <Container>
            <Navigation {...this.props.navContext} />
            <LogoIcon />
            <CurrencyAndBucket>
              <CurrencySelect onClick={(e) => e.stopPropagation()} />
              <BucketWrapper
                onClick={() => this.setState({ showCardDropdown: true })}
              >
                <BucketIcon />
                {cardProducts?.length > 0 && (
                  <CardItemCount>{totalCardProductsCount}</CardItemCount>
                )}
              </BucketWrapper>
            </CurrencyAndBucket>
            {this.state.showCardDropdown && (
              <BucketDropdown
                outsideClick={() => this.setState({ showCardDropdown: false })}
                viewBugHandler={() => {
                  this.props.history.push("/cart");
                  this.setState({ showCardDropdown: false });
                }}
              />
            )}
          </Container>
          {this.state.showCardDropdown && <Overlay />}
        </>
      );
    }
  }
);
