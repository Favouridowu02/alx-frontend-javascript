var student1 = {
    firstName: "Favour",
    lastName: "Idowu",
    age: 100,
    location: "Canada"
};
var student2 = {
    firstName: "Samuel",
    lastName: "Favour",
    age: 12,
    location: "Italy"
};
var studentLists = [student1, student2];
var table = document.createElement("table");
var headerRow = document.createElement("tr");
var header1 = document.createElement("th");
header1.textContent = "First Name";
var header2 = document.createElement("th");
header2.textContent = "Last Name";
var header3 = document.createElement("th");
header3.textContent = "Age";
var header4 = document.createElement("th");
header4.textContent = "Location";
headerRow.appendChild(header1);
headerRow.appendChild(header2);
headerRow.appendChild(header3);
headerRow.appendChild(header4);
table.appendChild(headerRow);
for (var _i = 0, studentLists_1 = studentLists; _i < studentLists_1.length; _i++) {
    var student = studentLists_1[_i];
    var row = document.createElement("tr");
    var cell1 = document.createElement("td");
    cell1.textContent = student.firstName;
    var cell2 = document.createElement("td");
    cell2.textContent = student.lastName;
    var cell3 = document.createElement("td");
    cell3.textContent = student.age.toString();
    var cell4 = document.createElement("td");
    cell4.textContent = student.location;
    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell4);
    table.appendChild(row);
}
