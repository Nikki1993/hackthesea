import { GLOBAL_VARIABLES } from '../globals';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent implements OnInit {

  title = GLOBAL_VARIABLES.APP_TITLE;

  constructor() {}

  ngOnInit() {}

}
