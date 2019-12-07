import React from 'react';
// import ReactDom from 'react-dom';

// import Joke from './components/Joke';
// import jokeData from './data/jokeData';


// import Product from './components/Product';
// import productData from './data/productData';


import Todo from './components/ToDo';
import todoData from './data/todoData';

import './App.css';

function App(){
  // const jokeComponents = jokeData.map(joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} /> )
  // const productComponents = productData.map(product => <Product key={product.id} product={product} /> )
  const todoItems = todoData.map(item => <Todo key={item.id} item={item}/>)
  return (
    <div className="todo-list">
           {/* {jokeComponents}   
           {productComponents} */}
           {todoItems}
    </div>
  )
}
export default App