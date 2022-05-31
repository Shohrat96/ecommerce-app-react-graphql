import React, { Component } from 'react'

const NavigationContext = React.createContext()

class NavigationProvider extends Component {
  // Context state
  state={
    activeNavName: 'all' //possible [all, tech, clothes]
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
