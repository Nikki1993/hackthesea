import { setInterval } from 'timers';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-overview',
  templateUrl: './task-overview.component.html',
  styleUrls: ['./task-overview.component.scss']
})
export class TaskOverviewComponent implements OnInit {

  tasks: { name: string, status: string, risk: string }[] = [
    { name: 'Wash the deck', status: 'Pending', risk: 'Low' },
    { name: 'Unload the cargo', status: 'Not Started', risk: 'Medium' },
    { name: 'Board the ship', status: 'Done', risk: 'Low' },
    { name: 'Load the Cargo', status: 'Not Started', risk: 'High' }
  ];

  constructor() {}

  ngOnInit() {}
}
