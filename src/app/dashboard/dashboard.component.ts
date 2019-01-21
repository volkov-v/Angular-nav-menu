import {Component, OnInit} from '@angular/core';

import {Chart} from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  lineChart = [];
  barChart = [];
  horizontalBarChart = [];
  doughnutChart = [];

  // constructor() { }
  ngOnInit() {


    this.lineChart = new Chart('lineChart', {
      type: 'line',
      data: {
        labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
        datasets: [{
          data: [86, 114, 467, 106, 681, 111, 133, 221, 783, 350],
          label: 'First dataset',
          borderColor: '#3e95cd',
          fill: false
        }, {
          data: [282, 567, 411, 502, 635, 809, 947, 80, 3700, 498],
          label: 'Second dataset',
          borderColor: '#8e5ea2',
          fill: false
        }, {
          data: [168, 754, 178, 2671, 203, 276, 408, 547, 675, 734],
          label: 'Third dataset',
          borderColor: '#3cba9f',
          fill: false
        }, {
          data: [40, 20, 10, 2678, 24, 38, 74, 167, 508, 784],
          label: 'Fourth dataset',
          borderColor: '#e8c3b9',
          fill: false
        }, {
          data: [6, 3, 2, 765, 7, 26, 82, 172, 312, 433],
          label: 'Fifth dataset',
          borderColor: '#c45850',
          fill: false
        }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Dashboard'
        }
      }
    });



  }

}
