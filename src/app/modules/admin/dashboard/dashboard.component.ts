import { Component, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  private breakpointObserver = inject(BreakpointObserver);

  /** Based on the screen size, switch from standard to one column per row */

  chart = new Chart({
    chart: {
      type: 'line',
      height: '300px',
    },
    title: {
      text: 'store statistics',
      style: {
        fontSize: '14px',
      },
    },
    xAxis: {
      categories: ['book1', 'book2', 'book3'],
    },
    yAxis: {
      title: {
        text: 'price in $',
      },
    },
    series: [
      {
        name: 'magazine',
        type: 'line',
        data: [22, 33, 55, 77, 88],
      },
      {
        name: 'roman',
        type: 'line',
        data: [45, 63, 35, 27, 88],
      },
    ],
    credits: {
      enabled: false,
    },
  });

  bars = new Chart({
    chart: {
      type: 'column',
      height: '300px',
    },
    title: {
      text: 'bars book',
    },
    xAxis: {
      categories: ['book1', 'book2', 'book3'],
      labels: {
        style: {
          fontSize: '8px',
        },
      },
    },
    yAxis: {
      title: {
        text: 'price in $',
      },
      labels: {
        style: {
          fontSize: '8px',
        },
      },
    },
    series: [
      {
        name: 'magazine',
        type: 'column',
        data: [22, 33, 55, 77, 88],
      },
      {
        name: 'roman',
        type: 'column',
        data: [45, 63, 35, 27, 88],
      },
    ],
    credits: {
      enabled: false,
    },
  });
  circle = new Chart({
    chart: {
      type: 'pie',
      height: '300px',
    },
    title: {
      text: 'bars book',
    },
    xAxis: {
      categories: ['book1', 'book2', 'book3'],
      labels: {
        style: {
          fontSize: '8px',
        },
      },
    },
    yAxis: {
      title: {
        text: 'price in $',
      },
      labels: {
        style: {
          fontSize: '8px',
        },
      },
    },
    series: [
      {
        name: 'magazine',
        type: 'pie',
        data: [22, 33, 55, 77, 88],
      },
      {
        name: 'roman',
        type: 'pie',
        data: [45, 63, 35, 27, 88],
      },
    ],
    credits: {
      enabled: false,
    },
  });
}
