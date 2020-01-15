import React, { Component } from 'react';
import Header from './Header';
import './AddSubscriber.css';
import { Link } from 'react-router-dom';

class AddSubscriber extends Component {

    constructor() {
        super();
        this.state = {
            id: 0,
            name: '',
            phone: '',
        }
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.addSubscriberHandler(this.state);
        this.setState({
            id: 0,
            name: '',
            phone: ''
        });
        this.props.history.push('/');
    }

    inputChangedHandler = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    render() {
        const { name, phone } = this.state;
        return (
            <div>
                <Header heading="Add Subsrciber" />
                <div className="component-body-container">
                    <Link to="/">
                        <button className="custom-btn btn-back">Back</button>
                    </Link>
                    <form className="subscriber-form" onSubmit={this.onFormSubmit.bind(this)}>
                        <label htmlFor="name" className="label-control" />Name:<br />
                        <input id="name" type="text" className="input-control" name="name" onChange={this.inputChangedHandler} />
                        <br /><br />
                        <label htmlFor="phone" className="label-control" />Phone:<br />
                        <input id="phone" type="text" className="input-control" name="phone"
                            onChange={this.inputChangedHandler} /><br /><br />
                        <div className="subscriber-info-container">
                            <span className="subscriber-to-add-heading">Subscriber to be added:</span><br />
                            <span className="subscriber-info">Name: {this.state.name}</span><br />
                            <span className="subscriber-info">Phone: {this.state.phone}</span><br />
                        </div>
                        <button className="custom-btn btn-add ">Add</button>
                    </form>
                </div>
            </div >
        )

    }
}
export default AddSubscriber