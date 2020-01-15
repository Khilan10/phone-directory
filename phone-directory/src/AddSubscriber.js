import React, { Component } from 'react';
import Header from './Header';
import './AddSubscriber.css'

class AddSubscriber extends Component {
    render() {
        return (
            <div>
                <Header heading="Add Subsrciber" />
                <div className="component-body-container">
                    <button className="custom-btn">Back</button>
                    <form className="subscriber-form">
                        <label htmlFor="name" className="label-control" />Name:<br />
                        <input id="name" type="text" className="input-control" name="name" />
                        <br /><br />
                        <label htmlFor="phone" className="label-control" />Phone:<br />
                        <input id="phone" type="text" className="input-control" name="phone" /><br /><br />
                        <div className="subscriber-info-container">
                            <span className="subscriber-to-add-heading">Subscriber to be added:</span><br />
                            <span className="subscriber-info">Name:</span><br />
                            <span className="subscriber-info">Phone:</span><br />
                        </div>
                        <button className="custom-btn btn-add ">Add</button>
                    </form>
                </div>
            </div>
        )

    }
}
export default AddSubscriber