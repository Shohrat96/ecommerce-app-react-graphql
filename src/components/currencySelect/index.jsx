import { Query } from "@apollo/client/react/components";
import React from "react";
import DownArrowIcon from "../../assets/icons/downArrowIcon";
import UpArrowIcon from "../../assets/icons/upArrowIcon";
import CurrencyContext from "../../context/currency";
import { GET_CURRENCIES } from "../../graphql/queries";
import {
  Container,
  DropDown,
  Label,
  LabelWrapper,
  ListWrapper,
  CurOption,
} from "./styledComponents";

class CurrencySelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showOptionsList: false,
    };
    this.currencyRef = React.createRef();
  }
  static contextType = CurrencyContext;

  setCurrencyHandler = (currencyLabel) => {
    const { setActiveCurrency } = this.context;
    setActiveCurrency(currencyLabel);
    this.setState({
      showOptionsList: false,
    });
  };
  handleOutsideClick = (event) => {
    if (
      this.currencyRef.current &&
      !this.currencyRef.current.contains(event.target)
    ) {
      this.setState({
        showOptionsList: false,
      });
    }
  };
  componentDidMount() {
    document.addEventListener("click", this.handleOutsideClick);
  }
  componentWillUnmount() {
    document.removeEventListener("click", this.handleOutsideClick);
  }
  render() {
    const { activeCurrency, setCurrencies } = this.context;
    return (
      <Query query={GET_CURRENCIES} onCompleted={(data) => setCurrencies(data?.currencies)}>
        {({ loading, error, data }) => {
          if (loading) return <div>loading...</div>;
          if (error) return <div>error.</div>;
          const dropDownLabel = data?.currencies?.find(
            (cur) => cur.label === activeCurrency
          )?.symbol;
          // setCurrencies(data?.currencies);
          return (
            <Container {...this.props}>
              <DropDown>
                <LabelWrapper
                  onClick={(e) => {
                    e.preventDefault();
                    this.setState({
                      showOptionsList: !this.state.showOptionsList,
                    });
                  }}
                >
                  <Label>{dropDownLabel}</Label>
                  {this.state.showOptionsList ? (
                    <UpArrowIcon />
                  ) : (
                    <DownArrowIcon />
                  )}
                </LabelWrapper>
                {this.state.showOptionsList && (
                  <ListWrapper ref={this.currencyRef}>
                    {data?.currencies?.map((cur) => (
                      <CurOption
                        key={cur.label}
                        onClick={() => this.setCurrencyHandler(cur.label)}
                      >
                        {cur.symbol} {cur.label}
                      </CurOption>
                    ))}
                  </ListWrapper>
                )}
              </DropDown>
            </Container>
          );
        }}
      </Query>
    );
  }
}

export default CurrencySelect;
