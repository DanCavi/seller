import React, { Component } from 'react';
import Chart from 'react-apexcharts';

class AnalisisChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        title: {
          text: 'Real v/s Presupuesto',
          align: 'center'
        },
        legend: {
          show: true,
        },
        stroke: {
          curve: 'straight',
          width: 2
        },
        fill: {
          type: 'gradient',
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
      },
      series: [{
        name: 'MM$ Real',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
      }, {
        name: 'MM$ Presupuesto',
        data: [10, 20, 30, 40, 50, 60, 70, 80, 90]
      }]
    }
  }

  render() {
    return (
      <Chart
        options={this.state.options}
        series={this.state.series}
        height="250"
        type='area'
      />
        )
    }
}

export default AnalisisChart;