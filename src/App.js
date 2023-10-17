import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CombinedFormComponent from './CombinedFormComponent';
import CategorySelectionPage from './CategorySelectionPage';
import Home from './pages/Home';  // Adjust the import path
import NextPage from './pages/NextPage';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={CombinedFormComponent} />
          <Route path="/category-selection" component={CategorySelectionPage} />
          <Route path="/home" component={Home} /> {/* Adjust the route path */}
          <Route path="/next-page" component={NextPage} />

        </Switch>
      </div>
    </Router>
  );
};


export default App;


