$(document).ready(onReady)
function onReady() {
    //console.log('JQ JS');

    $('#addInfoButton').on('click', addEmpItem);
    $('#addInfoButton').on('click', calculateMonthly);



    document.getElementById("addInfoButton").disabled = true;
    $(document).on('click', '.deleteButton', onRemove);
}//END ONREADY

//GLOBALS
let empInfo = [];
let totalSalaries = 0;
let salaryCombo = 0;

function addEmpItem() {
    //console.log('ya clicked me');
    //
    addEmpToList(firstName, lastName, idNumber, jobTitle, annualSalary)
}//END addEmpItem



function addEmpToList(firstNameInput, lastNameInput, idNumberInput, jobTitleInput, annualSalaryInput) {
    const newEmpObject = {
        first: firstNameInput.value,
        last: lastNameInput.value,
        id: idNumberInput.value,
        title: jobTitleInput.value,
        salary: annualSalaryInput.value

    }
    empInfo.push(newEmpObject);
    console.log(empInfo);
    $('#firstName').val('');
    $('#lastName').val('');
    $('#idNumber').val('');
    $('#jobTitle').val('');
    $('#annualSalary').val('');
    displayEmployee();
    inputManagement();
}//END addEmpToList




function calculateMonthly() {
    let monthlySalarys = 0;
    for (const emp of empInfo) {
        monthlySalarys += Number(emp.salary);
    }//end for
    if (monthlySalarys / 12 >= 20000) {
        $('#totalSalaryOut').css(`background-color`, `red`);
    }//end if
    else if (monthlySalarys / 12 < 20000) {
        $('#totalSalaryOut').css(`background-color`, `aqua`);
    }//end else if

    let totalSalaries = monthlySalarys / 12;
    console.log(Number(totalSalaries));
    let el = $("#totalSalaryOut");
    el.empty();
    el.append('Total Monthly: ', totalSalaries);

    totalSalaries = salaryCombo
}// END calculateMonthly




function displayEmployee() {

    let el = $('#employeeTable');
    el.empty();
    for (let i = 0; i < empInfo.length; i++) {
        el.append(`

        <tr>
           <td>${empInfo[i].first} </td>+
           <td>${empInfo[i].last}</td> +
           <td>${empInfo[i].id}</td> +
            <td>${empInfo[i].title}</td> +
           <td>$ ${empInfo[i].salary}</td> +
           <td><button class="deleteButton">Delete</button></td>
        </tr>`);
    }
}//END displayEmployee




function inputManagement() {
    let bt = document.getElementById('addInfoButton');
    let ele = document.getElementsByTagName('input');
    for (i = 0; i < ele.length; i++) {
        if (ele[i].type === 'text' && ele[i].value === '') {
            bt.disabled = true;    // Disable the button.
            return false;
        }
        else {
            bt.disabled = false;   // Enable the button.
        }
    }
}//END inputManagement



function onRemove() {
    console.log('clicked the remove button', $(this));

    $(this).parent().parent().remove()//THIS REMOVES THE CORRESPONDING ITEMS FROM THE DOM
    let test = $(this).closest('tr').find("#idNumber").text();
    console.log(test);
    let index = empInfo.findIndex(function (item) { return item.idNumber === test });//This doesn't work, because index returns as -1
    console.log(index);
    empInfo.splice(index, 1);
    console.log(empInfo);
    calculateMonthly();

}//ENDonRemove