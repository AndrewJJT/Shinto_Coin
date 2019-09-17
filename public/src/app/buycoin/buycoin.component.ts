import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-buycoin',
  templateUrl: './buycoin.component.html',
  styleUrls: ['./buycoin.component.css']
})
export class BuycoinComponent implements OnInit {

  constructor(private _httpService: HttpService) { }
  
  currentCoinBalance:any;
  currentCoinValue:any;
  
  ngOnInit() {
    this.currentCoinValue = this._httpService.coinValue;
    this.currentCoinBalance = this._httpService.coinbalance;
  }

  numCoinsToBuy:number = 0;

  onBuyCoins(){
    this._httpService.addcoin(this.numCoinsToBuy);
   

    let actionDetail = {
      action: "Bought",
      numOfCoins: this.numCoinsToBuy,
      value: this.currentCoinValue
    };

    this._httpService.addLedger(actionDetail);

    this._httpService.addCoinValue();
    this.numCoinsToBuy = 0;
    this.ngOnInit();
  }
}
