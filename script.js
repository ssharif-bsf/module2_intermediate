// function loadCSVFile() {
//     const input = document.getElementById('fileInput');
//     const file = input.files[0];

//     const reader = new FileReader();
//     reader.onload = function(e) {
//         const text = e.target.result;
//         // console.log(text); 
//         csvToTable(text)
//     };
//     reader.readAsText(file);

// }

// function csvToTable(csvData) {
//     var data = d3.csvParse(csvData);
//     var table = '<table><thead><tr>';

//     Object.keys(data[0]).forEach(function(key) {
//         table += '<th>' + key + '</th>';
//     });
//     table += '</tr></thead><tbody>';


//     data.forEach(function(row) {
//         table += '<tr>';
//         Object.values(row).forEach(function(value) {
//             table += '<td>' + value + '</td>';
//         });
//         table += '</tr>';
//     });

//     table += '</tbody></table>';
//     document.getElementById('csv-table').innerHTML = table;
// }


// d3.csv("https://raw.githubusercontent.com/charleyferrari/CUNY_DATA_608/master/module5/data/presidents.csv").then(function(data) {
//     csvToTable(data)
// }).catch(function(error){
//     console.error("Error loading the CSV file:", error);
// });


function csvToTable(csvData) {
    var data = d3.csvParse(csvData);
    var table = '<table><thead><tr>';

    // Add headers
    Object.keys(data[0]).forEach(function(key) {
        table += '<th>' + key + '</th>';
    });
    table += '</tr></thead><tbody>';

    // Add rows
    data.forEach(function(row) {
        table += '<tr>';
        Object.values(row).forEach(function(value) {
            table += '<td>' + value + '</td>';
        });
        table += '</tr>';
    });

    table += '</tbody></table>';
    document.getElementById('csv-table').innerHTML = table;
}

function loadData(){
    d3.text('https://raw.githubusercontent.com/charleyferrari/CUNY_DATA_608/master/module5/data/presidents.csv').then(function(data) {
        csvToTable(data);
    });
}
// Read CSV file and convert to table
