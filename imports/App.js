import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
// components
import DefaultLayout from './ui/loyouts/DefaultLayout'
import AuthLayout from './ui/loyouts/AuthLayout'
import NotFound from './ui/components/_common/NotFound'


export default class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/" component={ DefaultLayout }/>
            {/*<Route component={NotFound}/>*/}
          </Switch>
        </Router>
      </div>
    );
  }
}