interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: jsjnk,
    lastName: nlhlsk,
    age: 21,
    location: Jkahsh,
}

const student2: Student = {
    firstName: slkldh,
    lastName: upsijd,
    age: 22,
    location: oopoi,
}

let studentsList: Student[] = [];

studentsList.push(student1);
studentsList.push(student2);

let studentsTable = document.createElement('table');

for (let i = 0; i < studentsList.length; i++) {
    let student = studentsTable.insertRow();
    let studentName = student.insertCell();
    let studentLocation = student.insertCell();
    studentName.innerHTML = studentsList[i].firstName;
    studentLocation.innerHTML = studentsList[i].location;
}

document.body.appendChild(studentsTable);