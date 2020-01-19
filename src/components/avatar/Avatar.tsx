/**
 * Copyright (c) 2020 Yishan Authors
 *
 * All rights reserved
 */

import React, { ReactElement } from 'react';

import { Classes } from '@yishanzhilubp/core';

interface IAvatarProps {
  name: string;
  src?: string;
  size?: number;
}

export function Avatar({ src, name, size = 20 }: IAvatarProps): ReactElement {
  if (!src) {
    const innerSize = (size * 0.7).toFixed();
    return (
      <div
        style={{
          borderRadius: 3,
          width: size,
          height: size,
          background: 'rgba(55, 53, 47, 0.4)',
          color: 'rgba(255, 255, 255, 0.9)',
          textTransform: 'uppercase',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            lineHeight: 1,
            fontSize: innerSize,
            height: innerSize,
          }}
        >
          {name.charAt(0).toUpperCase()}
        </div>
      </div>
    );
  }
  return (
    <img
      src={src}
      className={Classes.ELEVATION_1}
      style={{ borderRadius: 10 }}
      crossOrigin="anonymous"
      width={size}
      height={size}
      alt={name}
    />
  );
}
