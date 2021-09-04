import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Log } from '../models/log';


@Injectable({
  providedIn: 'root'
})
export class DevloggerService {
private selectedLog = new BehaviorSubject<Log>({id:null,text:null,date:null}).asObservable();

private stateSource = new BehaviorSubject<boolean>(true);
stateteClear = this.stateSource.asObservable();

  clearState() {
   this.stateSource.next(true);
  }
  
  RemoveLog(deleteLog: Log) {
    this.logs.forEach((cur,index)=>{
      if(cur.id === deleteLog.id){
        this.logs.splice(index,1);
      }
    })
  }

  updateLog(updLog:Log) {
    this.logs.forEach((cur,index)=>{
      if(updLog.id === cur.id){
        this.logs.splice(index,1);
      }
    })
    this.logs.unshift(updLog);
  }

  addLog(newLog:Log) {
    this.logs.unshift(newLog)
  }
  
  logs:Log[];
  //private logSource = new BehaviorSubject<Log>({id:null,text:null,date:null});
  // private selectedLog =  this.logSource.asObservable();

  constructor() {
    this.logs=[
      // {id:'1',text:'Generated compnents ', date:new Date('12/26/2021 12:43:23')},
      // {id:'2',text:'Added bootstrap ', date:new Date('12/27/2021 7:43:23')},
      // {id:'3',text:'Added Blogs compnents ', date:new Date('12/31/2021 12:03:23')}
    ]
   }

   getLogs():Observable<Log[]>{
     return of(this.logs);
   }

  //  setFromLog(log:Log){
  //    this.logSource.next(log);
  //  }

}
