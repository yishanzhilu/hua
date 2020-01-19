/**
 * Copyright (c) 2020 Yishan Authors
 *
 * All rights reserved
 */

import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

export const TestContainer: React.FC<{ pathname?: string }> = ({
  children,
  pathname = '/',
}) => {
  return (
    <Router initialEntries={[pathname]}>
      <HelmetProvider>{children}</HelmetProvider>
    </Router>
  );
};
