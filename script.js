function insert_Row() {
    // Get the table element
    var table = document.getElementById('sampleTable');

    // Insert a new row at the top (index 0)
    var row = table.insertRow(0);

    // Insert a new cell in the first column and set its content
    var cell1 = row.insertCell(0);
    cell1.innerHTML = "New Cell1";

    // Insert a new cell in the second column and set its content
    var cell2 = row.insertCell(1);
    cell2.innerHTML = "New Cell2";
}
