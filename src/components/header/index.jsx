import React from "react"
import BucketIcon from "../../assets/icons/bucketIcon";
import CurrencySelect from "../currencySelect";
import Navigation from "./navigation";
import { Container, CurrencyAndBucket, BucketWrapper, CardItemCount } from "./styledComponents";
import {withRouter} from 'react-router'
import BucketDropdown from "../BucketDropdown";
import ProductsContext from "../../context/products";
import LogoIcon from "../../assets/icons/logoIcon";

export default withRouter(class Header extends React.Component {
  static contextType = ProductsContext;

  render() {
    const { onBucketClick, showCardDropdown, hideBugDropdown } = this.props;
    const { cardProducts } = this.context;
    const totalCardProductsCount = cardProducts.map(item=>item.count)?.reduce((a,b) => a+b, 0);
    return (
      <Container>
        <Navigation {...this.props.navContext} />
        <LogoIcon/>
        <CurrencyAndBucket>
          <CurrencySelect onClick={(e) => e.stopPropagation()} />
          <BucketWrapper onClick={() => onBucketClick()}>
            <BucketIcon/>
            {
              cardProducts?.length > 0 && (
                <CardItemCount>{totalCardProductsCount}</CardItemCount>
              )
            }
          </BucketWrapper>
        </CurrencyAndBucket>
        {
            showCardDropdown && (
              <BucketDropdown
                outsideClick={() => {
                  hideBugDropdown();
                }}
                viewBugHandler={() => {
                this.props.history.push('/cart');
                this.props.hideBugDropdown();
              }} />
            )
        }
      </Container>
    )
  }
})