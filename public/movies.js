
/* URL where the react project is being served... */
base_url = "http://movieroles.ml:3000/";

/* Database URL */
//database_url = "http://movieroles.ddns.net:3001/";
database_url = "http://movieroles.ml:3001/";

function selectGenre() {
    var e = document.getElementById("mydropdown");
    var genre = e.options[e.selectedIndex].value;
    var budget = document.querySelector('input[name="pay"]:checked').value;
    var duration = document.querySelector('input[name="duration"]:checked').value
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var rating = document.querySelector('input[name="rating"]:checked').value;
    var period = document.querySelector('input[name="timeperiod"]:checked').value;
    var success = document.querySelector('input[name="success"]:checked').value;
        
    
    fetch(database_url + 'query/' + genre + '/' + budget + '/' + duration + '/' + gender + '/' + rating + '/' + period + '/' + success)
        .then(data => data.json())
        .then(data => displayData(data));
}


function displayData(data) {

    var table = document.getElementById("theTable");
    table.innerHTML = "";


    
    var service_url = 'https://kgsearch.googleapis.com/v1/entities:search';
    var params = {
        'query': 'Taylor Swift',
        'limit': 1,
        'indent': true,
        'key' : 'AIzaSyD758LVl3JAs0UwMqxbSg4DOJOVPvbpwq0',
    };

    var imgurl = "";


    
    for (var i = 0; i < data.length; i++) {
        var row = table.insertRow(i);
        
        row.insertCell(0);
        row.insertCell(1);
        row.insertCell(2);
        row.cells[0].innerHTML = '<a href="' + base_url + 'actor/' + data[i].aID + '">' + data[i].name + '</a>'
        row.cells[1].innerHTML = data[i].role;
        row.cells[2].innerHTML =  '<a href="' + base_url + 'movie/' + data[i].mID + '">' + data[i].mname + '</a>'
        
        if (i == 0) {
            params.query = data[i].name;

            $.getJSON(service_url + '?callback=?', params, function(response) {
                var table = document.getElementById("theTable");

                imgurl = response.itemListElement[0].result.image.contentUrl;
                console.log(imgurl);
                table.rows[0].insertCell(3);
                table.rows[0].cells[3].innerHTML =  '<img src="' + imgurl + '">';

                

            });
        }
            
        if (i == 1) {
            params.query = data[i].name;

            $.getJSON(service_url + '?callback=?', params, function(response) {
                var table = document.getElementById("theTable");

                imgurl = response.itemListElement[0].result.image.contentUrl;
                console.log(imgurl);
                table.rows[1].insertCell(3);
                table.rows[1].cells[3].innerHTML =  '<img src="' + imgurl + '">';

                

            });
        }

        if (i == 2) {
            params.query = data[i].name;

            $.getJSON(service_url + '?callback=?', params, function(response) {
                var table = document.getElementById("theTable");

                imgurl = response.itemListElement[0].result.image.contentUrl;
                console.log(imgurl);
                table.rows[2].insertCell(3);
                table.rows[2].cells[3].innerHTML =  '<img src="' + imgurl + '">';

                

            });
         
        }
  
    }
    document.getElementById("numResults").innerHTML = data.length + " results for last query.";
}
