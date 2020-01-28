/**
 * Bleumi Pay REST API
 * A simple and powerful REST API to integrate ERC-20, Ethereum, xDai, Algorand payments and/or payouts into your business or application
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@bleumi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { WalletBalance } from './walletBalance';

export class EthereumBalance {
    'mainnet'?: { [key: string]: WalletBalance; };
    'goerli'?: { [key: string]: WalletBalance; };
    'xdai'?: { [key: string]: WalletBalance; };
    'xdaiTestnet'?: { [key: string]: WalletBalance; };

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "mainnet",
            "baseName": "mainnet",
            "type": "{ [key: string]: WalletBalance; }"
        },
        {
            "name": "goerli",
            "baseName": "goerli",
            "type": "{ [key: string]: WalletBalance; }"
        },
        {
            "name": "xdai",
            "baseName": "xdai",
            "type": "{ [key: string]: WalletBalance; }"
        },
        {
            "name": "xdaiTestnet",
            "baseName": "xdai_testnet",
            "type": "{ [key: string]: WalletBalance; }"
        }    ];

    static getAttributeTypeMap() {
        return EthereumBalance.attributeTypeMap;
    }
}
