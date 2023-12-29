// dependency - third
import React from 'react'
// dependency - Local
import Home from './page/Home'
import About from './page/About'

export class App2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = { route: window.location.hash.substr(1) }
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({ route: window.location.hash.substr(1) })
    })
  }

  render() {
    let Component
    switch (this.state.route) {
      case '/about':
        Component = About
        break
      default:
        Component = Home
    }

    return (
      <div>
        <header>
          <ul>
            <li>
              <a href="#/">Home</a>
            </li>
            <li>
              <a href="#/about">About</a>
            </li>
          </ul>
        </header>
        <div>
          <Component />
        </div>
      </div>
    )
  }
}

export default App2
