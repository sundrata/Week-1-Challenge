$(document).ready(readyNow);

let employees = [];

class Employee {
    constructor(firstName, lastName, employeeID, title, annualSalary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.employeeID = employeeID;
        this.title = title;
        this.annualSalary = annualSalary;
    } // end constructor
}// end employee class

function readyNow() {
    $('#submitButton').on('click', newEmployee);
    $('#deleteBtn').on('click', deleteF);
    };
function newEmployee() {
    const newEmployee = new Employee(
        $('#firstName').val(),
        $('#lastName').val(),
        $('#employeeID').val(),
        $('#title').val(),
        $('#annualSalary').val()
    ); //instantiate new employee
    employees.push(newEmployee); // push to array
    $('#firstName').val('');
    $('#lastName').val('');
    $('#employeeID').val('');
    $('#title').val('');
    $('#annualSalary').val('');
    updateEmployees(employees);// reset input values
}
function updateEmployees(array) {
    let $el = $('#employeeData');
    $el.empty();
    // loop through employees & append to table
    for (let employee of array) {
        let displayString =
            `<tr>
            <td>${employee.firstName}</td> 
            <td>${employee.lastName}</td> 
            <td>${employee.employeeID}</td>
            <td>${employee.title}</td>
            <td>${employee.annualSalary}</td>
            <td><button id="deleteBtn">Delete</button></td>
        </tr>`;
        $el.append(displayString);
    } // end loop
} // end updateIEmployees
 
function deleteF(){
    $(this).parent().parent().remove();
}













// .val + .val  +.val of annualSalary