import React, {Component} from 'react';

import HeaderClass from './components/HeaderClass';
import './App.css';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      answer: 'Yes'
    }
  }
  yourMethodhere(){

  }
  render (){
      return (
        <div>
          <HeaderClass username="Gobi" />
          <h1>Hello World</h1>
          <Greeting />
          <h1>Is state important to know? {this.state.answer}</h1>
        </div>
      )
  }
}

// #3
class Greeting extends Component {
  render() {
      const date = new Date()
      const hours = date.getHours()
      let timeOfDay
      
      if (hours < 12) {
          timeOfDay = "morning"
      } else if (hours >= 12 && hours < 17) {
          timeOfDay = "afternoon"
      } else {
          timeOfDay = "night"
      }
      return (
          <h1>Good {timeOfDay} to you, sir or madam!</h1>
      )
  }
}
export default App