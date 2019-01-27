import React, { Component } from 'react'

class Counter extends Component {

  constructor(props) {
  	super(props)
  	this.state = {count: 0}
  }

  incrementCount = () => {
  	this.setState(state => ({count: state.count + 1}))
  }

  decrementCount = () => {
  	this.setState(state => ({count: state.count - 1}))
  }

  render() {
    return (
      <div>
        <p> Count: {this.state.count} </p>
        <button onClick={this.incrementCount}>Increment</button>
        <button onClick={this.decrementCount}>Decrement</button>
      </div>
    )
  }
}

export default Counter
