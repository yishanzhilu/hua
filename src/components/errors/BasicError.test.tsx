/**
 * Copyright (c) 2020 Yishan Authors
 *
 * All rights reserved
 */

import React from 'react';
import { render } from '@testing-library/react';
import { TestContainer } from 'src/utils/TestContainer';

import { BasicError } from './BasicError';

describe('BasicError', () => {
  it('base case', () => {
    const { getByRole } = render(
      <TestContainer>
        <BasicError />
      </TestContainer>
    );
    expect(getByRole('heading')).toHaveTextContent('500');
    expect(getByRole('button')).toHaveTextContent('返回首页');
  });

  it('404 statusCode', () => {
    const { getByText, getByRole } = render(
      <TestContainer pathname="/non-exist-path">
        <BasicError statusCode={404} />
      </TestContainer>
    );
    expect(getByRole('heading')).toHaveTextContent('404');
    expect(() => getByText(/\/non-exist-path/)).not.toThrow();
    expect(getByRole('button')).toHaveTextContent('返回首页');
  });

  it('401 statusCode', () => {
    const { getByText, getByRole } = render(
      <TestContainer pathname="/need-login">
        <BasicError statusCode={401} />
      </TestContainer>
    );
    expect(getByRole('heading')).toHaveTextContent('401');
    expect(() => getByText(/\/need-login/)).not.toThrow();
    expect(getByRole('button')).toHaveTextContent('返回首页');
  });

  it('403 statusCode', () => {
    const { getByRole, getAllByRole, getByText } = render(
      <TestContainer pathname="/forbiden">
        <BasicError statusCode={403} />
      </TestContainer>
    );
    expect(getByRole('heading')).toHaveTextContent('403');
    expect(() => getByText(/\/forbiden/)).not.toThrow();
    const buttons = getAllByRole('button');
    expect(buttons[0]).toHaveTextContent('返回首页');
    expect(buttons[1]).toHaveTextContent('登录访问');
  });

  it('message props', () => {
    const { getByRole, getByText } = render(
      <TestContainer pathname="/forbiden">
        <BasicError message="test message" />
      </TestContainer>
    );
    expect(getByRole('heading')).toHaveTextContent('500');
    expect(() => getByText('test message')).not.toThrow();
    expect(getByRole('button')).toHaveTextContent('返回首页');
  });
});
