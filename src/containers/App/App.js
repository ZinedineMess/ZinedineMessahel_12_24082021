import './App.css';
import { BrowserRouter as Router, Redirect, Switch, Route } from 'react-router-dom';
import DashBoard from '../DashBoard/DashBoard';
import Error404 from '../../components/Error404/Error404';
import React, {Component} from 'react';

class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/dashboard/12" />
          </Route>
          <Route exact path="/dashboard/:id" render={({ match }) => (
            (
              <DashBoard id={match.params.id}/>
            ))}
          />
          <Route path="*">
            <Error404 />
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App;
