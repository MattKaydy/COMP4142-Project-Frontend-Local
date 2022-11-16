import { Component, OnInit, Input } from '@angular/core';
import { BlockchainService } from '../../backend-services/blockchain.service';

@Component({
  selector: 'app-block-data-card-view',
  templateUrl: './block-data-card-view.component.html',
  styleUrls: ['./block-data-card-view.component.scss']
})
export class BlockDataCardViewComponent implements OnInit {

  @Input() public block; 

  @Input()
  public selectedBlock;

  private blocksInChain;

  constructor(private blockchainService: BlockchainService) {
    this.blocksInChain = blockchainService.blockchainInstance.chain;
  }

  ngOnInit() {
  }

  blockHasTx() {
    return this.block.transactions.length > 0;
  }

  isSelectedBlock() {
    return this.block === this.selectedBlock;
  }

  getBlockNumber() {
    return this.blocksInChain.indexOf(this.block) + 1;
  }

}
