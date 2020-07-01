import { Component, OnInit } from '@angular/core';

import { LogService } from '../../services/log.service';

import { Log } from '../../models/Log';



@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.scss']
})
export class LogFormComponent implements OnInit {
  id: string;
  text: string;
  date: any;
  isNew: boolean = true;

  constructor(private logService: LogService) { }

  ngOnInit() {
    // Subscribe to the selectedLog observable
    this.logService.selectedLog.subscribe(log => { // ERRRRRORRRR
      if (log.id !== null) {
        this.id == log.id;
        this.isNew = false;
        this.text = log.text;
        this.date = log.date;
      }
    });
  }

  onSubmit() {
    // console.log(1, 2, 3);
    //check if new log
    if (this.isNew) {
      //create new log => google => javascript uuid => stack => function RFCA122
      const newLog = {
        id: this.generateId(),
        text: this.text,
        date: new Date()
      }
      //Add log
      this.logService.addLog(newLog);
    } else {
      //Create log to be updated
      const updLog = {
        id: this.id,
        text: this.text,
        date: new Date()
      }
      //update log
      this.logService.updateLog(updLog);
    }
  }

  generateId() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }



}
