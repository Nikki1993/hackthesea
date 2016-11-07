import { GLOBAL_VARIABLES } from './globals';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  title = GLOBAL_VARIABLES.APP_TITLE;

  constructor() {}
}
