import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Log } from '../../models/log';
import { DevloggerService } from '../../services/devlogger.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {

  loaded = false;
  selectedLog: Log;
  logs:Log[];
  @Output() event=new EventEmitter<Log>();
  constructor(private logService:DevloggerService) { }

  ngOnInit(): void {

    this.logService.stateteClear.subscribe(clear =>{
      if(clear){
        this.selectedLog = {id:'',text:'',date:''}
      }
    })

    this.logService.getLogs().subscribe(logs=>{
      this.logs=logs;
      this.loaded = true;
    });
  }

  Onclick(log:Log){
    this.event.emit(log);
    this.selectedLog = log;
  }

  onSubmit(log:Log){
    if(confirm("Are you sure?")){
        this.logService.RemoveLog(log);
      }
    }

}
