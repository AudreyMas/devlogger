import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { Observable } from 'rxjs';

import { of } from 'rxjs/';

import { Log } from '../models/Log';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()

export class LogService {
  logs: Log[];

  private logSource = new BehaviorSubject<Log>({ id: null, text: null, date: null });
  selectedLog = this.logSource.asObservable();

  //to know what we have selected 
  private stateSource = new BehaviorSubject<boolean>(true);
  stateClear = this.stateSource.asObservable();

  constructor() {
    // this.logs = [
    //   { id: '1', text: 'Generated components', date: new Date('12/26/2017 12:54:23') },
    //   { id: '2', text: 'Added bootstrap', date: new Date('12/26/2017 09:33:23') },
    //   { id: '3', text: 'Added logs components', date: new Date('12/26/2017 05:54:23') },

    // ]

    this.logs = [];
  }
  //Methods or Functions
  getLogs(): Observable<Log[]> {
    if (localStorage.getItem('logs') === null) {
      this.logs = [];
    } else {
      this.logs = JSON.parse(localStorage.getItem('logs'));
    }
    return of(this.logs.sort((a, b) => {
      return b.date = a.date;
    }));
  }

  setFormLog(log: Log) {
    this.logSource.next(log);
  }

  addLog(log: Log) {
    this.logs.unshift(log); // push on the beginning on the list
    // Add to local storage
    localStorage.setItem('logs', JSON.stringify(this.logs));
  }
  updateLog(log: Log) {
    this.logs.forEach((cur, index) => { // cur = log
      if (log.id === cur.id) {
        this.logs.splice(index, 1);
      }
    });
    this.logs.unshift(log);
    // Add to local storage
    localStorage.setItem('logs', JSON.stringify(this.logs));

  }

  deleteLog(log: Log) {
    this.logs.forEach((cur, index) => { // cur = log
      if (log.id === cur.id) {
        this.logs.splice(index, 1);
      }
    });

        // Delete to local storage
        localStorage.setItem('logs', JSON.stringify (this.logs));

  }

  clearState() {
    this.stateSource.next(true);
  }
}
