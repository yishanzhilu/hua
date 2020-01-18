/**
 * Copyright (c) 2019 Yishan Authors
 *
 * All rights reserved
 */

import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation, Link } from 'react-router-dom';
import { Button } from '@yishanzhilubp/core';

const styles: { [k: string]: React.CSSProperties } = {
  error: {
    color: '#646464',
    background: '#fff',
    fontFamily:
      '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '30vh',
  },
};

function BasicError({ statusCode = 500, title: message = '出错了' }) {
  const { pathname } = useLocation();
  if (statusCode === 404) {
    message = `请求的 URL ${pathname} 不存在`;
  }
  const title = `${statusCode} - 移山`;
  return (
    <div style={styles.error}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div>
        {statusCode ? (
          <h1 style={{ fontSize: 40, margin: 0 }}>{statusCode}</h1>
        ) : null}
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
}

export { BasicError };
