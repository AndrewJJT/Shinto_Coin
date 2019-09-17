import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  constructor(
    private _route:ActivatedRoute,
    private _router:Router,
    private _httpService: HttpService) { }

  selectedAction:any;


  ngOnInit() {
    this._route.params.subscribe((params:Params) =>{
        let actionId = parseInt(params['id']);
        for (var i = 0; i < this._httpService.ledger.length; i++){
          if (this._httpService.ledger[i].id == actionId){
            this.selectedAction = this._httpService.ledger[i]
          }
        }
    })
  }

}
