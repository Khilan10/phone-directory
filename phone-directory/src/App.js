import React from 'react';
import Header from './Header';
import './App.css'

function App() {
  return (
    <div class="component-body-container ">
      <Header />
      <button className="custom-btn  btn-add">Add</button>
      <div className="grid-container heading-container">
        <span className="grid-item name-heading">Name</span>
        <span className="grid-item phone-heading">Phone</span>
      </div>
    </div>
  );
}

export default App;
