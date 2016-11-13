import { IvService } from '../../../iv.service';
import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-ship-overview',
  templateUrl: './ship-overview.component.html',
  styleUrls: ['./ship-overview.component.scss']
})
export class ShipOverviewComponent implements DoCheck {

  public warn = false;
  serv: IvService;

  constructor(ivService: IvService) {
    this.serv = ivService;
   }

  ngDoCheck() {
    let fos = this.serv.getProcessedFoS();

    if (fos > 0.15) {
      this.warn = true;
    } else {
      this.warn = false;
    }
  }

}
