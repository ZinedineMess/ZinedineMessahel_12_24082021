import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DashBoard from '../DashBoard/DashBoard';
import Error404 from '../../components/Error404/Error404';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <DashBoard />
        </Route>
        <Route path="*">
          <Error404 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
