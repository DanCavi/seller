import React, { Component } from 'react';
import Chart from 'react-apexcharts';

class ProspectosChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        plotOptions: {
          bar: {
            horizontal: true,
            isFunnel: true,
          }
        },
        title: {
          text: 'Pipeline',
          align: 'center'
        },
        xaxis: {
          categories: ['No inscritos', 'Preventa', 'Venta', 'Titulados'],
          labels: {
            show: false
          }
        },
        legend: {
          show: true,
        },
      },
      series: [{
        name: 'Cantidad Prospectos',
        data: [325, 171, 163, 129]
      }]
    }
  }

  render() {
    return (
      <Chart
        options={this.state.options}
        series={this.state.series}
        height="350"
        type='bar'
      />
    )
  }
}

export default ProspectosChart;