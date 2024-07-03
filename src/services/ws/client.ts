import { isNodeEnvironment } from '../../utils/utils'

let WebSocketClient: any

export async function loadWebSocketClient() {
  if (isNodeEnvironment()) {
    // Node.js environment
    const wsModule = await import('ws')
    WebSocketClient = wsModule.default
  } else {
    // Browser environment
    WebSocketClient = WebSocket
  }
}

export function getWebSocketClient() {
  if (!WebSocketClient) {
    throw new Error(
      'WebSocket client is not initialized. Please call loadWebSocketClient() first.'
    )
  }
  return WebSocketClient
}
