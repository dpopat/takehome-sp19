import React, { Component } from 'react'
import Instructions from './Instructions'
import Show from './Show'
import Counter from './Counter'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shows: [
        {id: 1, name: "Game of Thrones", episodes_seen: 0},
        {id: 2, name: "Naruto", episodes_seen: 220},
        {id: 3, name: "Black Mirror", episodes_seen: 3},
      ]
    }
  }

  handleSubmit = event => {
    this.setState(state => ({
      shows: state.shows.concat({
        id: this.state.shows.length + 1,
        name: this.inputNode.value,
        episodes_seen: 0
      })
    }))
  }

  render() {
    console.log("hello") 
    return (
      <div className="App">
        <Instructions complete={{complete:true}}/>
        {this.state.shows.map(x => (
          <Show id={x.id} name={x.name} episodes_seen={x.episodes_seen} />
        ))}
        
        <p/> 

        <form>
          <label>  
            Add a New Show:
            <input 
              type="text" 
              name="showname"
              ref={node => this.inputNode = node}
            />
          </label>
          <button type="button" onClick={this.handleSubmit} >Submit</button>
        </form>

      </div>
    )
  }
}

export default App
