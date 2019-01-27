import React, { Component } from 'react'

class Counter extends Component {

  constructor(props) {
  	super(props)
  	this.state = {
  		count: 0,
  		count: this.props.initialCount
  	}
  }

  incrementCount = () => {
  	this.setState(state => ({count: state.count + 1}))
  }

  decrementCount = () => {
  	if (this.state.count > 0) {
  		this.setState(state => ({count: state.count - 1}))
  	}
  }

  render() {
    return (
      <div>
	    Episodes Seen: {this.state.count}
		<button onClick={this.incrementCount}>Increment</button>
		<button onClick={this.decrementCount}>Decrement</button>
      </div>
    )
  }
}

export default Counter
