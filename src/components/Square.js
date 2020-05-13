import React, { Component } from 'react'

class Square extends Component{
  
  // tellMeTheIndex = () => { 
  //   return alert(this.props.index)
  // }



  render(){
    return(
      <React.Fragment>
        <div id = 'square'
          onClick = {() => this.props.questionToTree(this.props.index)}>
          {this.props.value}
          {/* index
          function that alerts the index we passed */}
        </div>
      </React.Fragment>
    )
  }
}
export default Square
