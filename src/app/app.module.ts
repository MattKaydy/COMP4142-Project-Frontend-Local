import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlockchainListComponent } from './pages/blockchain-list/blockchain-list.component';
import { BlockDataCardViewComponent } from './components/block-data-card-view/block-data-card-view.component';
import { TransactionsDataTableViewComponent } from './components/transactions-data-table-view/transactions-data-table-view.component';
import { CreateTransactionComponent } from './pages/create-transaction/create-transaction.component';
import { PendingTransactionsComponent } from './pages/pending-transactions/pending-transactions.component';

@NgModule({
  declarations: [
    AppComponent,
    BlockchainListComponent,
    BlockDataCardViewComponent,
    TransactionsDataTableViewComponent,
    CreateTransactionComponent,
    PendingTransactionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
