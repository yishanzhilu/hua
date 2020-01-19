/**
 * Copyright (c) 2020 Yishan Authors
 *
 * All rights reserved
 */

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TestContainer } from 'src/utils/TestContainer';
import { Navbar } from './Navbar';

describe('Navbar', () => {
  it('has logo and login button when not login', () => {
    const { getByAltText, getByRole } = render(
      <TestContainer>
        <Navbar />
      </TestContainer>
    );
    expect(getByAltText(/logo/).getAttribute('src')).toBe('/logo.svg');
    expect(getByRole('button')).toHaveTextContent('内测用户登录');
  });

  describe('when login', () => {
    it('has `add` button, and if click, will open menu', () => {
      const { getAllByRole, queryByText } = render(
        <TestContainer>
          <Navbar isLogin />
        </TestContainer>
      );
      const addButton = getAllByRole('button')[0];
      expect(addButton).toHaveTextContent('add');
      fireEvent.click(addButton);
      expect(queryByText('设立目标')).not.toBeNull();
    });

    it('has `profile` button, and if click, will open menu', () => {
      const { getAllByRole, queryByText } = render(
        <TestContainer>
          <Navbar isLogin />
        </TestContainer>
      );
      const profileButton = getAllByRole('button')[1];
      expect(profileButton).toHaveTextContent('caret-down');
      fireEvent.click(profileButton);
      expect(queryByText('设置')).not.toBeNull();
    });
  });
});
