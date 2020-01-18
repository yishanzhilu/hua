/**
 * Copyright (c) 2019 Yishan Authors
 *
 * All rights reserved
 */
import React, { ReactElement } from 'react';
import { IProps } from 'src/types/IProps';

import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';
import style from './BasicLayout.module.css';

interface IBasicLayoutProps extends IProps {}

export default function BasicLayout({
  children,
}: IBasicLayoutProps): ReactElement {
  return (
    <div className={style.container}>
      <div className={style.inner}>
        <header className={style.header}>
          <Navbar />
        </header>
        <div className={style.body}>
          <aside className={style.aside}>
            <Sidebar />
          </aside>
          <main className={style.main}>
            <div className={style.mainBody}>{children}</div>
            <div className={style.mainFooter}>
              © {new Date().getFullYear()} Yishan Authors
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
