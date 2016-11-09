import { setInterval } from 'timers';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as c3 from 'c3';

@Component({
  selector: 'app-gauges',
  templateUrl: './gauges.component.html',
  styleUrls: ['./gauges.component.scss']
})
export class GaugesComponent implements OnInit, AfterViewInit {

  chart_1: any;
  chart_2: any;
  chart_3: any;
  chart_4: any;
  chart_interval: number;

  constructor() {
    this.chart_interval = 5000;
  }

  ngOnInit() {}

  gaugeValues() {
    setInterval(() => {
      this.chart_1.load({
      columns: [['data', (Math.random() * 100) + 1]]
    });
    }, this.chart_interval);
    setInterval(() => {
      this.chart_2.load({
        columns: [['data', (Math.random() * 100) + 1]]
      });
    }, this.chart_interval + 1000);
    setInterval(() => {
      this.chart_3.load({
        columns: [['data', (Math.random() * 100) + 1]]
      });
    }, this.chart_interval + 2000);
    setInterval(() => {
      this.chart_4.load({
        columns: [['data', (Math.random() * 100) + 1]]
      });
    }, this.chart_interval + 3000);
  }

  ngAfterViewInit () {
      this.chart_1 = c3.generate({
      bindto: '#chart_1',
      data: {
        columns: [
          ['data', 25]
        ],
        type: 'gauge'
      },
      gauge: {
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
        pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'], // the three color levels for the percentage values.
        threshold: {
          //            unit: 'value', // percentage is default
          //            max: 200, // 100 is default
          values: [30, 60, 90, 100]
        }
      },
      size: {
        height: 180
      }
    });

    this.chart_2 = c3.generate({
      bindto: '#chart_2',
      data: {
        columns: [
          ['data', 50]
        ],
        type: 'gauge'
      },
      gauge: {
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
        pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'], // the three color levels for the percentage values.
        threshold: {
          //            unit: 'value', // percentage is default
          //            max: 200, // 100 is default
          values: [30, 60, 90, 100]
        }
      },
      size: {
        height: 180
      }
    });

    this.chart_3 = c3.generate({
      bindto: '#chart_3',
      data: {
        columns: [
          ['data', 75]
        ],
        type: 'gauge'
      },
      gauge: {
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
        pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'], // the three color levels for the percentage values.
        threshold: {
          //            unit: 'value', // percentage is default
          //            max: 200, // 100 is default
          values: [30, 60, 90, 100]
        }
      },
      size: {
        height: 180
      }
    });

    this.chart_4 = c3.generate({
      bindto: '#chart_4',
      data: {
        columns: [
          ['data', 100]
        ],
        type: 'gauge'
      },
      gauge: {
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
        pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'], // the three color levels for the percentage values.
        threshold: {
          //            unit: 'value', // percentage is default
          //            max: 200, // 100 is default
          values: [30, 60, 90, 100]
        }
      },
      size: {
        height: 180
      }
    });
    this.gaugeValues();
  }
}
