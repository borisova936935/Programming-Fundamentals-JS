function employees(input) {  //first way
    let listOfEmployees = {};

    for (let employee of input) {
        listOfEmployees.name = employee;
        listOfEmployees.personalNumber = employee.length;
        console.log(`Name: ${listOfEmployees.name} -- Personal Number: ${listOfEmployees.personalNumber}`);
    }
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);
console.log("...");
employees([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
]);

//............................................................................

function employees(input) {   //second way
    let listOfEmployees = [];
    class Employees {
        constructor(name, length) {
            this.name = name;
            this.length = length;
        }
    }
    for (let employee of input) {
        let currentEmployee = new Employees(employee, employee.length);
        listOfEmployees.push(currentEmployee);
    }
    listOfEmployees.forEach(curEmployee => console.log(`Name: ${curEmployee.name} -- Personal Number: ${curEmployee.length}`))
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);
console.log("...");
employees([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
]);