/**
 * Bleumi Pay REST API
 * A simple and powerful REST API to integrate Algorand, Ethereum, ERC-20, xDai payments and/or payouts into your business or application
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@bleumi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';
import { EthereumWalletAddress } from './ethereumWalletAddress';

export class RskAddress {
    'rsk'?: { [key: string]: EthereumWalletAddress; };
    'rskTestnet'?: { [key: string]: EthereumWalletAddress; };

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "rsk",
            "baseName": "rsk",
            "type": "{ [key: string]: EthereumWalletAddress; }"
        },
        {
            "name": "rskTestnet",
            "baseName": "rsk_testnet",
            "type": "{ [key: string]: EthereumWalletAddress; }"
        }    ];

    static getAttributeTypeMap() {
        return RskAddress.attributeTypeMap;
    }
}
