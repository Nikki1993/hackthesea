import { GLOBAL_VARIABLES } from '../globals';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title = GLOBAL_VARIABLES.APP_TITLE;

  constructor() { }

  ngOnInit() {
  }

}
