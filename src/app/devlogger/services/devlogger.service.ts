import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Log } from '../models/log';

// import { BehaviorSubject } from 'rxjs/BehaviorSubject';
// import { of } from 'rxjs/Observable/of';
// import { Observable } from 'rxjs/Observable';
 

@Injectable({
  providedIn: 'root'
})
export class DevloggerService {
  
  logs:Log[];
  //private logSource = new BehaviorSubject<Log>({id:null,text:null,date:null});
  // private selectedLog =  this.logSource.asObservable();

  constructor() {
    this.logs=[
      {id:'1',text:'Generated compnents ', date:new Date('12/26/2021 12:43:23')},
      {id:'2',text:'Added bootstrap ', date:new Date('12/27/2021 7:43:23')},
      {id:'3',text:'Added Blogs compnents ', date:new Date('12/31/2021 12:03:23')}
    ]
   }

   getLogs():Observable<Log[]>{
     return of(this.logs);
   }

  //  setFromLog(log:Log){
  //    this.logSource.next(log);
  //  }

}
