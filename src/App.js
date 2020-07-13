import React from "react";

import homePage from "./pages/homePage.js";
import Home from "./pages/Home.js";
import Portfolio from "./pages/Portfolio.js";
import Contact from "./pages/Contact.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={homePage} />
          <Route exact path='/about' component={Home} />
          <Route exact path='/portfolio' component={Portfolio} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
