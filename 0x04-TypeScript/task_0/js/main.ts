interface Student {
    firstName: string;
    lastName: string;
    age: Number;
    location: string;
}


const student1:Student = {
    firstName: "Favour",
    lastName: "Idowu",
    age: 100,
    location: "Canada",
}

const student2:Student = {
    firstName: "Samuel",
    lastName: "Favour",
    age: 12,
    location: "Italy",
}

const studentLists:Student[] = [student1, student2];

const table = document.createElement("table");
const headerRow = document.createElement("tr");
const header1 = document.createElement("th");
header1.textContent = "First Name";
const header2 = document.createElement("th");
header2.textContent = "Last Name";
const header3 = document.createElement("th");
header3.textContent = "Age";
const header4 = document.createElement("th");
header4.textContent = "Location";
headerRow.appendChild(header1);
headerRow.appendChild(header2);
headerRow.appendChild(header3);
headerRow.appendChild(header4);
table.appendChild(headerRow);

for (const student of studentLists) {
    const row = document.createElement("tr");
    const cell1 = document.createElement("td");
    cell1.textContent = student.firstName;
    const cell2 = document.createElement("td");
    cell2.textContent = student.lastName;
    const cell3 = document.createElement("td");
    cell3.textContent = student.age.toString();
    const cell4 = document.createElement("td");
    cell4.textContent = student.location;
    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell4);
    table.appendChild(row);
}