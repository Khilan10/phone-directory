import React, { Component } from 'react';
import Header from './Header';
import './ShowSubscribers.css'
import { Link } from 'react-router-dom'

class ShowSubscribers extends Component {

  deleteHandler = (id) => {
    this.props.deleteSubscriberHandler(id);
  }

  render() {
    return (
      <div >
        <Header heading="Phone Directory" />
        <div className="component-body-container ">
          <Link to="/add">
            <button className="custom-btn  btn-add">Add</button>
          </Link>
          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>
          {
            this.props.subscribersList.map(sub => {
              return <div className="grid-container" key={sub.id}>
                <span className="grid-item">{sub.name}</span>
                <span className="grid-item">{sub.phone}</span>
                <div className="grid-item">
                  <button className="custom-btn btn-delete" onClick={this.deleteHandler.bind(this, sub.id)}>Delete</button>
                </div>
              </div>
            })
          }
        </div>
      </div>
    );
  }
}

export default ShowSubscribers;
