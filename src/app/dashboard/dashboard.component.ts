import { Component, HostListener, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { formatDate } from '@angular/common';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

declare var Chart: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  myDate = new Date();

  public doughnutChartLabels: Label[] = ['FOR: 10%', 'AGAINST: 20%', 'ABSTAINED: 30%', 'NOT SURE: 30%', 'DIDN T VOTE: 10%'];
  public doughnutChartData: MultiDataSet = [
    [10, 20, 30, 30, 10]
  ];
  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartOptions: any = {
    legend: {
      position: 'bottom',
      labels: {
        boxWidth: 10
      }
    },
    elements: {
      center: {
        // the longest text that could appear in the center
        maxText: '100%',
        text: '10%',
        fontColor: '#333333',
        fontFamily: "'Lato'",
        fontStyle: 'bold',
        // fontSize: 12,
        // if a fontSize is NOT specified, we will scale (within the below limits) maxText to take up the maximum space in the center
        // if these are not specified either, we default to 1 and 256
        minFontSize: 1,
        maxFontSize: 256,
      }
    }
  };

  private donutColors = [
    {
      backgroundColor: [
        '#2ecbab',
        '#ff4c58',
        '#1d91f4',
        '#f1ff6b',
        '#D9DDE6'
      ]
    }
  ];

  private _opened: boolean = false;
  private _modeNum: number = 1;
  private _positionNum: number = 0;

  private _MODES: Array<string> = ['over', 'push', 'slide'];
  private _POSITIONS: Array<string> = ['left', 'right', 'top', 'bottom'];

  private _toggleOpened(): void {
    this._opened = !this._opened;
  }

  public cameras: any[] = [
    { title: 'Front Door Camera', ip: '192.169.177.139', status: 'Active' },
    { title: 'Front Door Camera', ip: '192.169.177.139', status: 'Active' },
    { title: 'Front Door Camera', ip: '192.169.177.139', status: 'Active' },
    { title: 'Front Door Camera', ip: '192.169.177.139', status: 'Active' },
    { title: 'Front Door Camera', ip: '192.169.177.139', status: 'Active' },
    { title: 'Front Door Camera', ip: '192.169.177.139', status: 'Active' },
    { title: 'Front Door Camera', ip: '192.169.177.139', status: 'Active' }
  ];

  constructor(@Inject(DOCUMENT) document) {
    formatDate(new Date(), 'h/s/aaa', 'en');
    setInterval(() => {
      this.myDate = new Date();
    }, 1);
  }

  @HostListener('load', ['$event'])
  onWindowOnload(e) {
    let navbar = document.querySelector('.navbar');

    navbar.classList.add('block');
  }

  ngOnInit() {
    Chart.pluginService.register({
      afterUpdate: function (chart) {
        if (chart.config.options.elements.center) {
          var helpers = Chart.helpers;
          var centerConfig = chart.config.options.elements.center;
          var globalConfig = Chart.defaults.global;
          var ctx = chart.chart.ctx;

          var fontStyle = helpers.getValueOrDefault(centerConfig.fontStyle, globalConfig.defaultFontStyle);
          var fontFamily = helpers.getValueOrDefault(centerConfig.fontFamily, globalConfig.defaultFontFamily);

          if (centerConfig.fontSize)
            var fontSize = centerConfig.fontSize;
          // figure out the best font size, if one is not specified
          else {
            ctx.save();
            var fontSize = helpers.getValueOrDefault(centerConfig.minFontSize, 1);
            var maxFontSize = helpers.getValueOrDefault(centerConfig.maxFontSize, 256);
            var maxText = helpers.getValueOrDefault(centerConfig.maxText, centerConfig.text);

            do {
              ctx.font = helpers.fontString(fontSize, fontStyle, fontFamily);
              var textWidth = ctx.measureText(maxText).width;

              // check if it fits, is within configured limits and that we are not simply toggling back and forth
              if (textWidth < chart.innerRadius * 2 && fontSize < maxFontSize)
                fontSize += 1;
              else {
                // reverse last step
                fontSize -= 1;
                break;
              }
            } while (true)
            ctx.restore();
          }

          // save properties
          chart.center = {
            font: helpers.fontString(fontSize, fontStyle, fontFamily),
            fillStyle: helpers.getValueOrDefault(centerConfig.fontColor, globalConfig.defaultFontColor)
          };
        }
      },
      afterDraw: function (chart) {
        if (chart.center) {
          var centerConfig = chart.config.options.elements.center;
          var ctx = chart.chart.ctx;

          ctx.save();
          ctx.font = chart.center.font;
          ctx.fillStyle = chart.center.fillStyle;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          var centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
          var centerY = (chart.chartArea.top + chart.chartArea.bottom) / 2;
          ctx.fillText(centerConfig.text, centerX, centerY);
          ctx.restore();
        }
      },
    })
  }

}
