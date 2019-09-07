import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import { Home } from './component/pages/Home';
import { About } from './component/pages/About';
import { Projects } from './component/pages/Project';
import { Work } from './component/pages/Work';

const ScrollToTopComponent = ({ children, location: { pathname } }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children || null;
};

const ScrollToTop = withRouter(ScrollToTopComponent);

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/works" exact component={Work} />
          <Route path="/works/:id" component={Projects} />
          <Route path="/about/" exact component={About} />
        </Switch>
      </ScrollToTop>
    </Router>
  );
}

export default App;
