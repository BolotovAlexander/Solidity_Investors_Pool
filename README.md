# Alexander Bolotov

Training token ERC20 for 4ireacademy
"NSIPC" - No Scam Investors Pool Coin

An implementation of the Investment pool on Ethereum

## Deploy contract to network

This installation guide expects that have global installed `ganache-cli` and `truffle`.

### Clone repository

```bash
git clone git@github.com:BolotovAlexander/Solidity_Investors_Pool.git
```

### Install dependencies
```bash
npm install
```

### Copy config file and place your environment variables to .env file

```bash
cp .env-example .env
```

### Building and deploy contract

```bash
truffle migrate --network rinkeby
```

For local environment you should run `ganache-cli`

## Testing

### Run test

```bash
truffle test
```

### Coverage

```bash
truffle run coverage
```

## License

`BolotovAlexander/Solidity_Investors_Pool` is released under the MIT License.

See the bundled [LICENSE](./LICENSE) for details.
