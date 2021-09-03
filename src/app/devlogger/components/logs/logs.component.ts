import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Log } from '../../models/log';
import { DevloggerService } from '../../services/devlogger.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {

  logs:Log[];
  @Output() event=new EventEmitter<Log>();
  constructor(private logService:DevloggerService) { }

  ngOnInit(): void {
    this.logService.getLogs().subscribe(logs=>{
      this.logs=logs;
    });
  }

  Onclick(log:Log){
    this.event.emit(log);
  }

}
