# Hyperchain SDK

The Hyperchain SDK provides a modular and comprehensive interface for interacting with hyperchains(blockchains built using HyperSDK). It is designed to facilitate developers with functions ranging from network configurations to transaction management and complex warp operations.

## Installation

Install the Hyperchain SDK via npm/yarn

```bash
npm install @nuklai/hyperchain-sdk
# or
yarn add @nuklai/hyperchain-sdk
```

## Build from Source

To build the SDK from source:

```bash
yarn
yarn build
```

## Examples

The [examples directory](./examples) contains various example code to interact with the Hyperchain SDK.

## Usage

Import and initialize the SDK in your project:

```javascript
import { HyperchainSDK } from '@nuklai/hyperchain-sdk'

const sdk = new HyperchainSDK({
  baseApiUrl: 'http://127.0.0.1:9650', // Node API URL
  blockchainId: 'CuH4wPFDk6p1jSRPMcJPgt9nGFfF7zfRrH3nkJW2TWLfRE53L' // Blockchain ID
})
```

## Example Usage

### Check Health Status

```javascript
const healthStatus = await sdk.rpcService.ping()
console.log('Node Ping:', JSON.stringify(healthStatus, null, 2))
```

### Get Network Information

```javascript
const networkInfo = await sdk.rpcService.getNetworkInfo()
console.log('Network Info:', JSON.stringify(networkInfo, null, 2))
```

### Generate Private/Public Key Pair

```javascript
import { HyperchainSDK, auth } from '@nuklai/hyperchain-sdk'

const { privateKey, publicKey } = auth.BLSFactory.generateKeyPair()
console.log(
  'Generated BLS Private Key:',
  auth.BLSFactory.privateKeyToHex(privateKey)
)
console.log('Generated BLS Public Key:', auth.BLS.publicKeyToHex(publicKey))
```

### Submit a Transaction(via JSON RPC)

```javascript
// Set the private key for the sender address
const authFactory = auth.getAuthFactory(
  'ed25519',
  '323b1d8f4eed5f0da9da93071b034f2dce9d2d22692c172f3cb252a64ddfafd01b057de320297c29ad0c1f589ea216869cf1938d88c9fbd70d6748323dbf2fa7' // private key (as hex string) for nuklai1qrzvk4zlwj9zsacqgtufx7zvapd3quufqpxk5rsdd4633m4wz2fdjss0gwx
)

const transfer = new actions.Transfer(
  'nuklai1qpxncu2a69l9wyz3yqg4fqn86ys2ll6ja7vhym5qn2vk4cdyvgj2vn4k7wz', // receiver address
  'NAI', // asset ID
  utils.parseBalance(0.0001, 9), // amount
  'Test Memo' // memo
)

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
actionRegistry.register(
  consts.TRANSFER_ID,
  actions.Transfer.fromBytesCodec,
  false
)
const authRegistry = new codec.TypeParser()
authRegistry.register(consts.BLS_ID, auth.BLS.fromBytesCodec, false)
authRegistry.register(consts.ED25519_ID, auth.ED25519.fromBytesCodec, false)

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

### Submit a Transaction(via Websocket)

```javascript
// Set the private key for the sender address
const authFactory = auth.getAuthFactory(
  'ed25519',
  '323b1d8f4eed5f0da9da93071b034f2dce9d2d22692c172f3cb252a64ddfafd01b057de320297c29ad0c1f589ea216869cf1938d88c9fbd70d6748323dbf2fa7' // private key (as hex string) for nuklai1qrzvk4zlwj9zsacqgtufx7zvapd3quufqpxk5rsdd4633m4wz2fdjss0gwx
)

const transfer = new actions.Transfer(
  'nuklai1qpxncu2a69l9wyz3yqg4fqn86ys2ll6ja7vhym5qn2vk4cdyvgj2vn4k7wz', // receiver address
  'NAI', // asset ID
  utils.parseBalance(0.0001, 9), // amount
  'Test Memo' // memo
)

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
actionRegistry.register(
  consts.TRANSFER_ID,
  actions.Transfer.fromBytesCodec,
  false
)
const authRegistry = new codec.TypeParser()
authRegistry.register(consts.BLS_ID, auth.BLS.fromBytesCodec, false)
authRegistry.register(consts.ED25519_ID, auth.ED25519.fromBytesCodec, false)

await sdk.wsServiceNuklai.connect()
const { txSigned, err } = await sdk.rpcService.generateTransaction(
  genesisInfo,
  actionRegistry,
  authRegistry,
  [transfer],
  authFactory
)
if (err) {
  throw err
}

err = await this.registerTx(txSigned)
if (err) {
  throw err
}

let resultTxID: Id | null = null

while (!resultTxID) {
  const { txId, dErr, err } = await this.listenTx()
  if (dErr) {
    throw dErr
  }
  if (err) {
    throw err
  }
  if (txId.toString() === txSigned.id().toString()) {
    resultTxID = txId
    break
  }
}
console.log('Transaction ID:', txSigned.id().toString())
```

### Listen for blocks(via Websocket)

```js
await sdk.wsService.connect()
const connectAndListen = async () => {
  try {
    const err = await sdk.wsService.registerBlocks()
    if (err) {
      throw err
    }
    const listenBlocks = async () => {
      const { block, results, err } = await sdk.wsService.listenBlock(
        sdk.actionRegistry,
        sdk.authRegistry
      )
      if (err) {
        throw err
      }
      console.log('block: ', block.toJSON())
      results.map((result, i) =>
        console.log(`result at ${i}: ${result.toJSON()}`)
      )
    }
    // Initial block fetch
    listenBlocks()

    // Fetch blocks periodically
    const interval = setInterval(listenBlocks, 3000)

    return () => clearInterval(interval)
  } catch (err) {
    console.error(err)
  }
}
connectAndListen()
await sdk.wsService.close()
```

## Publish

```bash
npm publish --access public
```

## Contributing

Contributions to the Nuklai SDK are welcome! Please ensure that your code adheres to the existing style, and include tests for new features.

## License

This SDK is released under the [MIT License](LICENSE).

This README file should provide a clear and professional introduction to your SDK, making it easier for developers to understand how to use it and contribute to it.
