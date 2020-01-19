/**
 * Copyright (c) 2020 Yishan Authors
 *
 * All rights reserved
 */

import React from 'react';
import { render } from '@testing-library/react';

import { Avatar } from './Avatar';
describe('Avatar', () => {
  it('should render name if there is not avatarURL', () => {
    const { getByText } = render(<Avatar name="test" />);
    expect(getByText('T').parentElement.style['height']).toBe('20px');
    expect(getByText('T').style['font-size']).toBe('14');
  });

  it('should render img if there is avatarURL', () => {
    const { getByRole } = render(<Avatar name="test" src="/avatar/1" />);
    expect(() => getByRole('img')).not.toThrow();
  });

  it('should render right size', () => {
    const { getByRole } = render(
      <Avatar name="test" src="/avatar/1" size={30} />
    );
    expect(getByRole('img').getAttribute('height')).toBe('30');
  });
});
