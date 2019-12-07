import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Header from './components/Header';
// import MainContent from './components/MainContent';
// import Footer from './components/Footer';
import ToDo from './components/ToDo';

function App() {

  return (
      <div className="todo-list">
        <ToDo />
        <ToDo />
        <ToDo />
        <ToDo />
      </div>
  )
}

export default App;
