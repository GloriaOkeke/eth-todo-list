# About Project

This is a DApp(Decentralized Application) Todo based on Ethereum Network and
built with Solidity, Javascript, HTML and CSS(Bootstrap Framework was used in
this project).

In this Dapp you can:

1. Create a Task
2. View List of Created Tasks (With Completed and Incomplete tasks displayed on
   the page)
3. Mark a Task as Completed

## How To Setup

- First install Truffle framework on your terminal with the command:

```
npm install -g truffle@5.0.2
```

- Next, you download Ganache, which is a personal Ethereum blockchain for
  development and testing purposes through this link.
  [Link](https://trufflesuite.com/ganache/)

- Next, you can clone this repository (easy-peasy!!!)

- Then, inside the root folder of this repository, you can install all the
  dependencies by running:

```
npm install
```

-Then compile the Dapp by running:

```
truffle compile
```

-Finally migrate you contracts to the Ethereum network in Ganache(this
application should be open) by running:

```
truffle migrate
```

## How To Run The Unit Tests

After you have setup the project locally, following the guideline above, to run
the unit tests you can simply run the command

```
truffle test
```

## How To Run On Your Web Browser

You can run this application on your web browser by running:

```
npm run dev
```

N/B: To run properly on the web browser you will need to install on the browser
any extension that allows the browser access to Ethereum network, example
Metamask [doc](https://docs.metamask.io/guide/)
