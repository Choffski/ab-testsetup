import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { loaded: false }
  }
  componentDidMount() {
    this.setState({ loaded: true })
  }

  render() {
    return this.state.loaded ? <div> React App </div> : null
  }
}
