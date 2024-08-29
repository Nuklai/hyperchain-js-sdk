# Hyperchain SDK

The Hyperchain SDK provides a modular and comprehensive interface for interacting with hyperchains(blockchains built using HyperSDK). It is designed to facilitate developers with functions ranging from network configurations to transaction management and complex warp operations.

## Requirements

- Node.js `v20.0.0` or later (for building from source)
- Yarn `v1.22.0` or later (for building from source)

## Features

| Feature | Status |
|---------|--------|
| Transaction Management | ✅ |
| Continuous Block Monitoring | ✅ |
| Fee Calculation | ✅ |
| Auth | ✅ |
| WebSocket | ✅ |
| Creation of Custom Actions  | ✅ |
| State Management | ✅ |
| RPC Services | ✅ |
| Multi-Sig Support | 🚧 |
| Cross-Chain Operations | 🚧 |
| WASM-Based Programs | 🚧 |

✅ - Complete, 🚧 - In Progress

## Installation

```bash
npm install @nuklai/hyperchain-sdk
# or
yarn add @nuklai/hyperchain-sdk
```

For building from source:

```bash
git clone https://github.com/nuklai/hyperchain-sdk.git
cd hyperchain-sdk

yarn
yarn build
```

## Usage

### Initializing the SDK

```javascript
import { HyperchainSDK } from '@nuklai/hyperchain-sdk'

const sdk = new HyperchainSDK({
  baseApiUrl: 'https://api-devnet.nuklaivm-dev.net:9650',
  blockchainId: 'JopL8T69GBW1orW4ZkJ1TBRzF97KXaY8e64atDA1v2M12SNqm'
})
```

### Basic Operations

Checking node health:

```javascript
const healthStatus = await sdk.rpcService.ping()
console.log('Node Ping:', JSON.stringify(healthStatus, null, 2))
```

Fetching network information:

```javascript
const networkInfo = await sdk.rpcService.getNetworkInfo()
console.log('Network Info:', JSON.stringify(networkInfo, null, 2))
```

### Cryptographic Key Management

Generating key pairs:

```javascript
import { HyperchainSDK, auth } from '@nuklai/hyperchain-sdk'

const { privateKey, publicKey } = auth.BLSFactory.generateKeyPair()
console.log('Generated BLS Private Key:', auth.BLSFactory.privateKeyToHex(privateKey))
console.log('Generated BLS Public Key:', auth.BLS.publicKeyToHex(publicKey))
```

### Transaction Management

Submitting a transaction:

```javascript
import { HyperchainSDK, actions, auth, codec, consts, utils } from '@nuklai/hyperchain-sdk'

// Initialize SDK
const sdk = new HyperchainSDK({
  baseApiUrl: 'https://api-devnet.nuklaivm-dev.net:9650',
  blockchainId: 'JopL8T69GBW1orW4ZkJ1TBRzF97KXaY8e64atDA1v2M12SNqm'
})

// Create auth factory
const authFactory = auth.getAuthFactory(
  'ed25519',
  '323b1d8f4eed5f0da9da93071b034f2dce9d2d22692c172f3cb252a64ddfafd01b057de320297c29ad0c1f589ea216869cf1938d88c9fbd70d6748323dbf2fa7'
)

// Create transfer action
const transfer = new actions.Transfer(
  'nuklai1qqydg3pvjx5f9n8rytn5swyznftupw8lkc240l6apzqdxy4hsgmgkmzazes',
  'NAI',
  utils.parseBalance(0.0001, 9),
  'Test Memo'
)

// Set up genesis info and registries
const genesisInfo = {
  baseUnits: 1,
  storageKeyReadUnits: 5,
  storageValueReadUnits: 2,
  storageKeyAllocateUnits: 20,
  storageValueAllocateUnits: 5,
  storageKeyWriteUnits: 10,
  storageValueWriteUnits: 3,
  validityWindow: 60000
}

const actionRegistry = new codec.TypeParser()
actionRegistry.register(consts.TRANSFER_ID, actions.Transfer.fromBytesCodec, false)

const authRegistry = new codec.TypeParser()
authRegistry.register(consts.BLS_ID, auth.BLS.fromBytesCodec, false)
authRegistry.register(consts.ED25519_ID, auth.ED25519.fromBytesCodec, false)

// Generate and submit transaction
const { submit, txSigned, err } = await sdk.rpcService.generateTransaction(
  genesisInfo,
  actionRegistry,
  authRegistry,
  [transfer],
  authFactory
)

if (err) {
  throw err
}

await submit()
console.log('Transaction ID:', txSigned.id().toString())
```

### Listen for blocks(via Websocket)

```javascript
import { HyperchainSDK } from '@nuklai/hyperchain-sdk'

async function listenForBlocks() {
  const sdk = new HyperchainSDK({
    baseApiUrl: 'https://api-devnet.nuklaivm-dev.net:9650',
    blockchainId: 'JopL8T69GBW1orW4ZkJ1TBRzF97KXaY8e64atDA1v2M12SNqm'
  })

  try {
    await sdk.wsService.connect()
    
    const err = await sdk.wsService.registerBlocks()
    if (err) {
      console.error("Failed to register blocks:", err)
      return
    }

    while (true) {
      try {
        const { block, results, prices, err } = await sdk.wsService.listenBlock(
          sdk.actionRegistry,
          sdk.authRegistry
        )

        if (err) {
          console.error('Failed to listen for blocks:', err)
          continue
        }

        console.log('Incoming block:', block.toJSON())
        console.log('Results:', results)
        console.log('Prices:', prices)
      } catch (error) {
        console.error('Error:', error)
      }
    }
  } catch (error) {
    console.error('Error connecting to WebSocket:', error)
  } finally {
    await sdk.wsService.close()
  }
}

listenForBlocks().catch(console.error)
```

## API Reference

### Transaction Management (`chain/transaction.ts`)

The `Transaction` class covers the structure and behavior of transactions.

Key methods:

- `sign(factory: AuthFactory, actionRegistry: ActionRegistry, authRegistry: AuthRegistry): [Transaction, Error?]`
- `toBytes(): [Uint8Array, Error?]`
- `fromBytes(bytes: Uint8Array, actionRegistry: ActionRegistry, authRegistry: AuthRegistry): [Transaction, Error?]`

### Block Structure (`chain/block.ts`)

The `StatefulBlock` class represents a block in the blockchain.

Key methods:

- `id(): Promise<Id>`
- `toBytes(): [Uint8Array, Error?]`
- `fromBytes(bytes: Uint8Array, actionRegistry: ActionRegistry, authRegistry: AuthRegistry): [StatefulBlock, Error?]`

### Fee Calculation (`chain/fees.ts`)

The `estimateUnits` function calculates transaction fees based on resource usage:

```typescript
function estimateUnits(
  genesisInfo: Genesis,
  actions: Action[],
  authFactory: AuthFactory
): Dimension
```

### Authentication System (`auth/auth.ts`, `auth/provider.ts`)

Key interfaces:

- `Auth`
- `AuthFactory`

Key function:

```typescript
function getAuthFactory(
  authType: AuthType,
  privateKeyString: string
): AuthFactory
```

### WebSocket Communication (`websocket.ts`)

The `WebSocketService` class provides real-time communication with any HyperSDK based blockchains.

Key methods:

- `connect(): Promise<void>`
- `listenBlock(actionRegistry: ActionRegistry, authRegistry: AuthRegistry): Promise<{ block: StatefulBlock; results: Array<Result>; prices: Dimension; err: Error | undefined; }>`
- `close(): Promise<void>`

## Advanced Usage

### Custom Action Implementation

To implement a custom action:

1. Define a new class implementing the `Action` interface.
2. Implement `toBytes()`, `fromBytes()`, and other required methods.
3. Register the new action type with the `ActionRegistry`.

## Error Handling

Most methods in the SDK return a tuple `[result, error]`. Always check for errors before using the result:

```javascript
const [result, error] = await someSDKMethod()
if (error) {
  console.error('An error occurred:', error)
  // Handle error
} else {
  // Use the result
}
```

## Security Considerations

- Use secure connections (HTTPS) when connecting to endpoints.
- Validate all inputs, especially those used in transaction creation.

## Performance Optimization

- Use WebSocket connections for real-time updates instead of polling.
- Implement proper error handling and retries for network operations.
- Consider batching multiple actions into a single transaction when appropriate.

## Troubleshooting

Common issues and their solutions:

1. Connection errors: Verify network settings and firewall configurations.
2. Transaction failures: Check balance, fee estimation, and action validity.
3. WebSocket disconnections: Implement reconnection logic with exponential backoff.

For further assistance, please reach out to `kiran.pachhai@nukl.ai` or `say@nukl.ai`, or create an issue in this repository.

## Contributing

Contributions to the Hyperchain SDK are welcome! Please ensure that your code adheres to the existing style and include tests for new features.

## License

This SDK is released under the [MIT License](LICENSE).

## Contributors

- Author: Kiran Pachhai <kiran.pachhai@nukl.ai>
- Contributor: Shodipo Ayomide <say@nukl.ai>
