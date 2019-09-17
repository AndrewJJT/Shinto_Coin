import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { BuycoinComponent} from './buycoin/buycoin.component';
import { MinecoinComponent} from './minecoin/minecoin.component';
import { SellcoinComponent} from './sellcoin/sellcoin.component';
import { LedgerComponent} from './ledger/ledger.component';
import { TransactionComponent} from './transaction/transaction.component';



const routes: Routes = [
  {path: 'home', component:HomeComponent}
, {path: 'buycoin', component:BuycoinComponent}
, {path: 'minecoin', component:MinecoinComponent}
, {path: 'sellcoin', component:SellcoinComponent}
, {path: 'ledger', component:LedgerComponent}
, {path: 'transaction/:id', component:TransactionComponent}
, {path:'**',
  redirectTo:'home',
  pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
