console.log("im running")

var myarray = [];
fetch()
function fetch(){
  console.log('fetching...')
  $.getJSON('https://sdrom-api.herokuapp.com/covid', function(data) {
    myarray = JSON.parse(data)
    google.charts.load('current', {packages: ['corechart', 'line']});
    google.charts.setOnLoadCallback(drawBasic); 
  });
}

function drawBasic() {
      console.log(myarray)
      for (i = 0; i < myarray.length; i++) {
        myarray[i][0] = new Date(myarray[i][0])
      }
      var data = new google.visualization.DataTable();
      data.addColumn('date','Date');
      data.addColumn('number','Cases');      

      data.addRows(myarray);

      var options = {
        hAxis: {
          title: 'Time'
        },
        vAxis: {
          title: 'Cases'
        }
      };

      var chart = new google.visualization.LineChart(document.getElementById('chart_div'));

      chart.draw(data, options);
    }