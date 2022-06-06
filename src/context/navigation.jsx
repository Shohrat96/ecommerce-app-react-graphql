import React, { Component } from 'react'

const NavigationContext = React.createContext()

class NavigationProvider extends Component {
  // Context state
  state={
    activeNavName: localStorage.getItem("navigation")
    ? JSON.parse(localStorage.getItem("navigation"))
    : 'all', //possible [all, tech, clothes, productId]
  }

  // products actions
  setActiveNavName = (name) => {
    this.setState((prevState) => (
      {
        ...prevState,
        activeNavName: name,
      }
    ))
  }
  componentDidUpdate() {
    localStorage.setItem(
      "navigation",
      JSON.stringify(this.state.activeNavName)
    );
  }

  render() {
    const { children } = this.props
    const { activeNavName } = this.state
    const { setActiveNavName } = this

    return (
      <NavigationContext.Provider
        value={{
          activeNavName,
          setActiveNavName
        }}
      >
        {children}
      </NavigationContext.Provider>
    )
  }
}

export default NavigationContext

export { NavigationProvider }
