/**
 * Copyright (c) 2019 Yishan Authors
 *
 * All rights reserved
 */

import React from 'react';
import { Classes, Tooltip, ProgressBar } from '@yishanzhilubp/core';
import classnames from 'classnames';
import { Avatar } from 'src/components/avatar';

import styles from './SidebarProfile.module.css';

export function Profile() {
  const store = {
    user: { name: 'qy', avatarUrl: '', id: 0, createdAt: '', updatedAt: '' },
    theme: 'light',
    isLogin: false,
    work: {
      goals: [],
      missions: [],
      minutes: 0,
    },
  };
  const {
    work: { minutes },
    user: { name, avatarUrl },
  } = store;
  const hours = Math.floor(minutes / 24);
  const hoursTo10k = 10000 - Math.ceil(minutes / 24);
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Avatar src={avatarUrl} name={name} />
        <div
          className={classnames(Classes.TEXT_OVERFLOW_ELLIPSIS)}
          style={{ fontWeight: 600, maxWidth: 125 }}
        >
          {name || '您好'}
        </div>
      </div>
      <div className="row">
        <Tooltip
          position="bottom-left"
          interactionKind="hover"
          hoverCloseDelay={50}
          content={<span>距离达成一万小时还差 {hoursTo10k} 小时</span>}
        >
          <span>累计历程</span>
        </Tooltip>
        <div>
          <strong>{hours}</strong>
          <span className={Classes.TEXT_SMALL}>小时</span>
        </div>
        <div style={{ marginTop: 5 }}>
          <ProgressBar
            animate={false}
            stripes={false}
            value={Math.max(hours / 10000, 0.01)}
            intent="primary"
          />
        </div>
      </div>

      {/* <div>
        <UserProfileStat title="今日历程" hours={24} />
        <UserProfileStat title="本周历程" hours={24} />
        <UserProfileStat title="本月历程" hours={24} />
      </div> */}
    </div>
  );
}
