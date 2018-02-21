import {Component, OnInit, Provider} from '@angular/core';
import {LoggerService} from '../logger.service';
import { MybucketService } from '../services/mybucket.service';

import {trigger, style, transition, animate, keyframes, query, stagger} from '@angular/animations';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [LoggerService],
  animations: [
    trigger('myBucket', [
      
      transition('* => *', [
        query(':enter', style({ opacity: 0}),{optional:true})])])]
})
export class HomeComponent implements OnInit {
  placeHolderValue: string = "Life is on...";
  itemCount: number;
  inputText: string = "Please enter you item here";
  myBucket = [];
  constructor(private _dataservice:MybucketService) {}

  ngOnInit() {
    
    this._dataservice.item.subscribe(resp => this.myBucket=resp);
    this._dataservice.addItem(this.myBucket); 
    this.itemCount = this.myBucket.length;
  }

  addItem() {
    if (this.inputText != this.placeHolderValue) {
      LoggerService.log(this.inputText);
      this.myBucket.push(this.inputText);
      this.itemCount = this.myBucket.length;
      this.inputText = "";
       this._dataservice.addItem(this.myBucket);
    }
  }

}
