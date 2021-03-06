<img src="./assets/images/BleumiPay.png" height="30">


# Bleumi Pay SDK for NodeJS

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://raw.githubusercontent.com/bleumi/bleumi-pay-sdk-nodejs/master/LICENSE)

The Bleumi Pay SDK helps you integrate Algo, Algorand Standard Asset, Ethereum, ERC-20, RSK, RSK ERC-20 & xDai payments and payouts into your business or application. The SDK bundles [Bleumi Pay API](https://pay.bleumi.com/docs/#introduction) into one SDK to ease implementation and support.

**bleumi-pay-sdk-nodejs** is a TypeScrpit-NodeJS library that provides an interface between your NodeJS application and [Bleumi Pay API](https://pay.bleumi.com/docs/#introduction). This tutorial covers the basics, including examples, needed to use the SDK.

## Getting Started

The Bleumi Pay SDK for NodeJS bundles TypeScript definition files for use in TypeScript projects and to support tools that can read .d.ts files. Our goal is to keep these TypeScript definition files updated with each release for any public api.

### Pre-requisites

Before you can begin using these TypeScript definitions with your project, you need to make sure your project meets a few of these requirements:

#### Development Environment

* Use TypeScript v2.x
* Includes the TypeScript definitions for node. You can use npm to install this by typing the following into a terminal window:

    ```sh
    npm install --save-dev @types/node
    ```

* If you are targeting at es5 or older ECMA standards, your `tsconfig.json` has to include `'es5'` and `'es2015.promise'` under `compilerOptions.lib`.
 See [tsconfig.json](https://github.com/bleumi/bleumi-pay-sdk-nodejs/blob/master/tsconfig.json) for an example.

#### Obtain An API Key

Bleumi Pay SDK uses API keys to authenticate requests. You can obtain an API key through the [Bleumi Pay Dashboard](https://pay.bleumi.com/app/).

### Install Package

[![npm (scoped)](https://img.shields.io/npm/v/@bleumi/pay-sdk.svg)](https://www.npmjs.com/package/@bleumi/pay-sdk)

### In Node.js

```
npm install @bleumi/pay-sdk -g
```

### Run Sample Code

The following code generates an unique checkout URL to accept payment from the buyer:

```javascript

import { HostedCheckoutsApi, HostedCheckoutsApiApiKeys, CreateCheckoutUrlRequest } from '@bleumi/pay-sdk';

// Instantiate client
const bleumiPay = new HostedCheckoutsApi();

async function createCheckoutUrl(id: string) {
    try {
        bleumiPay.setApiKey(HostedCheckoutsApiApiKeys.ApiKeyAuth, '<YOUR_API_KEY>'); //Replace <YOUR_API_KEY> with your actual API key

        const chain = Chain.Goerli;
        const createCheckoutUrlRequest = new CreateCheckoutUrlRequest();

        createCheckoutUrlRequest.id = id
        createCheckoutUrlRequest.currency = "<CURRENCY>"
        createCheckoutUrlRequest.amount = "<AMOUNT>"
        createCheckoutUrlRequest.cancelUrl = "<CANCEL_URL>" // Eg. https://demo.store/api/cancelOrder
        createCheckoutUrlRequest.successUrl = "<SUCCESS_URL>" // Eg. https://demo.store/api/completeOrder
        createCheckoutUrlRequest.token = '<TOKEN>'; // string | Replace <TOKEN>  by anyone of the following values: 'ETH' or 'XDAI' or 'XDAIT' or ECR-20 Contract Address or 'RBTC' or RSK ECR-20 Contract Address or 'Asset ID' of Algorand Standard Asset. | Optional

        createCheckoutUrlRequest.chain = chain;

        const response = await bleumiPay.createCheckoutUrl(createCheckoutUrlRequest);
        const createCheckoutUrlResponse = response.body;
        console.log(JSON.stringify(createCheckoutUrlResponse));
    } catch (err) {
        if (err.response) {
            console.error('Error statusCode:', err.response.statusCode);
            console.error('Error reponse:', err.response.body);
        } 
        console.log('Error message:',err.message);
    }
}
```

More examples can be found under each method in [SDK Classes](README.md#sdk-classes) section.

## SDK Classes

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
HostedCheckoutsApi | [**createCheckoutUrl**](docs/HostedCheckoutsApi.md#createCheckoutUrl) | **POST** /v1/payment/hc | Generate a unique checkout URL to accept payment.
HostedCheckoutsApi | [**listTokens**](docs/HostedCheckoutsApi.md#listTokens) | **GET** /v1/payment/hc/tokens | Retrieve all tokens configured for the Hosted Checkout in your account in the [Bleumi Pay Dashboard](https://pay.bleumi.com/app/).
HostedCheckoutsApi | [**validateCheckoutPayment**](docs/HostedCheckoutsApi.md#validateCheckoutPayment) | **POST** /v1/payment/hc/validate | Validate the GET parameters passed by Hosted Checkout in successUrl upon successfully completing payment.
PaymentsApi | [**getPayment**](docs/PaymentsApi.md#getPayment) | **GET** /v1/payment/{id} | Retrieve the wallet addresses &amp; token balances for a given payment
PaymentsApi | [**listPayments**](docs/PaymentsApi.md#listPayments) | **GET** /v1/payment | Retrieve all payments created.
PaymentsApi | [**settlePayment**](docs/PaymentsApi.md#settlePayment) | **POST** /v1/payment/{id}/settle | Settle a specific amount of a token for a given payment to the transferAddress and remaining balance (if any) will be refunded to the buyerAddress
PaymentsApi | [**refundPayment**](docs/PaymentsApi.md#refundPayment) | **POST** /v1/payment/{id}/refund | Refund the balance of a token for a given payment to the buyerAddress
PaymentsApi | [**getPaymentOperation**](docs/PaymentsApi.md#getPaymentOperation) | **GET** /v1/payment/{id}/operation/{txid} | Retrieve a payment operation for a specific payment.
PaymentsApi | [**listPaymentOperations**](docs/PaymentsApi.md#listPaymentOperations) | **GET** /v1/payment/{id}/operation | Retrieve all payment operations for a specific payment.
PayoutsApi | [**createPayout**](docs/PayoutsApi.md#createPayout) | **POST** /v1/payout | Create a payout.
PayoutsApi | [**listPayouts**](docs/PayoutsApi.md#listPayouts) | **GET** /v1/payout | Returns a list of payouts

## Documentation For Models

 - [AlgorandAddress](docs/AlgorandAddress.md)
 - [AlgorandBalance](docs/AlgorandBalance.md)
 - [AlgorandWalletAddress](docs/AlgorandWalletAddress.md)
 - [AlgorandWalletInputs](docs/AlgorandWalletInputs.md)
 - [BadRequest](docs/BadRequest.md)
 - [Chain](docs/Chain.md)
 - [CheckoutToken](docs/CheckoutToken.md)
 - [CreateCheckoutUrlRequest](docs/CreateCheckoutUrlRequest.md)
 - [CreateCheckoutUrlResponse](docs/CreateCheckoutUrlResponse.md)
 - [CreatePayoutRequest](docs/CreatePayoutRequest.md)
 - [CreatePayoutResponse](docs/CreatePayoutResponse.md)
 - [EthereumAddress](docs/EthereumAddress.md)
 - [EthereumBalance](docs/EthereumBalance.md)
 - [EthereumWalletAddress](docs/EthereumWalletAddress.md)
 - [EthereumWalletInputs](docs/EthereumWalletInputs.md) 
 - [PaginatedPaymentOperations](docs/PaginatedPaymentOperations.md)
 - [PaginatedPayments](docs/PaginatedPayments.md)
 - [PaginatedPayoutItems](docs/PaginatedPayoutItems.md)
 - [Payment](docs/Payment.md)
 - [PaymentAddresses](docs/PaymentAddresses.md)
 - [PaymentBalances](docs/PaymentBalances.md)
 - [PaymentOperation](docs/PaymentOperation.md)
 - [PaymentOperationInputs](docs/PaymentOperationInputs.md)
 - [PaymentOperationResponse](docs/PaymentOperationResponse.md)
 - [PaymentRefundRequest](docs/PaymentRefundRequest.md)
 - [PaymentSettleRequest](docs/PaymentSettleRequest.md)
 - [Payout](docs/Payout.md)
 - [PayoutItem](docs/PayoutItem.md)
 - [PayoutItemInputs](docs/PayoutItemInputs.md)
 - [RskAddress](docs/RskAddress.md)
 - [RskBalance](docs/RskBalance.md)
 - [ValidateCheckoutRequest](docs/ValidateCheckoutRequest.md)
 - [ValidateCheckoutResponse](docs/ValidateCheckoutResponse.md)
 - [WalletBalance](docs/WalletBalance.md)

## Limitations

 - [Bleumi Pay API Limits](https://pay.bleumi.com/docs/#api-limits)

## License

Copyright 2020 Bleumi, Inc.

Code licensed under the [MIT License](LICENSE).