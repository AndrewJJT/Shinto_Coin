import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-sellcoin',
  templateUrl: './sellcoin.component.html',
  styleUrls: ['./sellcoin.component.css']
})
export class SellcoinComponent implements OnInit {

  constructor(private _httpService: HttpService) { }

  currentCoinBalance:any;
  currentCoinValue:any;

  ngOnInit() {
    this.currentCoinValue = this._httpService.coinValue;
    this.currentCoinBalance = this._httpService.coinbalance;
  }

  numCoinsSell:number = 0;

  onSellCoin(){
    if (this.currentCoinBalance >= this.numCoinsSell)
    {
      this._httpService.sellcoin(this.numCoinsSell);
    
      let actionDetail = {
        action: "Sold",
        numOfCoins: this.numCoinsSell,
        value: this.currentCoinValue
      };

      this._httpService.addLedger(actionDetail);

      this._httpService.decreaseCoinValue();
      this.numCoinsSell = 0;
      this.ngOnInit();
    }
  }

}
