import React from "react";
import { 
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Home from './Home';
import Survey from './Survey';

import * as routes from '../constants/routes';

const App = () => (
  <Router>
    <div>
      <Route exact path={routes.HOME} component={() => <Home />} />
      <Route exact path={routes.SURVEY} component={() => <Survey />} />
    </div>
  </Router>
);

export default App;
