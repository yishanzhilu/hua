/**
 * Copyright (c) 2020 Yishan Authors
 *
 * All rights reserved
 */

import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, waitForDomChange } from '@testing-library/react';

import { HuaApp } from './App';

describe('App', () => {
  it('check routes', async () => {
    const history = createMemoryHistory();
    history.push('/');
    const { queryByText } = render(
      <Router history={history}>
        <HuaApp />
      </Router>
    );
    expect(queryByText('Loading...')).not.toBeNull();
    await waitForDomChange();
    expect(queryByText('Home')).not.toBeNull();
    history.push('/workspace/dashboard');
    await waitForDomChange();
    expect(queryByText('Dashboard')).not.toBeNull();
    history.push('/some/bad/route');
    await waitForDomChange();
    expect(document.title).toEqual('404 · 移山');
  });
});
