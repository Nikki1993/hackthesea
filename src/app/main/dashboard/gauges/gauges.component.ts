import { IvService } from '../../../iv.service';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as c3 from 'c3';

@Component({
  selector: 'app-gauges',
  templateUrl: './gauges.component.html',
  styleUrls: ['./gauges.component.scss']
})
export class GaugesComponent implements OnInit, AfterViewInit {

  chart_1: any;
  chart_interval: number;

  constructor(private ivService: IvService) {
    this.chart_interval = 2000;
  }

  ngOnInit() {}

  gaugeValues() {
    setInterval(() => {

      // this.ivService.getData().subscribe(
      //   (data: any) => this.ivService.setRawFoS(data)
      // );

      this.ivService.setRawFoS(2100); // dummy value for testing TODO remove later

      if (this.ivService.getRawFoS() <= 2199) {
        this.ivService.setProcessedFoS(0.1);
      } else if (this.ivService.getRawFoS() > 2199 && this.ivService.getRawFoS() <= 2299) {
        this.ivService.setProcessedFoS(0.4);
      } else if (this.ivService.getRawFoS() > 2300 && this.ivService.getRawFoS() <= 2399) {
        this.ivService.setProcessedFoS(0.8);
      } else if (this.ivService.getRawFoS() > 2400 && this.ivService.getRawFoS() <= 2500) {
        this.ivService.setProcessedFoS(1);
      } else {
        this.ivService.setProcessedFoS(1.1);
      }
      this.chart_1.load({
        columns: [
          ['FoS', this.ivService.getProcessedFoS()]
        ]
      });
    }, this.chart_interval);
  }

  ngAfterViewInit() {
    this.chart_1 = c3.generate({
      bindto: '#chart_1',
      data: {
        columns: [
          ['FoS', 0.00]
        ],
        type: 'gauge'
      },
      gauge: {
        max: 1.1,
        units: '',
        label: {
          format: (value, ratio) => {
            return value; // returning here the value and not the ratio
          }
        }
        //        label: {
        //            format: function(value, ratio) {
        //                return value;
        //            },
        //            show: false // to turn off the min/max labels.
        //        },
        //    min: 0, // 0 is default, //can handle negative min e.g. vacuum / voltage / current flow / rate of change
        //    max: 100, // 100 is default
        //    units: ' %',
        //    width: 39 // for adjusting arc thickness
      },
      color: {
        pattern: ['#60B044', '#F6C600', '#F97600', '#FF0000'], // the three color levels for the percentage values.
        threshold: {
          unit: 'value', //            unit: 'value', // percentage is default
          max: 1.1, //            max: 200, // 100 is default
          values: [0.15, 0.3, 0.7, 0.9]
        }
      },
      size: {
        height: 180
      }
    });
    this.gaugeValues();
  }
}
