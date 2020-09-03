import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Countries from './components/Countries/Countries';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './components/NoMatch/NoMatch';
import CountryDetails from './components/CountryDetails/CountryDetails';


function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/">
            <Countries/>
          </Route>
          <Route path="/countries">
            <Countries/>
          </Route>
          <Route path="/country/:name">
            <CountryDetails/>
          </Route>
          <Route path="*">
            <NoMatch/>
          </Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
