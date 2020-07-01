import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { Observable } from 'rxjs';

import { of } from 'rxjs/';

import { Log } from '../models/Log';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  logs: Log[];
  private logSource = new BehaviorSubject<Log>({id: null, text: null, date: null});
  selectedLog = this.logSource.asObservable();


  constructor() {
    this.logs = [
      { id: '1', text: 'Generated components', date: new Date('12/26/2017 12:54:23') },
      { id: '2', text: 'Added bootstrap', date: new Date('12/26/2017 09:33:23') },
      { id: '3', text: 'Added logs components', date: new Date('12/26/2017 05:54:23') },

    ]
  }
//Methods or Functions
  getLogs(): Observable<Log[]> {
    return of(this.logs);
  }
  setFormLog(log: Log) {
    this.logSource.next(log);
  }
}
