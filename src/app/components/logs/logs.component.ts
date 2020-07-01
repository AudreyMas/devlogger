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

  constructor(private logService: LogService) { }

  ngOnInit() {
    // this.logs = this.logService.getLogs() // fetch from servie
    this.logService.getLogs().subscribe(logs => {
      this.logs = logs;
    }) // fetch from servie

  }
  onSelect(log: Log) {
    console.log(log)
    this.logService.setFormLog(log);
  }

}
