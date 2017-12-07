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
            <Route exact path="/login" render={this.getLoginBody} />
            <Route exact path="/" render={this.getBody}/>
            <Route path="/products" render={this.getBody}/>
            <Route path="*" component={NotFound}/>
          </Switch>
        </Router>
      </div>
    );
  }

  getBody() {
    return (
      <DefaultLayout>
        <h1>Привет</h1>
      </DefaultLayout>
    )
  }

  getLoginBody() {
    return <AuthLayout>Ghbdtn</AuthLayout>
  }
}