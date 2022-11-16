import { Component, OnInit } from '@angular/core';
import { BlockchainService } from 'src/app/backend-services/blockchain.service';
import { Transaction } from '../../../../../COMP4142-Project-Backend/src/blockchain'

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.scss']
})
export class CreateTransactionComponent implements OnInit {

  public newTx;
  public ownWalletKey;

  constructor(private blockchainService: BlockchainService) {
    this.newTx = new Transaction();
    this.ownWalletKey = blockchainService.walletKeys[0];
  }

  ngOnInit() {
    this.newTx = new Transaction();
  }

  createTransaction() {
    const newTx = this.newTx;

    // Set the FROM address and sign the transaction
    newTx.fromAddress = this.ownWalletKey.publicKey;
    newTx.signTransaction(this.ownWalletKey.keyObj);

    try {
      this.blockchainService.addTransaction(this.newTx);
    } catch (e) {
      alert(e);
      return;
    }

    //this.router.navigate(['/new/transaction/pending', { addedTx: true }]);
    this.newTx = new Transaction();
  }

}
