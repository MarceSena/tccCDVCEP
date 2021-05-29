import * as cep from './criaValores';


$(document).ready(function () {
    console.log("aqui:", cep.LC)
    console.log("valores:", cep.valoresMedia[0])
    console.log("valores:", cep.valoresMedia[4])

    var ctx = document.getElementById('mediaCharts');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['OBS1', 'OBS2', 'OBS3', 'OBS4', 'OBS5'],
            datasets: [{
                    label: '# LSC',
                    data: [
                        cep.LSC,

                        cep.LSC,

                        cep.LSC,

                        cep.LSC,

                        cep.LSC,

                        cep.LSC

                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',

                    ],
                    borderWidth: 2
                },
                {
                    label: '# LC',
                    data: [
                        cep.LC,
                        cep.LC,
                        cep.LC,
                        cep.LC,
                        cep.LC

                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)',
                    ],
                    borderColor: [
                        'rgba(54, 162, 235, 1)',

                    ],
                    borderWidth: 2
                },
                {
                    label: '# LIC',
                    data: [
                        cep.LIC,
                        cep.LIC,
                        cep.LIC,
                        cep.LIC,
                        cep.LIC

                    ],
                    backgroundColor: [
                        'rgba(255, 255, 255, 0)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',

                    ],
                    borderWidth: 2
                },
                {
                    label: '#VALORES',
                    data: [
                        cep.valoresMedia[0],
                        cep.valoresMedia[1],
                        cep.valoresMedia[2],
                        cep.valoresMedia[3],
                        cep.valoresMedia[4],



                    ],
                    backgroundColor: [
                        'rgba(255, 255, 255, 0)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',

                    ],
                    borderWidth: 2
                }


            ]
        },
        options: {
            scales: {
                y: {
                    min: 10,
                    max: 50,
                },
                title: {
                    display: true,
                    text: 'MEDIA'
                }
            }
        }
    });


    var ctx = document.getElementById('amplitudeCharts');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['OBS1', 'OBS2', 'OBS3', 'OBS4', 'OBS5'],
            datasets: [{
                    label: '# LSC',
                    data: [
                        cep.LSCR,
                        cep.LSCR,
                        cep.LSCR,
                        cep.LSCR,
                        cep.LSCR,
                        cep.LSCR

                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',

                    ],
                    borderWidth: 2
                },
                {
                    label: '# LC',
                    data: [
                        cep.LCR,
                        cep.LCR,
                        cep.LCR,
                        cep.LCR,
                        cep.LCR

                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0)',
                    ],
                    borderColor: [
                        'rgba(54, 162, 235, 1)',

                    ],
                    borderWidth: 2
                },
                {
                    label: '# LIC',
                    data: [
                        cep.LICR,
                        cep.LICR,
                        cep.LICR,
                        cep.LICR,
                        cep.LICR

                    ],
                    backgroundColor: [
                        'rgba(255, 255, 255, 0)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',

                    ],
                    borderWidth: 2
                },
                {
                    label: '#VALORES',
                    data: [
                        cep.valoresAmplitude[0],
                        cep.valoresAmplitude[1],
                        cep.valoresAmplitude[2],
                        cep.valoresAmplitude[3],
                        cep.valoresAmplitude[4],

                    ],
                    backgroundColor: [
                        'rgba(255, 255, 255, 0)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',

                    ],
                    borderWidth: 2
                }


            ]
        },
        options: {
            scales: {
                y: {
                    min: 10,
                    max: 50,
                },
                title: {
                    display: true,
                    text: 'MEDIA'
                }
            }
        }
    });

});
