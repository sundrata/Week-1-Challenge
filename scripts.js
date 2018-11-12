$(document).ready(readyNow);

const employees = [];
let total = 0;

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
    monthTotal();
    function monthTotal() {
        total += parseFloat(newEmployee.annualSalary / 12); 
            $('h2').empty();
            $('h2').append('Total Monthly Cost:', total.toFixed(2));
        }
    if(total >= 20000){
        $("h2").css("background-color", "red");

    }
}
function updateEmployees(array) {
    let $el = $('#employeeData');
    $el.empty();
    // loop through employees & append to table
    for (let employee of array) {
        let displayString =
            `<tr class = "tableData">
            <td>${employee.firstName}</td> 
            <td>${employee.lastName}</td> 
            <td>${employee.employeeID}</td>
            <td>${employee.title}</td>
            <td>${employee.annualSalary}</td>
            <td><button class="deleteBtn">Delete</button></td>
        </tr>`;
        $el.append(displayString);
        function monthTotal() {
            total += (displayString.annualSalary / 12);
                $('h2').append(total);
        }
        $('.deleteBtn').on('click', function () {
            console.log('inside');
            employees.splice(array.indexOf(employee),1);
            $(this).parent().parent().remove();
        });
    }
     // end loop
}// end updateIEmployees
function monthTotal() {
    total += (newEmployee.annualSalary / 12);
        $('h2').append('total');
    }

















// .val + .val  +.val of annualSalary