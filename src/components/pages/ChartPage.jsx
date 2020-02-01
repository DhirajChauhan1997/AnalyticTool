import React, { Component } from 'react';  
import Chart from "react-apexcharts";
import DynamicTable from "./DynamicTable";
import ApexCharts from "apexcharts";

import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

function generateDayWiseTimeSeries(baseval, count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
        var y =
            Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

        series.push([baseval, y]);
        baseval += 86400000;
        i++;
    }
    return series;
}

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 345
    },
    media: {
        height: 0,
        paddingTop: "56.25%" // 16:9
    },
    expand: {
        transform: "rotate(0deg)",
        marginLeft: "auto",
        transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shortest
        })
    },
    expandOpen: {
        transform: "rotate(180deg)"
    },
    avatar: {
        backgroundColor: red[500]
    },
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary
    }
}));
var dataSet = ["", "", ""];
var moment;
function generateData(baseval, count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
        var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
        var y =
            Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
        var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

        series.push([x, y, z]);
        baseval += 86400000;
        i++;
    }
    return series;
}

export default class ChartPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data1: [
                { Fruit: "Apple", Cost: "100" },
                { Fruit: "Apple", Cost: "100" },
                { Fruit: "Apple", Cost: "100" },
                { Fruit: "Apple", Cost: "100" },
                { Fruit: "Apple", Cost: "100" }
            ],
            data2: [
                { Name: "Abc", Age: 15, Location: "Bangalore", city: "Bangalore" },
                { Name: "Def", Age: 43, Location: "Mumbai", city: "Bangalore" },
                { Name: "Uff", Age: 30, Location: "Chennai", city: "Bangalore" },
                { Name: "Ammse", Age: 87, Location: "Delhi", city: "Bangalore" },
                { Name: "Yysse", Age: 28, Location: "Hyderabad", city: "Bangalore" }
            ],
            baroptions: {
                chart: {
                    id: "basic-bar"
                },
                xaxis: {
                    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
                }
            },
            barseries: [
                {
                    name: "College",
                    data: [30, 40, 45, 50, 49, 60, 70, 91]
                },
                {
                    name: "Home",
                    data: [10, 60, 55, 50, 59, 40, 30, 9]
                }
            ],
            options: {
                labels: ["College", "Company", "University", "Hostel", "Class"],
                responsive: [
                    {
                        breakpoint: 480,
                        options: {
                            chart: {
                                width: 200
                            },
                            legend: {
                                position: "bottom"
                            }
                        }
                    }
                ]
            },
            series1: [44, 55, 13, 43, 22],
            series: [
                {
                    name: "Inflation",
                    data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
                }
            ],
            options1: {
                chart: {
                    height: 350,
                    type: "bar"
                },
                plotOptions: {
                    bar: {
                        dataLabels: {
                            position: "top" // top, center, bottom
                        }
                    }
                },
                dataLabels: {
                    enabled: true,
                    formatter: function (val) {
                        return val + "%";
                    },
                    offsetY: -20,
                    style: {
                        fontSize: "12px",
                        colors: ["#304758"]
                    }
                },

                xaxis: {
                    categories: [
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                        "Oct",
                        "Nov",
                        "Dec"
                    ],
                    position: "top",
                    labels: {
                        offsetY: -18
                    },
                    axisBorder: {
                        show: false
                    },
                    axisTicks: {
                        show: false
                    },
                    crosshairs: {
                        fill: {
                            type: "gradient",
                            gradient: {
                                colorFrom: "#D8E3F0",
                                colorTo: "#BED1E6",
                                stops: [0, 100],
                                opacityFrom: 0.4,
                                opacityTo: 0.5
                            }
                        }
                    },
                    tooltip: {
                        enabled: true,
                        offsetY: -35
                    }
                },
                fill: {
                    gradient: {
                        shade: "light",
                        type: "horizontal",
                        shadeIntensity: 0.25,
                        gradientToColors: undefined,
                        inverseColors: true,
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [50, 0, 100, 100]
                    }
                },
                yaxis: {
                    axisBorder: {
                        show: false
                    },
                    axisTicks: {
                        show: false
                    },
                    labels: {
                        show: false,
                        formatter: function (val) {
                            return val + "%";
                        }
                    }
                },
                title: {
                    text: "Monthly Inflation in Argentina, 2002",
                    floating: true,
                    offsetY: 320,
                    align: "center",
                    style: {
                        color: "#444"
                    }
                }
            },
            //Spline Area Chart
            seriesSpline: [
                {
                    name: "series1",
                    data: [31, 40, 28, 51, 42, 109, 100]
                },
                {
                    name: "series2",
                    data: [11, 32, 45, 32, 34, 52, 41]
                }
            ],
            optionsSpline: {
                chart: {
                    height: 350,
                    type: "area"
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: "smooth"
                },
                xaxis: {
                    type: "datetime",
                    categories: [
                        "2018-09-19T00:00:00.000Z",
                        "2018-09-19T01:30:00.000Z",
                        "2018-09-19T02:30:00.000Z",
                        "2018-09-19T03:30:00.000Z",
                        "2018-09-19T04:30:00.000Z",
                        "2018-09-19T05:30:00.000Z",
                        "2018-09-19T06:30:00.000Z"
                    ]
                },
                tooltip: {
                    x: {
                        format: "dd/MM/yy HH:mm"
                    }
                }
            },
            // Area Charts > Datetime X-Axis

            seriesDatetime: [
                {
                    data: [
                        [1327359600000, 30.95],
                        [1327446000000, 31.34],
                        [1327532400000, 31.18],
                        [1327618800000, 31.05],
                        [1327878000000, 31.0],
                        [1327964400000, 30.95],
                        [1328050800000, 31.24],
                        [1328137200000, 31.29],
                        [1328223600000, 31.85],
                        [1328482800000, 31.86],
                        [1328569200000, 32.28],
                        [1328655600000, 32.1],
                        [1328742000000, 32.65],
                        [1328828400000, 32.21],
                        [1329087600000, 32.35],
                        [1329174000000, 32.44],
                        [1329260400000, 32.46],
                        [1329346800000, 32.86],
                        [1329433200000, 32.75],
                        [1329778800000, 32.54],
                        [1329865200000, 32.33],
                        [1329951600000, 32.97],
                        [1330038000000, 33.41],
                        [1330297200000, 33.27],
                        [1330383600000, 33.27],
                        [1330470000000, 32.89],
                        [1330556400000, 33.1],
                        [1330642800000, 33.73],
                        [1330902000000, 33.22],
                        [1330988400000, 31.99],
                        [1331074800000, 32.41],
                        [1331161200000, 33.05],
                        [1331247600000, 33.64],
                        [1331506800000, 33.56],
                        [1331593200000, 34.22],
                        [1331679600000, 33.77],
                        [1331766000000, 34.17],
                        [1331852400000, 33.82],
                        [1332111600000, 34.51],
                        [1332198000000, 33.16],
                        [1332284400000, 33.56],
                        [1332370800000, 33.71],
                        [1332457200000, 33.81],
                        [1332712800000, 34.4],
                        [1332799200000, 34.63],
                        [1332885600000, 34.46],
                        [1332972000000, 34.48],
                        [1333058400000, 34.31],
                        [1333317600000, 34.7],
                        [1333404000000, 34.31],
                        [1333490400000, 33.46],
                        [1333576800000, 33.59],
                        [1333922400000, 33.22],
                        [1334008800000, 32.61],
                        [1334095200000, 33.01],
                        [1334181600000, 33.55],
                        [1334268000000, 33.18],
                        [1334527200000, 32.84],
                        [1334613600000, 33.84],
                        [1334700000000, 33.39],
                        [1334786400000, 32.91],
                        [1334872800000, 33.06],
                        [1335132000000, 32.62],
                        [1335218400000, 32.4],
                        [1335304800000, 33.13],
                        [1335391200000, 33.26],
                        [1335477600000, 33.58],
                        [1335736800000, 33.55],
                        [1335823200000, 33.77],
                        [1335909600000, 33.76],
                        [1335996000000, 33.32],
                        [1336082400000, 32.61],
                        [1336341600000, 32.52],
                        [1336428000000, 32.67],
                        [1336514400000, 32.52],
                        [1336600800000, 31.92],
                        [1336687200000, 32.2],
                        [1336946400000, 32.23],
                        [1337032800000, 32.33],
                        [1337119200000, 32.36],
                        [1337205600000, 32.01],
                        [1337292000000, 31.31],
                        [1337551200000, 32.01],
                        [1337637600000, 32.01],
                        [1337724000000, 32.18],
                        [1337810400000, 31.54],
                        [1337896800000, 31.6],
                        [1338242400000, 32.05],
                        [1338328800000, 31.29],
                        [1338415200000, 31.05],
                        [1338501600000, 29.82],
                        [1338760800000, 30.31],
                        [1338847200000, 30.7],
                        [1338933600000, 31.69],
                        [1339020000000, 31.32],
                        [1339106400000, 31.65],
                        [1339365600000, 31.13],
                        [1339452000000, 31.77],
                        [1339538400000, 31.79],
                        [1339624800000, 31.67],
                        [1339711200000, 32.39],
                        [1339970400000, 32.63],
                        [1340056800000, 32.89],
                        [1340143200000, 31.99],
                        [1340229600000, 31.23],
                        [1340316000000, 31.57],
                        [1340575200000, 30.84],
                        [1340661600000, 31.07],
                        [1340748000000, 31.41],
                        [1340834400000, 31.17],
                        [1340920800000, 32.37],
                        [1341180000000, 32.19],
                        [1341266400000, 32.51],
                        [1341439200000, 32.53],
                        [1341525600000, 31.37],
                        [1341784800000, 30.43],
                        [1341871200000, 30.44],
                        [1341957600000, 30.2],
                        [1342044000000, 30.14],
                        [1342130400000, 30.65],
                        [1342389600000, 30.4],
                        [1342476000000, 30.65],
                        [1342562400000, 31.43],
                        [1342648800000, 31.89],
                        [1342735200000, 31.38],
                        [1342994400000, 30.64],
                        [1343080800000, 30.02],
                        [1343167200000, 30.33],
                        [1343253600000, 30.95],
                        [1343340000000, 31.89],
                        [1343599200000, 31.01],
                        [1343685600000, 30.88],
                        [1343772000000, 30.69],
                        [1343858400000, 30.58],
                        [1343944800000, 32.02],
                        [1344204000000, 32.14],
                        [1344290400000, 32.37],
                        [1344376800000, 32.51],
                        [1344463200000, 32.65],
                        [1344549600000, 32.64],
                        [1344808800000, 32.27],
                        [1344895200000, 32.1],
                        [1344981600000, 32.91],
                        [1345068000000, 33.65],
                        [1345154400000, 33.8],
                        [1345413600000, 33.92],
                        [1345500000000, 33.75],
                        [1345586400000, 33.84],
                        [1345672800000, 33.5],
                        [1345759200000, 32.26],
                        [1346018400000, 32.32],
                        [1346104800000, 32.06],
                        [1346191200000, 31.96],
                        [1346277600000, 31.46],
                        [1346364000000, 31.27],
                        [1346709600000, 31.43],
                        [1346796000000, 32.26],
                        [1346882400000, 32.79],
                        [1346968800000, 32.46],
                        [1347228000000, 32.13],
                        [1347314400000, 32.43],
                        [1347400800000, 32.42],
                        [1347487200000, 32.81],
                        [1347573600000, 33.34],
                        [1347832800000, 33.41],
                        [1347919200000, 32.57],
                        [1348005600000, 33.12],
                        [1348092000000, 34.53],
                        [1348178400000, 33.83],
                        [1348437600000, 33.41],
                        [1348524000000, 32.9],
                        [1348610400000, 32.53],
                        [1348696800000, 32.8],
                        [1348783200000, 32.44],
                        [1349042400000, 32.62],
                        [1349128800000, 32.57],
                        [1349215200000, 32.6],
                        [1349301600000, 32.68],
                        [1349388000000, 32.47],
                        [1349647200000, 32.23],
                        [1349733600000, 31.68],
                        [1349820000000, 31.51],
                        [1349906400000, 31.78],
                        [1349992800000, 31.94],
                        [1350252000000, 32.33],
                        [1350338400000, 33.24],
                        [1350424800000, 33.44],
                        [1350511200000, 33.48],
                        [1350597600000, 33.24],
                        [1350856800000, 33.49],
                        [1350943200000, 33.31],
                        [1351029600000, 33.36],
                        [1351116000000, 33.4],
                        [1351202400000, 34.01],
                        [1351638000000, 34.02],
                        [1351724400000, 34.36],
                        [1351810800000, 34.39],
                        [1352070000000, 34.24],
                        [1352156400000, 34.39],
                        [1352242800000, 33.47],
                        [1352329200000, 32.98],
                        [1352415600000, 32.9],
                        [1352674800000, 32.7],
                        [1352761200000, 32.54],
                        [1352847600000, 32.23],
                        [1352934000000, 32.64],
                        [1353020400000, 32.65],
                        [1353279600000, 32.92],
                        [1353366000000, 32.64],
                        [1353452400000, 32.84],
                        [1353625200000, 33.4],
                        [1353884400000, 33.3],
                        [1353970800000, 33.18],
                        [1354057200000, 33.88],
                        [1354143600000, 34.09],
                        [1354230000000, 34.61],
                        [1354489200000, 34.7],
                        [1354575600000, 35.3],
                        [1354662000000, 35.4],
                        [1354748400000, 35.14],
                        [1354834800000, 35.48],
                        [1355094000000, 35.75],
                        [1355180400000, 35.54],
                        [1355266800000, 35.96],
                        [1355353200000, 35.53],
                        [1355439600000, 37.56],
                        [1355698800000, 37.42],
                        [1355785200000, 37.49],
                        [1355871600000, 38.09],
                        [1355958000000, 37.87],
                        [1356044400000, 37.71],
                        [1356303600000, 37.53],
                        [1356476400000, 37.55],
                        [1356562800000, 37.3],
                        [1356649200000, 36.9],
                        [1356908400000, 37.68],
                        [1357081200000, 38.34],
                        [1357167600000, 37.75],
                        [1357254000000, 38.13],
                        [1357513200000, 37.94],
                        [1357599600000, 38.14],
                        [1357686000000, 38.66],
                        [1357772400000, 38.62],
                        [1357858800000, 38.09],
                        [1358118000000, 38.16],
                        [1358204400000, 38.15],
                        [1358290800000, 37.88],
                        [1358377200000, 37.73],
                        [1358463600000, 37.98],
                        [1358809200000, 37.95],
                        [1358895600000, 38.25],
                        [1358982000000, 38.1],
                        [1359068400000, 38.32],
                        [1359327600000, 38.24],
                        [1359414000000, 38.52],
                        [1359500400000, 37.94],
                        [1359586800000, 37.83],
                        [1359673200000, 38.34],
                        [1359932400000, 38.1],
                        [1360018800000, 38.51],
                        [1360105200000, 38.4],
                        [1360191600000, 38.07],
                        [1360278000000, 39.12],
                        [1360537200000, 38.64],
                        [1360623600000, 38.89],
                        [1360710000000, 38.81],
                        [1360796400000, 38.61],
                        [1360882800000, 38.63],
                        [1361228400000, 38.99],
                        [1361314800000, 38.77],
                        [1361401200000, 38.34],
                        [1361487600000, 38.55],
                        [1361746800000, 38.11],
                        [1361833200000, 38.59],
                        [1361919600000, 39.6]
                    ]
                }
            ],
            optionsDatetime: {
                chart: {
                    type: "area",
                    height: 350
                },
                annotations: {
                    yaxis: [
                        {
                            y: 30,
                            borderColor: "#999",
                            label: {
                                show: true,
                                text: "Support",
                                style: {
                                    color: "#fff",
                                    background: "#00E396"
                                }
                            }
                        }
                    ],
                    xaxis: [
                        {
                            x: new Date("14 Nov 2012").getTime(),
                            borderColor: "#999",
                            yAxisIndex: 0,
                            label: {
                                show: true,
                                text: "Rally",
                                style: {
                                    color: "#fff",
                                    background: "#775DD0"
                                }
                            }
                        }
                    ]
                },
                dataLabels: {
                    enabled: false
                },
                markers: {
                    size: 0,
                    style: "hollow"
                },
                xaxis: {
                    type: "datetime",
                    min: new Date("01 Mar 2012").getTime(),
                    tickAmount: 6
                },
                tooltip: {
                    x: {
                        format: "dd MMM yyyy"
                    }
                },
                fill: {
                    type: "gradient",
                    gradient: {
                        shadeIntensity: 1,
                        opacityFrom: 0.7,
                        opacityTo: 0.9,
                        stops: [0, 100]
                    }
                }
            },
            selectionDatetime: "one_year",
            seriesStacked: [
                {
                    name: "South",
                    data: generateDayWiseTimeSeries(
                        new Date("11 Feb 2017 GMT").getTime(),
                        20,
                        {
                            min: 10,
                            max: 60
                        }
                    )
                },
                {
                    name: "North",
                    data: generateDayWiseTimeSeries(
                        new Date("11 Feb 2017 GMT").getTime(),
                        20,
                        {
                            min: 10,
                            max: 20
                        }
                    )
                },
                {
                    name: "Central",
                    data: generateDayWiseTimeSeries(
                        new Date("11 Feb 2017 GMT").getTime(),
                        20,
                        {
                            min: 10,
                            max: 15
                        }
                    )
                }
            ],
            optionsStacked: {
                chart: {
                    type: "area",
                    height: 350,
                    stacked: true,
                    events: {
                        selection: function (chart, e) {
                            console.log(new Date(e.xaxis.min));
                        }
                    }
                },
                colors: ["#008FFB", "#00E396", "#CED4DC"],
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: "smooth"
                },
                fill: {
                    type: "gradient",
                    gradient: {
                        opacityFrom: 0.6,
                        opacityTo: 0.8
                    }
                },
                legend: {
                    position: "top",
                    horizontalAlign: "left"
                },
                xaxis: {
                    type: "datetime"
                }
            },
            seriesIrregularTimeseries: [
                {
                    name: "PRODUCT A",
                    data: [44, 55, 41, 67, 22, 43]
                },
                {
                    name: "PRODUCT B",
                    data: [13, 23, 20, 8, 13, 27]
                },
                {
                    name: "PRODUCT C",
                    data: [11, 17, 15, 15, 21, 14]
                },
                {
                    name: "PRODUCT D",
                    data: [21, 7, 25, 13, 22, 8]
                }
            ],
            optionsIrregularTimeseries: {
                chart: {
                    type: "area",
                    stacked: false,
                    height: 350,
                    zoom: {
                        enabled: false
                    }
                },
                dataLabels: {
                    enabled: false
                },
                markers: {
                    size: 0
                },
                fill: {
                    type: "gradient",
                    gradient: {
                        shadeIntensity: 1,
                        inverseColors: false,
                        opacityFrom: 0.45,
                        opacityTo: 0.05,
                        stops: [20, 100, 100, 100]
                    }
                },
                yaxis: {
                    labels: {
                        style: {
                            color: "#8e8da4"
                        },
                        offsetX: 0,
                        formatter: function (val) {
                            return (val / 1000000).toFixed(2);
                        }
                    },
                    axisBorder: {
                        show: false
                    },
                    axisTicks: {
                        show: false
                    }
                },
                xaxis: {
                    type: "datetime",
                    tickAmount: 8,
                    min: new Date("01/01/2014").getTime(),
                    max: new Date("01/20/2014").getTime(),
                    labels: {
                        rotate: -15,
                        rotateAlways: true,
                        formatter: function (val, timestamp) {
                            return moment(new Date(timestamp)).format("DD MMM YYYY");
                        }
                    }
                },
                title: {
                    text: "Irregular Data in Time Series",
                    align: "left",
                    offsetX: 14
                },
                tooltip: {
                    shared: true
                },
                legend: {
                    position: "top",
                    horizontalAlign: "right",
                    offsetX: -10
                }
            },
            seriesStacked: [
                {
                    name: "PRODUCT A",
                    data: [44, 55, 41, 67, 22, 43]
                },
                {
                    name: "PRODUCT B",
                    data: [13, 23, 20, 8, 13, 27]
                },
                {
                    name: "PRODUCT C",
                    data: [11, 17, 15, 15, 21, 14]
                },
                {
                    name: "PRODUCT D",
                    data: [21, 7, 25, 13, 22, 8]
                }
            ],
            optionsStacked: {
                chart: {
                    type: "bar",
                    height: 350,
                    stacked: true,
                    toolbar: {
                        show: true
                    },
                    zoom: {
                        enabled: true
                    }
                },
                responsive: [
                    {
                        breakpoint: 480,
                        options: {
                            legend: {
                                position: "bottom",
                                offsetX: -10,
                                offsetY: 0
                            }
                        }
                    }
                ],
                plotOptions: {
                    bar: {
                        horizontal: false
                    }
                },
                xaxis: {
                    type: "datetime",
                    categories: [
                        "01/01/2011 GMT",
                        "01/02/2011 GMT",
                        "01/03/2011 GMT",
                        "01/04/2011 GMT",
                        "01/05/2011 GMT",
                        "01/06/2011 GMT"
                    ]
                },
                legend: {
                    position: "right",
                    offsetY: 40
                },
                fill: {
                    opacity: 1
                }
            },
            seriesbubble: [
                {
                    name: "Bubble1",
                    data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
                        min: 10,
                        max: 60
                    })
                },
                {
                    name: "Bubble2",
                    data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
                        min: 10,
                        max: 60
                    })
                },
                {
                    name: "Bubble3",
                    data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
                        min: 10,
                        max: 60
                    })
                },
                {
                    name: "Bubble4",
                    data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
                        min: 10,
                        max: 60
                    })
                }
            ],
            optionsbubble: {
                chart: {
                    height: 350,
                    type: "bubble"
                },
                dataLabels: {
                    enabled: false
                },
                fill: {
                    opacity: 0.8
                },
                title: {
                    text: "Simple Bubble Chart"
                },
                xaxis: {
                    tickAmount: 12,
                    type: "category"
                },
                yaxis: {
                    max: 70
                },
                series: [
                    {
                        name: "Product1",
                        data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
                            min: 10,
                            max: 60
                        })
                    },
                    {
                        name: "Product2",
                        data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
                            min: 10,
                            max: 60
                        })
                    },
                    {
                        name: "Product3",
                        data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
                            min: 10,
                            max: 60
                        })
                    },
                    {
                        name: "Product4",
                        data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
                            min: 10,
                            max: 60
                        })
                    }
                ],
                options: {
                    chart: {
                        height: 350,
                        type: "bubble"
                    },
                    dataLabels: {
                        enabled: false
                    },
                    fill: {
                        type: "gradient"
                    },
                    title: {
                        text: "3D Bubble Chart"
                    },
                    xaxis: {
                        tickAmount: 12,
                        type: "datetime",
                        labels: {
                            rotate: 0
                        }
                    },
                    yaxis: {
                        max: 70
                    },
                    theme: {
                        palette: "palette2"
                    }
                }
            },

            seriesbubble3D: [
                {
                    name: "Product1",
                    data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
                        min: 10,
                        max: 60
                    })
                },
                {
                    name: "Product2",
                    data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
                        min: 10,
                        max: 60
                    })
                },
                {
                    name: "Product3",
                    data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
                        min: 10,
                        max: 60
                    })
                },
                {
                    name: "Product4",
                    data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
                        min: 10,
                        max: 60
                    })
                }
            ],
            optionsbubble3D: {
                chart: {
                    height: 350,
                    type: "bubble"
                },
                dataLabels: {
                    enabled: false
                },
                fill: {
                    type: "gradient"
                },
                title: {
                    text: "3D Bubble Chart"
                },
                xaxis: {
                    tickAmount: 12,
                    type: "datetime",
                    labels: {
                        rotate: 0
                    }
                },
                yaxis: {
                    max: 70
                },
                theme: {
                    palette: "palette2"
                }
            },
            //RoudedBarChartBasic
            seriesBasicBar: [70],
            optionsBasicBar: {
                chart: {
                    height: 350,
                    type: "radialBar"
                },
                plotOptions: {
                    radialBar: {
                        hollow: {
                            size: "70%"
                        }
                    }
                },
                labels: ["Cricket"]
            },
            //
            seriesMultipleRadialbars: [44, 55, 67, 83],
            optionsMultipleRadialbars: {
                chart: {
                    height: 350,
                    type: "radialBar"
                },
                plotOptions: {
                    radialBar: {
                        dataLabels: {
                            name: {
                                fontSize: "22px"
                            },
                            value: {
                                fontSize: "16px"
                            },
                            total: {
                                show: true,
                                label: "Total",
                                formatter: function (w) {
                                    // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                                    return 249;
                                }
                            }
                        }
                    }
                },
                labels: ["Apples", "Oranges", "Bananas", "Berries"]
            },
            seriesCustomAngleCircle: [76, 67, 61, 90],
            optionsCustomAngleCircle: {
                chart: {
                    height: 390,
                    type: "radialBar"
                },
                plotOptions: {
                    radialBar: {
                        offsetY: 0,
                        startAngle: 0,
                        endAngle: 270,
                        hollow: {
                            margin: 5,
                            size: "30%",
                            background: "transparent",
                            image: undefined
                        },
                        dataLabels: {
                            name: {
                                show: false
                            },
                            value: {
                                show: false
                            }
                        }
                    }
                },
                colors: ["#1ab7ea", "#0084ff", "#39539E", "#0077B5"],
                labels: ["Vimeo", "Messenger", "Facebook", "LinkedIn"],
                legend: {
                    show: true,
                    floating: true,
                    fontSize: "16px",
                    position: "left",
                    offsetX: 160,
                    offsetY: 10,
                    labels: {
                        useSeriesColors: true
                    },
                    markers: {
                        size: 0
                    },
                    formatter: function (seriesName, opts) {
                        return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
                    },
                    itemMargin: {
                        horizontal: 3
                    }
                },
                responsive: [
                    {
                        breakpoint: 480,
                        options: {
                            legend: {
                                show: false
                            }
                        }
                    }
                ]
            },
            seriesGradient: [75],
            optionsGradient: {
                chart: {
                    height: 350,
                    type: "radialBar",
                    toolbar: {
                        show: true
                    }
                },
                plotOptions: {
                    radialBar: {
                        startAngle: -135,
                        endAngle: 225,
                        hollow: {
                            margin: 0,
                            size: "70%",
                            background: "#fff",
                            image: undefined,
                            imageOffsetX: 0,
                            imageOffsetY: 0,
                            position: "front",
                            dropShadow: {
                                enabled: true,
                                top: 3,
                                left: 0,
                                blur: 4,
                                opacity: 0.24
                            }
                        },
                        track: {
                            background: "#fff",
                            strokeWidth: "67%",
                            margin: 0, // margin is in pixels
                            dropShadow: {
                                enabled: true,
                                top: -3,
                                left: 0,
                                blur: 4,
                                opacity: 0.35
                            }
                        },

                        dataLabels: {
                            show: true,
                            name: {
                                offsetY: -10,
                                show: true,
                                color: "#888",
                                fontSize: "17px"
                            },
                            value: {
                                formatter: function (val) {
                                    return parseInt(val);
                                },
                                color: "#111",
                                fontSize: "36px",
                                show: true
                            }
                        }
                    }
                },
                fill: {
                    type: "gradient",
                    gradient: {
                        shade: "dark",
                        type: "horizontal",
                        shadeIntensity: 0.5,
                        gradientToColors: ["#ABE5A1"],
                        inverseColors: true,
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [0, 100]
                    }
                },
                stroke: {
                    lineCap: "round"
                },
                labels: ["Percent"]
            },

            seriesStrokedGauge: [67],
            optionsStrokedGauge: {
                chart: {
                    height: 350,
                    type: "radialBar",
                    offsetY: -10
                },
                plotOptions: {
                    radialBar: {
                        startAngle: -135,
                        endAngle: 135,
                        dataLabels: {
                            name: {
                                fontSize: "16px",
                                color: undefined,
                                offsetY: 120
                            },
                            value: {
                                offsetY: 76,
                                fontSize: "22px",
                                color: undefined,
                                formatter: function (val) {
                                    return val + "%";
                                }
                            }
                        }
                    }
                },
                fill: {
                    type: "gradient",
                    gradient: {
                        shade: "dark",
                        shadeIntensity: 0.15,
                        inverseColors: false,
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [0, 50, 65, 91]
                    }
                },
                stroke: {
                    dashArray: 4
                },
                labels: ["Median Ratio"]
            },
            seriesSemiCircleGauge: [76],
            optionsSemiCircleGauge: {
                chart: {
                    type: "radialBar",
                    offsetY: -20
                },
                plotOptions: {
                    radialBar: {
                        startAngle: -90,
                        endAngle: 90,
                        track: {
                            background: "#e7e7e7",
                            strokeWidth: "97%",
                            margin: 5, // margin is in pixels
                            dropShadow: {
                                enabled: true,
                                top: 2,
                                left: 0,
                                color: "#999",
                                opacity: 1,
                                blur: 2
                            }
                        },
                        dataLabels: {
                            name: {
                                show: false
                            },
                            value: {
                                offsetY: -2,
                                fontSize: "22px"
                            }
                        }
                    }
                },
                fill: {
                    type: "gradient",
                    gradient: {
                        shade: "light",
                        shadeIntensity: 0.4,
                        inverseColors: false,
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [0, 50, 53, 91]
                    }
                },
                labels: ["Average Results"]
            },
            seriesBasic: [
                {
                    name: "Series 1",
                    data: [80, 50, 30, 40, 100, 20]
                }
            ],
            optionsBasic: {
                chart: {
                    height: 350,
                    type: "radar"
                },
                title: {
                    text: "Basic Radar Chart"
                },
                xaxis: {
                    categories: ["January", "February", "March", "April", "May", "June"]
                }
            },
            seriesMulti: [
                {
                    name: "Series 1",
                    data: [80, 50, 30, 40, 100, 20]
                },
                {
                    name: "Series 2",
                    data: [20, 30, 40, 80, 20, 80]
                },
                {
                    name: "Series 3",
                    data: [44, 76, 78, 13, 43, 10]
                }
            ],
            optionsMulti: {
                chart: {
                    height: 350,
                    type: "radar",
                    dropShadow: {
                        enabled: true,
                        blur: 1,
                        left: 1,
                        top: 1
                    }
                },
                title: {
                    text: "Radar Chart - Multi Series"
                },
                stroke: {
                    width: 0
                },
                fill: {
                    opacity: 0.4
                },
                markers: {
                    size: 0
                },
                xaxis: {
                    categories: ["2011", "2012", "2013", "2014", "2015", "2016"]
                }
            },
            seriesPolygon: [
                {
                    name: "Series 1",
                    data: [20, 100, 40, 30, 50, 80, 33]
                }
            ],
            optionsPolygon: {
                chart: {
                    height: 350,
                    type: "radar"
                },
                dataLabels: {
                    enabled: true
                },
                plotOptions: {
                    radar: {
                        size: 140,
                        polygons: {
                            strokeColor: "#e9e9e9",
                            fill: {
                                colors: ["#f8f8f8", "#fff"]
                            }
                        }
                    }
                },
                title: {
                    text: "Radar with Polygon Fill"
                },
                colors: ["#FF4560"],
                markers: {
                    size: 4,
                    colors: ["#fff"],
                    strokeColor: "#FF4560",
                    strokeWidth: 2
                },
                tooltip: {
                    y: {
                        formatter: function (val) {
                            return val;
                        }
                    }
                },
                xaxis: {
                    categories: [
                        "Sunday",
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                        "Saturday"
                    ]
                },
                yaxis: {
                    tickAmount: 7,
                    labels: {
                        formatter: function (val, i) {
                            if (i % 2 === 0) {
                                return val;
                            } else {
                                return "";
                            }
                        }
                    }
                }
            }
        };
    }

    render() { 
        return ( <div className={useStyles.root}>
        <Grid container spacing={3}>
          <Grid item xs>
            <Paper className={useStyles.paper}>
              <Card className={useStyles.card}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe" className={useStyles.avatar}>
                      P
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="Pie Chart Demo"
                  subheader="September 22, 1997"
                />
                <CardMedia
                  className={useStyles.media}
                  image="/static/images/cards/paella.jpg"
                  title="Paella dish"
                />
                <CardContent>
                  <Chart
                    options={this.state.options}
                    series={this.state.series1}
                    type="pie"
                    width="500"
                  />
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like.
                  </Typography>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={useStyles.paper}>
              <Card className={useStyles.card}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe" className={useStyles.avatar}>
                      D
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="Donut Pie Chart"
                  subheader="September 14, 2016"
                />
                <CardMedia
                  className={useStyles.media}
                  image="/static/images/cards/paella.jpg"
                  title="Paella dish"
                />
                <CardContent>
                  <Chart
                    options={this.state.options}
                    series={this.state.series1}
                    type="donut"
                    width="500"
                  />

                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like.
                  </Typography>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={useStyles.paper}>
              <Card className={useStyles.card}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe" className={useStyles.avatar}>
                      R
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="Shrimp and Chorizo Paella"
                  subheader="September 14, 2016"
                />
                <CardMedia
                  className={useStyles.media}
                  image="/static/images/cards/paella.jpg"
                  title="Paella dish"
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like.
                  </Typography>
                  <DynamicTable data={this.state.data1}></DynamicTable>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={useStyles.paper}>
              <Card className={useStyles.card}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe" className={useStyles.avatar}>
                      R
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="Shrimp and Chorizo Paella"
                  subheader="September 14, 2016"
                />
                <CardMedia
                  className={useStyles.media}
                  image="/static/images/cards/paella.jpg"
                  title="Paella dish"
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like.
                  </Typography>
                  <DynamicTable data={this.state.data2}/>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs>
            <Paper className={useStyles.paper}>
              <Card className={useStyles.card}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe" className={useStyles.avatar}>
                      P
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="Pie Chart Demo"
                  subheader="September 22, 1997"
                />
                <CardMedia
                  className={useStyles.media}
                  image="/static/images/cards/paella.jpg"
                  title="Paella dish"
                />
                <CardContent>
                  <Chart
                    options={this.state.baroptions}
                    series={this.state.barseries}
                    type="bar"
                    width={500}
                    height={320}
                  />

                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like.
                  </Typography>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={useStyles.paper}>
              <Card className={useStyles.card}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe" className={useStyles.avatar}>
                      D
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="Column with Data Labels"
                  subheader="September 14, 2016"
                />
                <CardMedia
                  className={useStyles.media}
                  image="/static/images/cards/paella.jpg"
                  title="Paella dish"
                />
                <CardContent>
                  <Chart
                    options={this.state.options1}
                    series={this.state.series}
                    type="bar"
                    width={500}
                    height={320}
                  />

                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like.
                  </Typography>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={useStyles.paper}>
              <Card className={useStyles.card}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe" className={useStyles.avatar}>
                      P
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="Area Charts > Datetime X-Axis"
                  subheader="September 22, 1997"
                />
                <CardMedia
                  className={useStyles.media}
                  image="/static/images/cards/paella.jpg"
                  title="Paella dish"
                />
                <CardContent>
                  <Chart
                    options={this.state.optionsDatetime}
                    series={this.state.seriesDatetime}
                    width={500}
                    height={320}
                  />

                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like.
                  </Typography>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={useStyles.paper}>
              <Card className={useStyles.card}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe" className={useStyles.avatar}>
                      D
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title=" Area Charts > Spline"
                  subheader="September 14, 2016"
                />
                <CardMedia
                  className={useStyles.media}
                  image="/static/images/cards/paella.jpg"
                  title="Paella dish"
                />
                <CardContent>
                  <Chart
                    options={this.state.optionsSpline}
                    series={this.state.seriesSpline}
                    width={500}
                    height={320}
                  />

                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like.
                  </Typography>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs>
            <Paper className={useStyles.paper}>
              <Card className={useStyles.card}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe" className={useStyles.avatar}>
                      P
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title=" Area Charts > Stacked"
                  subheader="September 22, 1997"
                />
                <CardMedia
                  className={useStyles.media}
                  image="/static/images/cards/paella.jpg"
                  title="Paella dish"
                />
                <CardContent>
                  <Chart
                    options={this.state.baroptions}
                    series={this.state.barseries}
                    type="area"
                    width={500}
                    height={320}
                  />

                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like.
                  </Typography>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={useStyles.paper}>
              <Card className={useStyles.card}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe" className={useStyles.avatar}>
                      D
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="Column Charts > Stacked Columns"
                  subheader="September 14, 2016"
                />
                <CardMedia
                  className={useStyles.media}
                  image="/static/images/cards/paella.jpg"
                  title="Paella dish"
                />
                <CardContent>
                  <Chart
                    options={this.state.optionsStacked}
                    series={this.state.seriesStacked}
                    type="bar"
                    width={500}
                    height={320}
                  />

                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like.
                  </Typography>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={useStyles.paper}>
              <Card className={useStyles.card}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe" className={useStyles.avatar}>
                      P
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="Bubble Charts > Simple"
                  subheader="September 22, 1997"
                />
                <CardMedia
                  className={useStyles.media}
                  image="/static/images/cards/paella.jpg"
                  title="Paella dish"
                />
                <CardContent>
                  <Chart
                    options={this.state.optionsbubble}
                    series={this.state.seriesbubble}
                    type="bubble"
                    width={500}
                    height={320}
                  />

                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like.
                  </Typography>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={useStyles.paper}>
              <Card className={useStyles.card}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe" className={useStyles.avatar}>
                      P
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="Bubble Charts > 3D Bubble"
                  subheader="September 22, 1997"
                />
                <CardMedia
                  className={useStyles.media}
                  image="/static/images/cards/paella.jpg"
                  title="Paella dish"
                />
                <CardContent>
                  <Chart
                    options={this.state.optionsbubble3D}
                    series={this.state.seriesbubble3D}
                    type="bubble"
                    width={500}
                    height={320}
                  />

                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like.
                  </Typography>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
        </Grid>

        {/* Rounded Pie Chart */}
        <Grid container spacing={3}>
          <Grid item xs>
            <Paper className={useStyles.paper}>
              <Card className={useStyles.card}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe" className={useStyles.avatar}>
                      P
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title=" RadialBar Charts > Basic"
                  subheader="September 22, 1997"
                />
                <CardMedia
                  className={useStyles.media}
                  image="/static/images/cards/paella.jpg"
                  title="Paella dish"
                />
                <CardContent>
                  <Chart
                    options={this.state.optionsBasicBar}
                    series={this.state.seriesBasicBar}
                    type="radialBar"
                    width={500}
                    height={320}
                  />

                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like.
                  </Typography>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={useStyles.paper}>
              <Card className={useStyles.card}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe" className={useStyles.avatar}>
                      D
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="RadialBar Charts > Multiple Radialbars"
                  subheader="September 14, 2016"
                />
                <CardMedia
                  className={useStyles.media}
                  image="/static/images/cards/paella.jpg"
                  title="Paella dish"
                />
                <CardContent>
                  <Chart
                    options={this.state.optionsMultipleRadialbars}
                    series={this.state.seriesMultipleRadialbars}
                    type="radialBar"
                    width={500}
                    height={320}
                  />

                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like.
                  </Typography>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={useStyles.paper}>
              <Card className={useStyles.card}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe" className={useStyles.avatar}>
                      P
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="RadialBar Charts > Custom Angle Circle"
                  subheader="September 22, 1997"
                />
                <CardMedia
                  className={useStyles.media}
                  image="/static/images/cards/paella.jpg"
                  title="Paella dish"
                />
                <CardContent>
                  <Chart
                    options={this.state.optionsCustomAngleCircle}
                    series={this.state.seriesCustomAngleCircle}
                    type="radialBar"
                    width={500}
                    height={320}
                  />

                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like.
                  </Typography>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={useStyles.paper}>
              <Card className={useStyles.card}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe" className={useStyles.avatar}>
                      P
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="> RadialBar Charts > Gradient"
                  subheader="September 22, 1997"
                />
                <CardMedia
                  className={useStyles.media}
                  image="/static/images/cards/paella.jpg"
                  title="Paella dish"
                />
                <CardContent>
                  <Chart
                    options={this.state.optionsGradient}
                    series={this.state.seriesGradient}
                    type="radialBar"
                    width={500}
                    height={320}
                  />

                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like.
                  </Typography>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs>
            <Paper className={useStyles.paper}>
              <Card className={useStyles.card}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe" className={useStyles.avatar}>
                      P
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="RadialBar Charts > Stroked Gauge"
                  subheader="September 22, 1997"
                />
                <CardMedia
                  className={useStyles.media}
                  image="/static/images/cards/paella.jpg"
                  title="Paella dish"
                />
                <CardContent>
                  <Chart
                    options={this.state.optionsStrokedGauge}
                    series={this.state.seriesStrokedGauge}
                    type="radialBar"
                    width={500}
                    height={320}
                  />

                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like.
                  </Typography>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={useStyles.paper}>
              <Card className={useStyles.card}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe" className={useStyles.avatar}>
                      D
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="RadialBar Charts > Semi Circle Gauge"
                  subheader="September 14, 2016"
                />
                <CardMedia
                  className={useStyles.media}
                  image="/static/images/cards/paella.jpg"
                  title="Paella dish"
                />
                <CardContent>
                  <Chart
                    options={this.state.optionsSemiCircleGauge}
                    series={this.state.seriesSemiCircleGauge}
                    type="radialBar"
                    width={500}
                    height={320}
                  />

                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like.
                  </Typography>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={useStyles.paper}>
              <Card className={useStyles.card}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe" className={useStyles.avatar}>
                      P
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title=" Radar Charts > Basic"
                  subheader="September 22, 1997"
                />
                <CardMedia
                  className={useStyles.media}
                  image="/static/images/cards/paella.jpg"
                  title="Paella dish"
                />
                <CardContent>
                  <Chart
                    options={this.state.optionsBasic}
                    series={this.state.seriesBasic}
                    type="radar"
                    width={500}
                    height={320}
                  />

                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like.
                  </Typography>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={useStyles.paper}>
              <Card className={useStyles.card}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe" className={useStyles.avatar}>
                      P
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title=" Radar Charts > Radar – Multiple Series"
                  subheader="September 22, 1997"
                />
                <CardMedia
                  className={useStyles.media}
                  image="/static/images/cards/paella.jpg"
                  title="Paella dish"
                />
                <CardContent>
                  <Chart
                    options={this.state.optionsMulti}
                    series={this.state.seriesMulti}
                    type="radar"
                    width={500}
                    height={320}
                  />

                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like.
                  </Typography>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={useStyles.paper}>
              <Card className={useStyles.card}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe" className={useStyles.avatar}>
                      P
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="Radar with Polygon-fill"
                  subheader="September 22, 1997"
                />
                <CardMedia
                  className={useStyles.media}
                  image="/static/images/cards/paella.jpg"
                  title="Paella dish"
                />
                <CardContent>
                  <Chart
                    options={this.state.optionsPolygon}
                    series={this.state.seriesPolygon}
                    type="radar"
                    width={500}
                    height={320}
                  />

                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like.
                  </Typography>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
        </Grid>
      </div>  );
    }
}
 
