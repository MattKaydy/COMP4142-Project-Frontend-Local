'use strict';
import { Injectable } from '@angular/core';
//const Blockchain = require('COMP4142-Project-Backend/src/blockchain');
//import { ec } from 'elliptic';
import { Blockchain } from '../../../../COMP4142-Project-Backend/src/blockchain';
const crypto = require('crypto');
const EC = require('elliptic');

@Injectable({
  providedIn: 'root'
})
export class BlockchainService {

  public blockchainInstance = new Blockchain();
  public walletKeys: Array<IWalletKey> = [];

  constructor() {
    this.blockchainInstance.difficulty = 1;
    this.blockchainInstance.minePendingTransactions('hi');

    this.generateWalletKeys();

    console.log("Running 2");
  
  }

  getBlocks() {
    return this.blockchainInstance.chain;

  }

  minePendingTransactions() {
    this.blockchainInstance.minePendingTransactions(
      this.walletKeys[0].publicKey
    );
  }

  addressIsFromCurrentUser(address) {
    return address === this.walletKeys[0].publicKey;
  }
  
  generateWalletKeys() {
    const ec =  new EC.ec('secp256k1');
    const key = ec.genKeyPair();

    this.walletKeys.push({
      keyObj: key,
      publicKey: key.getPublic('hex'),
      privateKey: key.getPrivate('hex'),
    });

    console.log(this.walletKeys);
  }

  getPendingTransactions() {
    return this.blockchainInstance.pendingTransactions;
  }

  addTransaction(tx) {
    this.blockchainInstance.addTransaction(tx);
  }
}

export interface IWalletKey {
  keyObj: any;
  publicKey: string;
  privateKey: string;
}
