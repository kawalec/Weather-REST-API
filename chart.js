// import Chart from '../node_modules/chart.js/dist/Chart.bundle.min.js';

const ctx = document.querySelector('#chart').getContext('2d');

let chart = new Chart(ctx, {
    type: 'line',
    data: {
        datasets: [{
            label: 'Temperature (°C)',
            data: [7.54, 6.57, 8.25, 13.85, 15.89, 15.31, 11.97, 9.38],
            backgroundColor: 'darkblue',
            borderColor: 'darkblue',
            fill: false,
            pointHoverBackgroundColor: 'darkblue'
        }],
        labels: ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00']
    },
    options: {
        title: {
            display: false,
            fontColor: 'navy blue',
            text: 'Temperature chart'
        },
        layout: {
            padding: {
                left: 0,
                right: 0,
                top: 20,
                bottom: 0
            }
        },
        tooltips: {
            enabled: true,
            mode: 'nearest',
            callbacks: {
                labelColor: function(tooltipItem, chart) {
                    return {
                        borderColor: 'rgba(75, 192, 192, 0.2)',
                        backgroundColor: 'rgba(75, 192, 192, 0.2)'
                    };
                },
                labelTextColor: function(tooltipItem, chart) {
                    return '#fff';
                }
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    suggestedMin: 0,
                    suggestedMax: 20,
                    stepSize: 5
                }
            }]
        }
    }
});
