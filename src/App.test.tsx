/**
 * Copyright (c) 2019 Yishan Authors
 *
 * All rights reserved
 */
import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

it('App match snapshot', () => {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
});
