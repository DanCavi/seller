import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class ProspectosChart extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     options: {
  //       plotOptions: {
  //         bar: {
  //           horizontal: true,
  //           isFunnel: true,
  //         }
  //       },
  //       title: {
  //         text: 'Pipeline',
  //         align: 'center'
  //       },
  //       xaxis: {
  //         categories: ['No inscritos', 'Preventa', 'Venta', 'Titulados'],
  //         labels: {
  //           show: false
  //         }
  //       },
  //       legend: {
  //         show: true,
  //       },
  //     },
  //     series: [{
  //       name: 'Cantidad Prospectos',
  //       data: [325, 171, 163, 129]
  //     }]
  //   }
  // }

  // render() {
  //   return (
  //     <Chart
  //       options={this.state.options}
  //       series={this.state.series}
  //       height="350"
  //       type='bar'
  //     />
  //   )
  // }
  render() {
    const options = {
      animationEnabled: true,
      title:{
        text: "Pipeline"
      },
      data: [{
        type: "funnel",
        toolTipContent: "{label}: {y}",
        indexLabelPlacement: "outside",
        indexLabel: "{label}: {y}",
        dataPoints: [
          { label: "No inscrito", y: 325 },
          { label: "Preventa", y: 171 },
          { label: "Venta", y: 163 },
          { label: "Titulados", y: 129 }
        ]
      }]
    }
    return (
      <div style={{ width: '50%', height: '350px', marginBottom: '18px', marginLeft: 'auto', marginRight: 'auto' }}>
        <CanvasJSChart options={options} onRef={ref => this.chart = ref} />
      </div>
    )
  }
}

export default ProspectosChart;