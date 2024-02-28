import React, { Component } from 'react';
import Chart from 'react-apexcharts';

class IngresosChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        colors: ['#2196F3', '#673AB7'],
        title: {
          text: 'Venta Mensual Montos Real',
          align: 'center'
        },
        stroke: {
          width: 2  
        },
        legend: {
          show: true,
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
      },
      series: [{
        name: 'Año 2015',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
      }, {
        name: 'Año 2016',
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
        type='line'
      />
        )
    }
}

export default IngresosChart;