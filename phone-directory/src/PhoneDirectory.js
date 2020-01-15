import React, { Component } from 'react';
import AddSubscriber from './AddSubscriber';
import ShowSubscribers from './ShowSubscribers';
import { BrowserRouter as Router, Route } from 'react-router-dom'

class PhoneDirectory extends Component {

    constructor() {
        super();
        this.state = {
            subscribersList: [
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
        }
    }
    addSubscriberHandler = (newSubscriber) => {
        const subscribersList = this.state.subscribersList;
        if (subscribersList.length > 0) {
            newSubscriber.id = (subscribersList[subscribersList.length - 1].id) + 1;
        } else {
            newSubscriber.id = 1;
        }
        subscribersList.push(newSubscriber);
        this.setState({ subscribersList: subscribersList });
    }
    deleteSubscriberHandler = (id) => {
        const subscribersList = this.state.subscribersList;
        for (let i = 0; i < subscribersList.length; i++) {
            if (subscribersList[i].id === id) {
                subscribersList.splice(i, 1);
            }
            this.setState({ subscribersList: subscribersList })
        }
    }

    render() {
        return (
            // <AddSubscriber addSubscriberHandler={this.addSubscriberHandler} />
            // <ShowSubscribers subscribersList={this.state.subscribersList} />
            <Router>
                <Route exact path="/" render={(props) => <ShowSubscribers {...props} subscribersList={this.state.subscribersList} deleteSubscriberHandler={this.deleteSubscriberHandler} />}></Route>
                <Route exact path="/add" render={
                    ({ history }, props) => <AddSubscriber history={history}{...props} addSubscriberHandler={this.addSubscriberHandler} />
                }></Route>
            </Router>
        )
    }
}
export default PhoneDirectory;