import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-overview',
  templateUrl: './task-overview.component.html',
  styleUrls: ['./task-overview.component.scss']
})
export class TaskOverviewComponent implements OnInit {

  tasks: { taskNum: number, name: string, status: string, risk: string, tag: string }[] = [
    {taskNum: 1, name: 'Wash the deck', status: 'Pending', risk: 'Low', tag: 'cleaning' },
    {taskNum: 2, name: 'Unload the cargo', status: 'Not Started', risk: 'High', tag: 'cargo' },
    {taskNum: 3, name: 'Board the ship', status: 'Done', risk: 'Medium', tag: 'boarding' },
    {taskNum: 4, name: 'Load the Cargo', status: 'Not Started', risk: 'High', tag: 'cargo' },
    {taskNum: 5, name: 'System Check', status: 'Not Started', risk: 'Low', tag: 'online' }
  ]
  cnstructor() {}
  ngOnInit() {}
}
