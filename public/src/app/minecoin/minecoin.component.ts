import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-minecoin',
  templateUrl: './minecoin.component.html',
  styleUrls: ['./minecoin.component.css']
})
export class MinecoinComponent implements OnInit {

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.currentCoinValue = this._httpService.coinValue;
  }

  currentCoinValue:any;
  answer:number = 0;

  algo ={
    question: "What is the 7th Fibonacci sequence number?",
    answer: 21
  }

  onMineCoin(){
    if (this.answer == this.algo.answer){
      
      this._httpService.addcoin();

      let actionDetail = {
        action: "Mined",
        numOfCoins: 1,
        value: this.currentCoinValue
      };

      this._httpService.addLedger(actionDetail);

      this._httpService.addCoinValue();

      this.answer = 0;

      this.ngOnInit();
      console.log(this._httpService.coinbalance);
    }
  }



}
