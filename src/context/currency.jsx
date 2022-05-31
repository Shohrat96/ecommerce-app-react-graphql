import React, { Component } from 'react'

const CurrencyContext = React.createContext()

class CurrencyProvider extends Component {
  // Context state
  state={
    activeCurrency: 'USD', //possible [USD, GBP, AUD, JPY, RUB]
    currencies: [],
  }

  setActiveCurrency = (label) => {
    this.setState((prevState) => (
      {
        ...prevState,
        activeCurrency: label,
      }
    ))
  }

  setCurrencies = (curArr) => {
    this.setState((prevState) => ({
      ...prevState,
      currencies: curArr,
    }))
  }
  render() {
    const { children } = this.props
    const { activeCurrency, currencies } = this.state
    const { setActiveCurrency, setCurrencies } = this

    return (
      <CurrencyContext.Provider
        value={{
          activeCurrency,
          setActiveCurrency,
          currencies,
          setCurrencies
        }}
      >
        {children}
      </CurrencyContext.Provider>
    )
  }
}

export default CurrencyContext

export { CurrencyProvider }
