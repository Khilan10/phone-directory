import React, { Component } from 'react';
import Header from './Header';
import './App.css'
import { tsConstructorType } from '@babel/types';

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



class App extends Component {
  constructor() {
    super();
    this.state = {
      subscribersListToShow: []
    }
  }

  render() {
    return (
      <div >
        <Header heading="Phone Directory" />
        <div className="component-body-container ">
          <button className="custom-btn  btn-add">Add</button>
          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>
          {
            this.state.subscribersListToShow.map(sub => {
              return <div className="grid-container" key={sub.id}>
                <span className="grid-item">{sub.name}</span>
                <span className="grid-item">{sub.phone}</span>
                <div className="grid-item">
                  <button className="custom-btn btn-delete">Delete</button>
                </div>
              </div>
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
