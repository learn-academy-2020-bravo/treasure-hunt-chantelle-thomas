import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: ["?", "?", "?", "?", "?", "?", "?", "?", "?"],
      treasure: "",
      bomb: "",
      counter: 5
    }
  }

  questionToTree = (click) =>{
    this.setState({ squares: this.state.squares.map((value,index)=> {
      if (click === this.state.treasure && index === click) {
        return "treasure"
      } else if (click === this.state.bomb && index === click){
        return "bomb"
      } else if (index === click){
        return "tree"
      } else {
        return value
      }})})
      if (this.state.treasure === click) {
        alert("You Win")
      }
      if (this.state.bomb === click)  {
        alert("You Lose")
      }
    this.setState({ counter: this.state.counter - 1})
    if (this.state.counter === 1 && click != this.state.treasure && click != this.state.bomb) {
      alert("You Lose")
    }
  }

  componentDidMount = () => {
    let randomNum = Math.floor(Math.random () * 9);
    let secondNum = randomNum;
    while (randomNum === secondNum) {
      secondNum = Math.floor(Math.random () * 9);
    }
    this.setState({treasure: randomNum, bomb: secondNum})
  }

  restart = () => {
    let randomNum = Math.floor(Math.random () * 9);
    let secondNum = randomNum;
    while (randomNum === secondNum) {
      secondNum = Math.floor(Math.random () * 9);
    }
    this.setState({ squares: ["?", "?", "?", "?", "?", "?", "?", "?", "?"], treasure: randomNum, bomb: secondNum, counter: 5 })
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
          <button onClick = { this.restart }> Restart </button>
          { this.state.counter }
          { square }
        </div>
      </React.Fragment>
    )
  }
}
export default App
