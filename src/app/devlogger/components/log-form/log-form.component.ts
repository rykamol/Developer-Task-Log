import { Component, OnInit } from '@angular/core';
import { Log } from '../../models/log';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {

  id: string;
  text:string;
  date:any;
  
  constructor() { }

  ngOnInit(): void {
  }

  OnFillForm(log:Log){
    this.id = log.id
    this.text = log.text
    this.date = log.date
  }

}
