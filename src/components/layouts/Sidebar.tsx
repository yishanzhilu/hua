/**
 * Copyright (c) 2020 Yishan Authors
 *
 * All rights reserved
 */

import React from 'react';
import { Classes, Divider, Text } from '@yishanzhilubp/core';
import classnames from 'classnames';
import { NavLink } from 'react-router-dom';

import { Profile } from './SidebarProfile';

import styles from './Sidebar.module.css';

export const SidebarHeader: React.FC = ({ children }) => {
  return <h6 className={styles.header}>{children}</h6>;
};

const NavLabel: React.FC<{
  to: string;
  title: string;
  emoji: string;
  // expended?: React.ReactNode;
  level?: number;
}> = ({ to, title, emoji, level = 0 }) => {
  const linkClass = classnames(Classes.TREE_NODE, styles.link);
  return (
    <NavLink
      className={linkClass}
      to={to}
      activeClassName={Classes.TREE_NODE_SELECTED}
    >
      <div
        className={Classes.TREE_NODE_CONTENT}
        style={{ paddingRight: 20, paddingLeft: 23 * level + 20 }}
      >
        <span className={Classes.TREE_NODE_ICON}>{emoji}</span>
        <Text tagName="span" ellipsize>
          {title}
        </Text>
      </div>
      {/* {expended && <div className=
      {Classes.TREE_NODE_EXPANDED}>{expended}</div>} */}
    </NavLink>
  );
};

export const Sidebar: React.FC = () => {
  const mainNavList = [
    {
      to: '/workspace/dashboard',
      title: '看板',
      emoji: '📋',
    },
    {
      to: '/workspace/plan',
      title: '规划',
      emoji: '🗓',
    },
    {
      to: '/workspace/success',
      title: '成就',
      emoji: '🏆',
    },
    {
      to: '/workspace/recycle',
      title: '回收站',
      emoji: '♻️',
    },
  ];
  return (
    <div
      className={classnames(
        Classes.TREE,
        Classes.ELEVATION_0,
        styles.container
      )}
    >
      <Profile />
      <Divider />
      <nav>
        <div className={Classes.TREE_NODE_LIST}>
          <SidebarHeader>导航</SidebarHeader>
          {mainNavList.map(nav => (
            <NavLabel
              key={nav.title}
              to={nav.to}
              title={nav.title}
              emoji={nav.emoji}
            />
          ))}
        </div>
        {/* <SidebarWorks /> */}
      </nav>
    </div>
  );
};
