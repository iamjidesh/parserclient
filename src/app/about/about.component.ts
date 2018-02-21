import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import { MybucketService } from '../services/mybucket.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  myBuckets: any;

  paramId: String;
  constructor(private route: ActivatedRoute, private router: Router,private _dataservice:MybucketService) {
    route.params.subscribe(params => this.paramId = params['id']);
    
  }

  ngOnInit() {
    this._dataservice.item.subscribe(res => this.myBuckets=res);
  }
  navigateHome() {
    this.router.navigate(['']);
  }
}
