import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { emitKeypressEvents } from 'readline';
import { element } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http:HttpClient) { }

  coinbalance:number = 0;
  coinValue:number = 1;

  ledger = []

  addcoin(num:number = 1){
    this.coinbalance += num;
  }

  addCoinValue(){
    this.coinValue ++;
  }

  decreaseCoinValue(){
    if (this.coinValue > 1){
      this.coinValue --;
    }
    else{
      this.coinValue = 1;
    }
  }

  addLedger(newAction){
    newAction['id'] = Math.floor(Math.random()*10000)+1;
    this.ledger.push(newAction);
  }

  sellcoin(num:number){
    this.coinbalance -= num;
  }
}
