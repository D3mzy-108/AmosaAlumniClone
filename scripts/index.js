const data = [311, 336, 270, 221, 281, 183, 200, 294, 343, 276, 357, 181, 281]
var sum = 0


data.forEach(d => {
    sum += d
})




const options = {
    chart: {
        type: 'donut',
        width: '100%',
    },
    dataLabels: {
        enabled: false,
    },
    series: data,
    labels: ['Oyegunsen Afolabi', 'Ayodeji Ogundoro', 'Oluwarotimi Amu', 'Ifeoma Ebele', 'Adeoye Mulikat', 'Akinwale Akingbade', 'Wasiu Oluwole', 'Adedolapo Adetutu', 'Tinuade Famuyiwa', 'Ojo Yekini', 'Olusegun Akinniran', 'Olufunke Anthonia', 'Taiwo Mayowa', 'Titilayo Afunmiso', 'Enitan Adeworan'],
    legend: {
        show: false
    },
    stroke: {
        width: 4,
        colors: ['#F5F5F5'],
    },
    plotOptions: {
        pie: {
            donut: {
                size: '80%',
                labels: {
                    show: true,
                    name: {
                        show: true,
                        showAlways: true,
                        fontSize: '10px',
                        fontFamily: 'sans-serif',
                        fontWeight: 300,
                        color: '#777777',
                        formatter: function (w) {
                            return 'Votes';
                        }
                    },
                    total: {
                        show: true,
                        showAlways: true,
                        fontSize: '24px',
                        fontFamily: 'sans-serif',
                        fontWeight: 600,
                        color: '#222222',
                        formatter: function (w) {
                            return `${sum}`;
                        }
                    }
                }
            }
        }
    },
    responsive: [{
        breakpoint: 767,
        options: {
            plotOptions: {
                pie: {
                    donut: {
                        labels: {
                            total: {
                                fontSize: '14px',
                                fontWeight: 300,
                            }
                        }
                    }
                }
            }
        }
    }]
}


var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
