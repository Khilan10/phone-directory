import React from 'react';
import Header from './Header';
import './App.css'

let subscribers = [
  {
    id: 1,
    name: 'Khilan Mahajan',
    phone: 9999999999
  },
  {
    id: 2,
    name: 'Akshit Mahajan',
    phone: 8888888888
  }
]

function App() {

  return (
    <div className="component-body-container ">
      <Header />
      <button className="custom-btn  btn-add">Add</button>
      <div className="grid-container heading-container">
        <span className="grid-item name-heading">Name</span>
        <span className="grid-item phone-heading">Phone</span>
      </div>
      {
        subscribers.map(sub => {
          return <div className="grid-container" key={sub.id}>
            <span className="grid-item">{sub.name}</span>
            <span className="grid-item">{sub.phone}</span>
            <button className="custom-btn btn-delete">Delete</button>
          </div>
        })
      }
    </div>
  );
}

export default App;
