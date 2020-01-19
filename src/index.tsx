/**
 * Copyright (c) 2020 Yishan Authors
 *
 * All rights reserved
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import '@yishanzhilubp/core/lib/css/blueprint.css';
import { FocusStyleManager } from '@yishanzhilubp/core';

import { HuaApp } from './App';
import * as serviceWorker from './serviceWorker';

FocusStyleManager.onlyShowFocusOnTabs();

ReactDOM.render(
  <BrowserRouter>
    <HuaApp />
  </BrowserRouter>,
  document.getElementById('hua-root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
