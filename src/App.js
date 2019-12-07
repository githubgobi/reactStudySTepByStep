import React, {Component} from 'react';

// import HeaderClass from './components/HeaderClass';
import ToDo from './components/ToDo';
import todoData from './data/todoData';

import './App.css';

class App extends Component{
  constructor(){
    super()
    this.state = {
      // answer: 'Yes',
      // isLoggedIn: false,
      todo:todoData,
      count:0
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(id){
    // this.setState(prevState=>{
    //   return {
    //     count:prevState.count+1
    //   }
    // })
    console.log("Changed "+id)
    this.setState(prevState =>{
        const updatedTodos = prevState.todo.map( todo =>{
          if(todo.id === id){
            // console.log(!todo.completed)
            // todo.completed = !todo.completed
            return {
              ...todo,
              completed: !todo.completed
            }
          }
          return todo
        })
        return {
          todo:updatedTodos
        }
    })

  }
  render (){
      // let wordDisplay

      // if(this.state.isLoggedIn){
      //   wordDisplay = "in"
      // }else{
      //   wordDisplay = "out"
      // }
      const todoItems = this.state.todo.map(item => <ToDo key={item.id} item={item} handleClick={this.handleClick}/>)
      return (
        // <div>
        //   <HeaderClass username="Gobi" />
        //   <h1>Hello World</h1>
        //   <Greeting />
        //   <h1>Is state important to know? {this.state.answer}</h1>
        //   <h1>You are currently logged {wordDisplay}</h1>
        // </div>
        <div className="todo-list">
          {todoItems}
          {/* <img onMouseOver={()=> console.log("Hovered!")} src="https://www.fillmurray.com/200/100"/>
            <br />
            <br />
            <button onClick={handleCLick}>Click</button> */}
            {/* <h1>{this.state.count}</h1>
            <button onClick={this.handleClick}>Change!</button> */}
        </div>
      )
  }
}

// #3
// class Greeting extends Component {
//   render() {
//       const date = new Date()
//       const hours = date.getHours()
//       let timeOfDay
      
//       if (hours < 12) {
//           timeOfDay = "morning"
//       } else if (hours >= 12 && hours < 17) {
//           timeOfDay = "afternoon"
//       } else {
//           timeOfDay = "night"
//       }
//       return (
//           <h1>Good {timeOfDay} to you, sir or madam!</h1>
//       )
//   }
// }
export default App