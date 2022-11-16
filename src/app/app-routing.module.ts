import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlockchainListComponent } from './pages/blockchain-list/blockchain-list.component';
import { CreateTransactionComponent } from './pages/create-transaction/create-transaction.component';
import { PendingTransactionsComponent } from './pages/pending-transactions/pending-transactions.component';

const routes: Routes = [
  { path: '', component: BlockchainListComponent},
  { path: 'CreateTransaction', component: CreateTransactionComponent},
  { path: 'PendingTransactions', component: PendingTransactionsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
