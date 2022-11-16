import { Component, OnInit, Input } from '@angular/core';
import { BlockchainService } from 'src/app/backend-services/blockchain.service';
@Component({
  selector: 'app-blockchain-list',
  templateUrl: './blockchain-list.component.html',
  styleUrls: ['./blockchain-list.component.scss']
})
export class BlockchainListComponent implements OnInit {

  public blocks = []; //Test
  public selectedBlock = null;
  public difficulty = -1;
  public reward = -1;
  public balance = -1;

  constructor(private blockchainService: BlockchainService) {
    this.blocks = blockchainService.getBlocks();
    this.selectedBlock = this.blocks[0];
    this.difficulty = blockchainService.blockchainInstance.difficulty;
    this.reward = blockchainService.blockchainInstance.miningReward;
    console.log(this.blocks);
    this.balance = blockchainService.blockchainInstance.getBalanceOfAddress(blockchainService.walletKeys[0].publicKey);
  }

  ngOnInit() {
  }

  showTransactions(block) {
    console.log(block);
    this.selectedBlock = block;
    return false;
  }



}
