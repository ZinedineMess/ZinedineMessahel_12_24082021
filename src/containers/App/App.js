import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import DashBoard from '../DashBoard/DashBoard';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <DashBoard/>
        </Route>
        <Route path="*"></Route>
      </Switch>
    </Router>
  );
}

export default App;
