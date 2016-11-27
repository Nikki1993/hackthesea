import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-overview',
  templateUrl: './task-overview.component.html',
  styleUrls: ['./task-overview.component.scss']
})
export class TaskOverviewComponent implements OnInit {

  tasks: { taskNum: number, name: string, status: string, risk: string, tag: string }[] = [
    {taskNum: 1, name: 'Cargo Unloading', status: 'Ongoing', risk: 'Medium', tag: 'cleaning'}
  ];

  ngOnInit() {}
}
