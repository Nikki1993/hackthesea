import { GLOBAL_VARIABLES } from '../globals';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  title = GLOBAL_VARIABLES.APP_TITLE;

  constructor() {}

  ngOnInit() {}

}
