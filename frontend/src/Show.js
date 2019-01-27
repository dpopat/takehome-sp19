import React, { Component } from 'react'
import Counter from './Counter'

class App extends Component {
  
  render() {
    return (
      <div> 
      	<h4> Show: {this.props.name} </h4>
      	<Counter initialCount={this.props.episodes_seen}/>
      </div>
    )
  }
}

export default App
