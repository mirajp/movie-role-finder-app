
/* URL where the react project is being served... */
base_url = "http://localhost:3000/";

/* Database URL */
database_url = "http://localhost:3001/";

function selectGenre() {
    var e = document.getElementById("mydropdown");
    var genre = e.options[e.selectedIndex].value;
    var budget = document.querySelector('input[name="pay"]:checked').value;
    var duration = document.querySelector('input[name="duration"]:checked').value
    var gender = document.querySelector('input[name="gender"]:checked').value;
    console.log(duration);
    
    fetch(database_url + 'query/' + genre + '/' + budget + '/' + duration + '/' + gender)
        .then(data => data.json())
        .then(data => displayData(data));
}


function displayData(data) {

    var table = document.getElementById("theTable");
    table.innerHTML = "";
    for (var i = 0; i < data.length; i++) {
        var row = table.insertRow(i);
        row.insertCell(0);
        row.insertCell(1);
        row.insertCell(2);
        row.cells[0].innerHTML = '<a href="' + base_url + 'actor/' + data[i].aID + '">' + data[i].name + '</a>'
        row.cells[1].innerHTML = data[i].role;
        row.cells[2].innerHTML =  '<a href="' + base_url + 'movie/' + data[i].mID + '">' + data[i].mname + '</a>'
        
    }
}
