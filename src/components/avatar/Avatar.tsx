/**
 * Copyright (c) 2019 Yishan Authors
 *
 * All rights reserved
 */

import React, { ReactElement } from 'react';

import { Classes } from '@yishanzhilubp/core';

interface IAvatarProps {
  src: string;
  name: string;
  size?: number;
}

export default function Avatar({
  src,
  name,
  size = 20,
}: IAvatarProps): ReactElement {
  return (
    <div>
      {src ? (
        <img
          src={src}
          className={Classes.ELEVATION_1}
          style={{ borderRadius: 10 }}
          crossOrigin="anonymous"
          width={size}
          height={size}
          alt={name}
        />
      ) : (
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
            style={{ lineHeight: 1, fontSize: size * 0.7, height: size * 0.7 }}
          >
            {name.charAt(0).toUpperCase()}
          </div>
        </div>
      )}
    </div>
  );
}
