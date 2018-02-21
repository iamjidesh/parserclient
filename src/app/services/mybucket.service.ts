import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
@Injectable()
export class MybucketService {

  private mybucket = new BehaviorSubject<any>(['I am Jidesh', 'I am Lishiba']);
  item = this.mybucket.asObservable();
  constructor() {}

  addItem(item) {
    this.mybucket.next(item);
  }

}
