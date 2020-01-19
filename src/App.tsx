/**
 * Copyright (c) 2020 Yishan Authors
 *
 * All rights reserved
 */
import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { BasicError } from 'src/components/errors';

const Home = lazy(() => import('./pages/Home'));
const WorkspaceDashboard = lazy(() => import('./pages/workspace/Dashboard'));

export const HuaApp: React.FC = () => {
  return (
    <HelmetProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/workspace/dashboard" component={WorkspaceDashboard} />
          <Route path="*">
            <BasicError statusCode={404} />
          </Route>
        </Switch>
      </Suspense>
    </HelmetProvider>
  );
};
