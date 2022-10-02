var xValuesBar = ["18-24 years", "25-39 years", "40-59 years", "60+ years"];
var yValuesBar = [47, 64, 62, 72];
var barColorsBar = ["#502d15c7", "#d39c77c7", "#5f4d41c7","#5c270ac7"];

new Chart("myBarChart", {
  type: "bar",
  data: {
    labels: xValuesBar,
    datasets: [{
      backgroundColor: barColorsBar,
      data: yValuesBar
    }]
  },
  options: {
    legend: {display: false},
    title: {
        display: true,
        text: "Coffee Consumption By Age Group In The United States",
      },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }],
    }
  }
});



/* pie chart */
var xValuesPie = ["9-10 cups", "11 or more cups", "No answer", "1 cup or less", "2 to 3 cups", "4 to 5 cups"];
var yValuesPie = [1, 2, 5, 26, 44, 16];
var barColorsPie = ["#502d15c7", "#d39c77c7", "#5f4d41c7","#5c270ac7", "#c65606c7","#ecc435c7"];

new Chart("myPieChart", {
    type: "doughnut",
    data: {
      labels: xValuesPie,
      datasets: [{
        backgroundColor: barColorsPie,
        data: yValuesPie
      }]
    },
    options: {
      title: {
        display: true,
        text: "How Many Cups Do Americans Drink Each Day?"
      }
    }
  });


/* horizontal bars */
var xValuesHorBar = ["Netherlands", "Finland", "Sweden", "Norway", "Canada", "Germany", "Brazil", "Switzerland", "Italy", "Estonia"];
var yValuesHorBar = [8.3, 7.8, 7.6, 6.6, 5.5, 5.3, 5.2, 5.1, 5.0, 4.8];
var barColorsHorBar = "#5c270ac7";

new Chart("myHorBarChart", {
  type: "horizontalBar",
  data: {
    labels: xValuesHorBar,
    datasets: [{
      backgroundColor: barColorsHorBar,
      data: yValuesHorBar
    }]
  },
  options: {
    legend: {display: false},
    title: {
        display: true,
        text: "The Countries Most Addicted To Coffee (AVG per capita in kg)",
      },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }],
    }
  }
});

/* line chart */
var xValuesLine = [1975,1980,1985,1990,1995,2000,2005,2010,2015,2020];

new Chart("myLineChart", {
  type: "line",
  data: {
    labels: xValuesLine,
    datasets: [{
      data: [280,302,317,319,329,363,407,422,436,493],
      borderColor: "#d39c77c7",
      fill: false
    },{
      data: [369,353,293,310,334,363,387,342,406,443],
      borderColor: "#8abd6ec7",
      fill: false
    }]
  },
  options: {
    legend: {display: false},
    title: {
        display: true,
        text: "Change of coffee and tea consumption",
      },
  }
});