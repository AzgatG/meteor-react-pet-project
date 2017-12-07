import React from 'react';
import Meteor from 'meteor/meteor';
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom'


export default class SiteHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <div>
              <div><NavLink activeStyle = {{color: 'red'}} to ='/profile'>Profile</NavLink></div>
              <div><NavLink activeStyle = {{color: 'red'}} to ='/operations'>Operations</NavLink></div>
              <div><NavLink activeStyle = {{color: 'red'}} to ='/account'>Account</NavLink></div>
              <div><NavLink activeStyle = {{color: 'red'}} to ='/stat'>Stat</NavLink></div>
            </div>
            <div>
              <Switch>
                <Route path = '/profile' render = {this.getBody} />
                <Route path = '/operations' render = {this.getBody} />
                <Route path = '/account' render = {this.getBody} />
                <Route path = '/stat' render = {this.getBody} />
              </Switch>
            </div>
          </div>
         </Router>
         { this.props.children }
      </div>
    );
  }

  getBody = ({ match }) => {
    return <h1>{ match.path }</h1>
  }
}
