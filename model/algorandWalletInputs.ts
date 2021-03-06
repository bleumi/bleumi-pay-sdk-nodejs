/**
 * Bleumi Pay API
 * A simple and powerful REST API to integrate Algorand, Ethereum, ERC-20 and xDai payments and/or payouts into your business
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@bleumi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';

export class AlgorandWalletInputs {
    /**
    * Buyer Address
    */
    'buyer'?: string;
    /**
    * Merchant Address
    */
    'merchant'?: string;
    /**
    * Salt
    */
    'salt'?: string;
    /**
    * Gas account Address
    */
    'gas'?: string;
    /**
    * Program Bytes
    */
    'programBytes'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "buyer",
            "baseName": "buyer",
            "type": "string"
        },
        {
            "name": "merchant",
            "baseName": "merchant",
            "type": "string"
        },
        {
            "name": "salt",
            "baseName": "salt",
            "type": "string"
        },
        {
            "name": "gas",
            "baseName": "gas",
            "type": "string"
        },
        {
            "name": "programBytes",
            "baseName": "programBytes",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AlgorandWalletInputs.attributeTypeMap;
    }
}

