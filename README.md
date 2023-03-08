# MultiversX dApp Template

This template makes it easy to quickly get started building dApps on [MultiversX](https://multiversx.com), providing the basics for MultiversX authentication and transaction signing.

See [Dapp Template](https://template-dapp.esdt.space) for a live demo.

## Getting Started

The dapp is a client side only project built using [React](https://reactjs.org) + [Vite](https://vitejs.dev) and it uses the [ping-pong](https://github.com/multiversx/mx-ping-pong-sc) smart contract created and maintained by the [MultiversX](https://github.com/multiversx) team.

## 1. Requirements

Before starting, make sure you have the minimum requirements on your workstation.

_Minimum_
- An up-to-date version Yarn (or npm)
- An up-to-date version of NodeJS (tested on v18.10.0)

_Optional_
- A [WalletConnect](https://cloud.walletconnect.com) projectId
- The [ping-pong](https://github.com/multiversx/mx-ping-pong-sc) smart contract deployed

## 2. Setup

### 2.1 Install the dependencies

From a terminal, navigate to the project folder and run:

 ```bash
$ yarn
 ```

### 2.2. Configure your environment variables _(optional)_

For quickly testing the app on devnet, you can use the default environment values.

In case you want to test the app on testnet or mainnet, you will have to deploy the ping-pong contract there and update the environment files accordingly.

The environment files are located in the [/src/app/environment/env](/src/app/environment/env) folder.

> You can generate a WalletConnect projectId [here](https://cloud.walletconnect.com) for free, and you can find the code for the ping-pong smart contract [here](https://github.com/multiversx/mx-ping-pong-sc).

## 3. Run the app

### 3.1. For development
From a terminal, navigate to the project folder and run one of the following commands, depending on which environment you want to use:

```bash
#Devnet
$ yarn run start:devnet

#Testnet
$ yarn run start:testnet

#Mainnet
$ yarn run start:mainnet
```

> This will start the React app in development mode, using the configs found in the [environment](/src/app/environment/env) files.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### 3.2 Build for testing and production use

From a terminal, navigate to the project folder and run one of the following commands, depending on which environment you want to build for:

```bash
#Devnet
$ yarn run build:devnet

#Testnet
$ yarn run build:testnet

#Mainnet
$ yarn run build:mainnet
```

## 4. Build something awesome ⚡️

## 5.️ Stay in touch

- Telegram - [@EsdtSpace](https://t.me/EsdtSpace)
- Twitter - [@EsdtSpace](https://twitter.com/EsdtSpace) <a href="https://twitter.com/esdtspace" target="_blank"><img src="https://img.shields.io/twitter/follow/esdtspace.svg?style=social&label=Follow"></a>
- Website - [https://esdt.space](https://esdt.space)


