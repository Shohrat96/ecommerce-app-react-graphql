import { Query } from "@apollo/client/react/components";
import React from "react";
import CurrencyContext from "../../context/currency";
import { GET_CURRENCIES } from "../../graphql/queries";
import { Container, DropDown } from "./styledComponents";

class CurrencySelect extends React.Component {
  static contextType = CurrencyContext;
  render() {
    const { activeCurrency, setActiveCurrency } = this.context;
    const {style} = this.props;
    return (
      <Query query={GET_CURRENCIES}>
        {({ loading, error, data }) => {
          if (loading) return <div>loading...</div>;
          if (error) return <div>error.</div>;
          
          return (
            <Container style={{...style}} {...this.props}>
              <DropDown
                value={activeCurrency}
                onChange={(ev) => {
                setActiveCurrency(ev.target.value)
              }}>
                {data.currencies.map((item) => (
                  <option value={item.label} key={item.label}>
                    <div>
                      <span>{item.symbol} </span>
                      <span>{item.label}</span>
                    </div>
                  </option>
                ))}
              </DropDown>
            </Container>
          );
        }}
      </Query>
    );
  }
}

export default CurrencySelect;
