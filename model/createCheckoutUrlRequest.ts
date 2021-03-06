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

import { RequestFile } from '../api';

export class CreateCheckoutUrlRequest {
    /**
    * Unique identifier for this payment.
    */
    'id': string;
    /**
    * Currency Code
    */
    'currency': string;
    /**
    * Set the token which must be used by the buyer for this payment.
    */
    'amount': string;
    /**
    * Buyer will be redirected to this URL upon canceling the payment.
    */
    'cancelUrl': string;
    /**
    * Buyer will be redirected to this URL upon successfully completing the payment.
    */
    'successUrl': string;
    /**
    * Payment transfer address (only used in case of Marketplace payments). Use this field to override the token\'s settlement address specified in the Bleumi Pay Dashboard for the payment.
    */
    'transferAddress'?: string;
    /**
    * (Required if specifying \'token\') Network in which the hosted checkout is to be created. Please refer to the Supported Networks.
    */
    'chain'?: string;
    /**
    * ETH - for Ethereum ; XDAI - for xDai ; XDAIT - for xDai Testnet ; ALGO - Algo; <asset id> - for Algorand Standard Asset; <contract address of ERC-20 token> - for ERC-20 Tokens;
    */
    'token'?: string;
    /**
    * Base64 encode hmac_input GET parameter passed to the successUrl
    */
    'base64Transform'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "string"
        },
        {
            "name": "cancelUrl",
            "baseName": "cancelUrl",
            "type": "string"
        },
        {
            "name": "successUrl",
            "baseName": "successUrl",
            "type": "string"
        },
        {
            "name": "transferAddress",
            "baseName": "transferAddress",
            "type": "string"
        },
        {
            "name": "chain",
            "baseName": "chain",
            "type": "string"
        },
        {
            "name": "token",
            "baseName": "token",
            "type": "string"
        },
        {
            "name": "base64Transform",
            "baseName": "base64Transform",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return CreateCheckoutUrlRequest.attributeTypeMap;
    }
}

