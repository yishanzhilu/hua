/**
 * Copyright (c) 2019 Yishan Authors
 *
 * All rights reserved
 */
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { BasicError } from 'src/components/errors';
import BasicLayout from 'src/components/layouts/BasicLayout';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const WorkspaceDashboard = lazy(() => import('./pages/workspace/Dashboard'));

const App: React.FC = () => {
  return (
    <Router>
      <BasicLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/workspace/dashboard" component={WorkspaceDashboard} />
            <Route path="*">
              <BasicError statusCode={404} />
            </Route>
          </Switch>
        </Suspense>
      </BasicLayout>
    </Router>
  );
};

export default App;
