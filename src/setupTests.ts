/**
 * Copyright (c) 2020 Yishan Authors
 *
 * All rights reserved
 */
import '@testing-library/jest-dom/extend-expect';

if (window.document) {
  document.createRange = () => ({
    setStart: () => {},
    setEnd: () => {},
    // @ts-ignore
    commonAncestorContainer: {
      nodeName: 'BODY',
      ownerDocument: document,
    },
  });
}
