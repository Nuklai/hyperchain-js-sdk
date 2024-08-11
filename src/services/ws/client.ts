// Copyright (C) 2024, Nuklai. All rights reserved.
// See the file LICENSE for licensing terms.

import { isNodeEnvironment } from '../../utils/utils'

let WebSocketClient: any

export async function loadWebSocketClient() {
  if (typeof window !== 'undefined' && window.WebSocket) {
    // Browser environment
    return window.WebSocket;
  } else {
    // Node.js environment
    const wsModule = await import('ws');
    return wsModule.default;
  }
}

export async function getWebSocketClient() {
  if (typeof WebSocket !== 'undefined') {
    // Browser environment
    return WebSocket;
  } else {
    // Node.js environment
    if (!WebSocketClient) {
      const wsModule = await import('ws');
      WebSocketClient = wsModule.default;
    }
    return WebSocketClient;
  }
}
