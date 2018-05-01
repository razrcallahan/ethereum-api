/**
 * Created by wasimqamar on 01/05/18.
 */

import Wallet from './wallet';

export default {

}

export function createWithPrivateKey(publicAddr, privateKey) {
    let wallet = new Wallet();
    wallet.publicAddress = publicAddr;
    wallet.privateKey = privateKey;

    return wallet;
}

export function createWithPublicKey(publicAddr) {
    let wallet = new Wallet();
    wallet.publicAddress = publicAddr;

    return wallet;
}

export function generateNew() {
    let wallet = new Wallet();
    wallet.publicAddress = "new public address";
    wallet.privateKey = "new private key";

    return wallet;
}
