import { HyperchainSDK } from '@nuklai/hyperchain-sdk';

async function listenForBlocks() {
  const sdk = new HyperchainSDK({
    baseApiUrl: 'https://api-devnet.nuklaivm-dev.net:9650',
  blockchainId: 'JopL8T69GBW1orW4ZkJ1TBRzF97KXaY8e64atDA1v2M12SNqm'
  });

  try {
    await sdk.wsService.connect();
    
    const err = await sdk.wsService.registerBlocks();
    if (err) {
      console.error("Error while reg", err);
      return;
    }

    while (true) {
      try {
        const { block, results, prices, err } = await sdk.wsService.listenBlock(
          sdk.actionRegistry,
          sdk.authRegistry
        );

        if (err) {
          console.error('Error in block:', err);
          continue;
        }

        console.log('Incoming block:', block.toJSON());
        console.log('Results:', results);
        console.log('Prices:', prices);
      } catch (error) {
        console.error('Error:', error);
      }
    }
  } catch (error) {
    console.error('Error connecting to WS:', error);
  } finally {
    await sdk.wsService.close();
  }
}

listenForBlocks().catch(console.error);
