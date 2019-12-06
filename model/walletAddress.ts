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


export class WalletAddress {
    /**
    * Wallet address for the payment in the network
    */
    'addr': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "addr",
            "baseName": "addr",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return WalletAddress.attributeTypeMap;
    }
}
