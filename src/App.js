import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: ["?", "?", "?", "?", "?", "?", "?", "?", "?"],
      treasure: ""
    }
  }

  questionToTree = (click) =>{
    this.setState({ squares: this.state.squares.map((value,index)=> {
      if (index==click){
        return "tree"
      } else {
        return value
      }})})
  }

  componentDidMount = () => {
    let randomNum = Math.floor(Math.random () * 9)
    console.log (randomNum)
    this.setState({treasure: randomNum})

  }

  render(){
    let square = this.state.squares.map((value, index)=> {
      return (
        <Square
        value = { value }
        index = { index }
        questionToTree = {this.questionToTree}
        />
      )
    })

    return(
      <React.Fragment>
        <h1>Treasure Hunt App</h1>
        <div>
          { square }
          { this.state.treasure }
        </div>
      </React.Fragment>
    )
  }
}
export default App
