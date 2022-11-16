import { Component, OnInit, Input } from '@angular/core';
import { BlockchainService } from '../../backend-services/blockchain.service';

@Component({
  selector: 'app-transactions-data-table-view',
  templateUrl: './transactions-data-table-view.component.html',
  styleUrls: ['./transactions-data-table-view.component.scss']
})
export class TransactionsDataTableViewComponent implements OnInit {

  @Input() public transactions = [];

  constructor(public blockchainService: BlockchainService) { }

  ngOnInit() {
  }

  

}
