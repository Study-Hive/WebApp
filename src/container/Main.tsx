import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from "../pages/Home/Home"
import Topic from "../pages/Topic/Topic"
import Chatroom from '../pages/Chatroom/Chatroom';

function Main() {

    return (
        <Router>
            <Navbar />

            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/topic' exact component={Topic} />
                <Route path='/chatroom' exact component={Chatroom} />
            </Switch>

        </Router>
    )
}

export default Main
