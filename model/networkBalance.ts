/**
 * Bleumi Pay API
 * A simple and powerful REST API to integrate ERC-20, Ethereum, xDai payments and/or payouts into your business or application
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@bleumi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { WalletBalance } from './walletBalance';

export class NetworkBalance {
    'mainnet'?: { [key: string]: WalletBalance; };
    'xdai'?: { [key: string]: WalletBalance; };
    'goerli'?: { [key: string]: WalletBalance; };
    'kovan'?: { [key: string]: WalletBalance; };
    'rinkeby'?: { [key: string]: WalletBalance; };
    'ropsten'?: { [key: string]: WalletBalance; };
    'xdaiTestnet'?: { [key: string]: WalletBalance; };

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "mainnet",
            "baseName": "mainnet",
            "type": "{ [key: string]: WalletBalance; }"
        },
        {
            "name": "xdai",
            "baseName": "xdai",
            "type": "{ [key: string]: WalletBalance; }"
        },
        {
            "name": "goerli",
            "baseName": "goerli",
            "type": "{ [key: string]: WalletBalance; }"
        },
        {
            "name": "kovan",
            "baseName": "kovan",
            "type": "{ [key: string]: WalletBalance; }"
        },
        {
            "name": "rinkeby",
            "baseName": "rinkeby",
            "type": "{ [key: string]: WalletBalance; }"
        },
        {
            "name": "ropsten",
            "baseName": "ropsten",
            "type": "{ [key: string]: WalletBalance; }"
        },
        {
            "name": "xdaiTestnet",
            "baseName": "xdai_testnet",
            "type": "{ [key: string]: WalletBalance; }"
        }    ];

    static getAttributeTypeMap() {
        return NetworkBalance.attributeTypeMap;
    }
}
