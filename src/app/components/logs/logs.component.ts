import { Component, OnInit } from '@angular/core';

import { LogService } from '../../services/log.service';

import { Log } from '../../models/Log';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit {
  //properties with their types
  logs: Log[]; // replace by LOG model
  selectedLog: Log;
  loaded: boolean = false;

  constructor(private logService: LogService) { }

  ngOnInit() {
    this.logService.stateClear.subscribe(clear => {
      if(clear){
        this.selectedLog = {id: '', text: '', date:''};
      }
    })
    // this.logs = this.logService.getLogs() // fetch from servie
    this.logService.getLogs().subscribe(logs => {
      this.logs = logs;
      this.loaded =true;
    }) // fetch from service

  }

  onSelect(log: Log) {
    // console.log(log)
    this.logService.setFormLog(log);
    this.selectedLog = log;
  }

  onDelete(log: Log) {
    if (confirm('Are you sure?')) {
      this.logService.deleteLog(log);
    }
  }

}
