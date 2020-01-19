/**
 * Copyright (c) 2020 Yishan Authors
 *
 * All rights reserved
 */

import React from 'react';
import { render } from '@testing-library/react';
import { TestContainer } from 'src/utils/TestContainer';

import { BasicLayout } from './BasicLayout';

describe('BasicLayout', () => {
  it('has right footer', () => {
    const { queryByText } = render(
      <TestContainer>
        <BasicLayout>children</BasicLayout>
      </TestContainer>
    );
    expect(queryByText(/Yishan Authors/)).toHaveTextContent(
      `© ${new Date().getFullYear()} Yishan Authors`
    );
  });
});
