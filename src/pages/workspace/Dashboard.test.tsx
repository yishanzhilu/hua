/**
 * Copyright (c) 2020 Yishan Authors
 *
 * All rights reserved
 */

import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from './Dashboard';

describe('Dashboard', () => {
  it('should render', () => {
    const { queryByText } = render(<Dashboard />);
    expect(queryByText('Dashboard')).not.toBeNull();
  });
});
