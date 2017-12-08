import React from 'react';
import Meteor from 'meteor/meteor';
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

import Operations from '../Operations'


export default class SiteHeader extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <div>
              <Menu>
                <Menu.Item as={NavLink} to='/profile'>
                  Profile
                </Menu.Item>
                <Menu.Item as={NavLink} to='/operations'>
                  Operations
                </Menu.Item>
                <Menu.Item as={NavLink} to='/account'>
                  Account
                </Menu.Item>
                <Menu.Item as={NavLink} to='/stat'>
                  Stat
                </Menu.Item>
                <Menu.Menu position='right'>
                  <Menu.Item name='logout' onClick={this.handleItemClick} />
                </Menu.Menu>
              </Menu>
            </div>
            <div>
              <Switch>
                <Route path = '/profile' render = {this.getBody} />
                <Route path = '/operations' component = { Operations } />
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

  handleItemClick() {
    console.log('-----', 'log out')
  }

  getBody = ({ match }) => {
    return <h1>{ match.path }</h1>
  }
}
