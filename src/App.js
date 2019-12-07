import React from 'react';
// import ReactDom from 'react-dom';

import Joke from './components/Joke';
import jokeData from './data/jokeData';


import Product from './components/Product';
import productData from './data/productData';

function App(){
  const jokeComponents = jokeData.map(joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} /> )
  const productComponents = productData.map(product => <Product key={product.id} product={product} /> )
  return (
    <div>
           {jokeComponents}   
           {productComponents}
    </div>
  )
}
export default App