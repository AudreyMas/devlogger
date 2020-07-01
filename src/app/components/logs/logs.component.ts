import { Component, OnInit } from '@angular/core';

import {Log} from '../../models/Log';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit {
  //properties with their types
  logs: Log[]; // replace by LOG model

  constructor() { }

  ngOnInit() {
    this.logs = [
      { id: '1', text: 'Generated components', date: new Date('12/26/2017 12:54:23') },
      { id: '2', text: 'Added bootstrap', date: new Date('12/26/2017 09:33:23') },
      { id: '3', text: 'Added logs components', date: new Date('12/26/2017 05:54:23') },

    ]
  }

}
