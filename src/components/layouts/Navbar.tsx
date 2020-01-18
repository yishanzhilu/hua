/**
 * Copyright (c) 2019 Yishan Authors
 *
 * All rights reserved
 */

import * as React from 'react';

import {
  Button,
  Classes,
  Navbar as NavbarContainer,
  NavbarGroup,
  NavbarHeading,
  Alignment,
  Icon,
  Switch,
  NavbarDivider,
  Position,
  Popover,
  Menu,
  MenuItem,
  AnchorButton,
  MenuDivider,
} from '@yishanzhilubp/core';
import { Link } from 'react-router-dom';

const CreateMenu: React.FC = () => {
  return (
    <Menu>
      <MenuItem icon={<span role="img" aria-label="goal">🎯</span>} text="设立目标" />
      <MenuItem icon={<span role="img" aria-label="task">📜</span>} text="创建任务" />
      <MenuItem icon={<span role="img" aria-label="log">🎬</span>} text="添加记录" />
      <MenuItem icon={<span role="img" aria-label="todo">✔️</span>} text="新增代办" />
    </Menu>
  );
};

const ProfileMenu: React.FC = () => {
  return (
    <Menu>
      <MenuDivider
        title={
          <div
            style={{
              fontSize: 16,
              fontWeight: 600,
              marginBottom: 10,
              marginTop: 5,
            }}
          >
            qy
          </div>
        }
      />
      <MenuDivider />
      <Link to="/settings/profile">
        <MenuItem icon="settings" text="设置" />
      </Link>
      <MenuItem icon="log-out" text="退出" />
    </Menu>
  );
};

export const Navbar = () => {
  const isDarkTheme = false;
  const isLogin = false;
  return (
    <NavbarContainer>
      <NavbarGroup>
        <NavbarHeading>
          <Link to="/workspace/dashboard">
            <img
              src="/logo.svg"
              alt="logo"
              style={{ width: 30, height: 30, borderRadius: 30 }}
            />
          </Link>
        </NavbarHeading>
        <div className="bp3-input-group">
          <Icon icon="search" />
          <input className="bp3-input" placeholder="搜索移山" dir="auto" />
        </div>
      </NavbarGroup>
      <NavbarGroup align={Alignment.RIGHT}>
        {isLogin ? (
          <>
            <Switch
              checked={isDarkTheme}
              label="深色模式"
              alignIndicator={Alignment.RIGHT}
              style={{ marginBottom: 0 }}
            />
            <NavbarDivider />
            <Popover content={<CreateMenu />} position={Position.BOTTOM_RIGHT}>
              <Button className={Classes.MINIMAL} icon="add" />
            </Popover>
            <Popover content={<ProfileMenu />} position={Position.BOTTOM_RIGHT}>
              <Button className={Classes.MINIMAL} rightIcon="caret-down" />
            </Popover>
          </>
        ) : (
          <AnchorButton minimal intent="primary">
            内测用户登录
          </AnchorButton>
        )}
      </NavbarGroup>
    </NavbarContainer>
  );
};
