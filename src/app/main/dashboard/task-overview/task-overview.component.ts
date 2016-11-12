import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-overview',
  templateUrl: './task-overview.component.html',
  styleUrls: ['./task-overview.component.scss']
})
export class TaskOverviewComponent implements OnInit {

  tasks: { name: string, status: string, risk: string, tag: string }[] = [
    { name: 'Wash the deck', status: 'Pending', risk: 'Low', tag: 'cleaning' },
    { name: 'Unload the cargo', status: 'Not Started', risk: 'Medium', tag: 'cargo' },
    { name: 'Board the ship', status: 'Done', risk: 'Low', tag: 'boarding' },
    { name: 'Load the Cargo', status: 'Not Started', risk: 'High', tag: 'cargo' },
    { name: 'System Check', status: 'Not Started', risk: 'High', tag: 'online' }
  ];

  constructor() {}

  ngOnInit() {}
}
