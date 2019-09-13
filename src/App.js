import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";

const Home = lazy(() => import('./component/pages/Home'));
const Work = lazy(() => import('./component/pages/Work'));
const Projects = lazy(() => import('./component/pages/Project'));

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
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/works" exact component={Work} />
            <Route path="/works/:id" component={Projects} />
          </Switch>
        </Suspense>
      </ScrollToTop>
    </Router>
  );
}

export default App;
