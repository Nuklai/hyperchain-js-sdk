// Copyright (C) 2024, Nuklai. All rights reserved.
// See the file LICENSE for licensing terms.
"use client"

import { useEffect } from 'react'
import {
  HyperchainSDK,
  actions,
  auth,
  codec,
  consts,
  utils
} from '@nuklai/hyperchain-sdk'

export default function TestSDK() {
  useEffect(() => {
    async function testSDK() {
      console.log('Starting SDK tests...')

      // Testing Health Status
      try {
        console.log('Fetching Health Status...')
        const sdk = new HyperchainSDK({
          baseApiUrl: 'https://api-devnet.nuklaivm-dev.net:9650',
          blockchainId: 'JopL8T69GBW1orW4ZkJ1TBRzF97KXaY8e64atDA1v2M12SNqm'
        })
        
        const healthStatus = await sdk.rpcService.ping()
        console.log('Node Ping:', JSON.stringify(healthStatus, null, 2))
      } catch (error) {
        console.error('Failed to fetch Health Status:', error)
      }

      // Testing NAI Transfer with Ed25519 Keytype
      try {
        console.log('Creating Transfer Transaction...')
        const sdk = new HyperchainSDK({
          baseApiUrl: 'https://api-devnet.nuklaivm-dev.net:9650',
          blockchainId: 'JopL8T69GBW1orW4ZkJ1TBRzF97KXaY8e64atDA1v2M12SNqm'
        })
        
        const authFactory = auth.getAuthFactory(
          'ed25519',
          '323b1d8f4eed5f0da9da93071b034f2dce9d2d22692c172f3cb252a64ddfafd01b057de320297c29ad0c1f589ea216869cf1938d88c9fbd70d6748323dbf2fa7' // private key (as hex string)
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
      } catch (error) {
        console.error('Failed to transfer crypto:', error)
      }
    }

    testSDK()
  }, [])

  return <div>Check the console for results.</div>
}
