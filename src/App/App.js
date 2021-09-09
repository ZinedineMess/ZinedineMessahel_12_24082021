import './App.css';
import { BrowserRouter as Router, Redirect, Switch, Route } from 'react-router-dom';
import DashBoard from '../containers/DashBoard/DashBoard';
import React, {Component} from 'react';
import { routes } from '../routes/routes';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {routes.map((route, index) => {
            if (route.path !== '*') {
              if (route.access) {
                // redirect to '/dashboard/12' when user is on '/' 
                return route.noExact
                  ? <Route key={index} path={route.path} > 
                      <Redirect to="/dashboard/12" />
                    </Route>
                  : <Route key={index} exact path={route.path} > 
                      <Redirect to="/dashboard/12" />
                    </Route>
              } else if (route.redirected) {
                // launch DashBoard when the user is on the url corresponding to the id
                return (
                  <Route key={index} path={route.path} render={({ match }) => (
                    (
                      <DashBoard id={match.params.id}/>
                    ))}/> 
                )
              } else {
                // if the path corresponds to "*", throws Error404
                return <Route key={index} path={route.path} />
              }
            }
            return <Route key={index} path={route.path} />
          })}
        </Switch>
      </Router>
    )
  }
}

export default App;
