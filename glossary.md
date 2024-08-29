# Hyperchain SDK Glossary

## *A*

### *Action*

- An operation that can be executed on any HyperSDK based Blockchain. In the Hyperchain SDK, actions implements the `Action` interface.

### *ActionRegistry*

- A registry that maps action `typeIDs` to their corresponding decoder functions. It's implemented using the `TypeParser` class in `codec/typeParser.ts`.

### *Address*

- A unique ID for an account on the any HyperSDK based Blockchain. In the Hyperchain SDK, addresses are derived from public keys.

### *Auth*

- An interface representing the authentication mechanism for transactions. It includes methods for verification and signature creation.

### *AuthFactory*

- An interface for creating Auth instances. It's responsible for signing messages and calculates the resource usage for the process.

## *B*

### *BaseTx*

- The starting point for all transactions in the Hyperchain SDK and any HyperSDK based Blockchain. It includes the `timestamp`, `chainID`, and maximum fee for a transaction.

### *Block*

- A Block for Hyperchain's is a bundle of approved transactions plus a snapshot of the blockchain's current state. In HyperchainSDK, blocks are represented by the `StatefulBlock` class.

## *C*

### *Codec*

- A utility tool for turning complex data into simple bytes and back again, making it easy to send and receive information across any HyperSDK based Blockchain with Hyperchains.

## *D*

### *Dimension*

- An array of numbers representing different aspects of resource usage in our fee calculation. It typically includes bandwidth, compute, storage read, storage allocate, and storage write units.

## *F*

### *Fee*

- The cost associated with including a transaction in a block. Fees are calculated based on the resource usage of the transaction's actions and authentication.

## *G*

### *Genesis*

- A structure containing the initial configuration parameters for a HyperSDK blockchain, including various resource costs and limits used in fee estimation.

## *H*

### *Hyperchain*

- A blockchain implementation built using Avalanche HyperSDK.

### *HyperSDK*

- An SDK for building custom blockchains by the Avalanche Team.

## *M*

### *MessageBuffer*

- A utility class for managing message queues in our WebSocket communication.

## *R*

### *Result*

- Shows us what happened when a transaction was processed, including `success` `status`, `error messages`, `output`s, `resource-usage`, and `fees`.

### *RPC*

- A protocol used for making requests to a blockchain node. In the Hyperchain SDK, RPC calls are handled by the `RpcService` class in `src/services/rpc.ts`.

## *S*

### *StatefulBlock*

- A representation of a block that includes state information.
