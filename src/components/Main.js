import React, { Component } from 'react';
import Home from './Home';
import AddBirthday from './AddBirthday'
import CalenderEvents from './CalendarEvents'
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    render() 
    {
        const Homepage = () => {
            return (
              <Home/>
            )
        }
        const Insert = () => {
            return (
                <AddBirthday />
            )
        }
        const Birthday = () => {
            return (
                <CalenderEvents />
            )
        }

    return (
        <div>
            <Switch>
                <Route path="/home" component={Homepage} />
                <Route path="/addBirthday" component = {Insert} />
                <Route path="/calendar" component = {Birthday} />
                <Redirect to="/home" />
            </Switch>
        </div>
    );
    }
}

export default Main