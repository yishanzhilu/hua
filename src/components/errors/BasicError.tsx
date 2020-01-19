/**
 * Copyright (c) 2020 Yishan Authors
 *
 * All rights reserved
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@yishanzhilubp/core';
import { useLocation, Link } from 'react-router-dom';

const styles: { [k: string]: React.CSSProperties } = {
  error: {
    color: '#646464',
    background: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '30vh',
  },
};

interface IBasicErrorProps {
  /**
   * statusCode HTTP 错误码，会作为 title 和 h1 显示
   * @default 500
   */
  statusCode?: number;
  /**
   * message 显示的信息，如果不填写，会显示 statusCode 的解释信息
   * @default '出错了'
   */
  message?: string;
}

/**
 * BasicError 基本的报错页面，显示 HTTP 错误码和报错信息
 * 显示一个返回主页的按钮，如果报错是 401 无权限，
 */
export const BasicError: React.FC<IBasicErrorProps> = ({
  statusCode = 500,
  message,
}) => {
  const { pathname } = useLocation();
  if (!message) {
    if (statusCode === 404) {
      message = `请求的 ${pathname} 页面不存在`;
    } else if (statusCode === 401) {
      message = `请求的 ${pathname} 页面必须登陆后访问`;
    } else if (statusCode === 403) {
      message = `请求的 ${pathname} 页面您无权访问，请联系管理员`;
    } else {
      message = `请求 ${pathname} 出错了，请联系客服，或稍后重试`;
    }
  }

  const title = `${statusCode} · 移山`;
  return (
    <div style={styles.error}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div>
        <h1 style={{ fontSize: 40, margin: 0 }}>{statusCode}</h1>
        <p style={{ fontSize: 18, margin: '23px 0', maxWidth: 300 }}>
          {message}
        </p>
        <Link to="/">
          <Button intent="primary">返回首页</Button>
        </Link>
        {statusCode === 403 && (
          <Link to={{ pathname: '/login', search: `?redirect-from=pathname` }}>
            <Button style={{ marginLeft: 20 }}>登录访问</Button>
          </Link>
        )}
      </div>
      <img
        style={{ width: 150, height: 150, marginLeft: 100 }}
        src="/logo.svg"
        alt="page error"
      />
    </div>
  );
};
