import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/allProducts">
            <Home />
          </Route>
          <Route exact path="/dashboard">
            <Home />
          </Route>
          <Route exact path="/login">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
