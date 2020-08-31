$(document).ready(onReady)
function onReady() {
    console.log('JQ JS');

    $('#addInfoButton').on('click', addEmpItem);
    $('#addInfoButton').on('click', calculateMonthly);



    document.getElementById("addInfoButton").disabled = true;
    $(document).on('click', '.deleteButton', onRemove);



}


let empInfo = [];
let totalSalaries = 0;




function addEmpItem() {
    console.log('ya clicked me');

    let firstNameVal = document.getElementById('firstName').value;
    let lastNameVal = document.getElementById('lastName').value;
    let idNumberVal = document.getElementById('idNumber').value;
    let jobTitleVal = document.getElementById('jobTitle').value;
    let annualSalaryVal = document.getElementById('annualSalary').value;
    addEmpToList(firstName, lastName, idNumber, jobTitle, annualSalary)
}

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
}




function calculateMonthly() {
    let annualSalaryVal = document.getElementById('annualSalary').value;

}







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

}

/*
<tr>
        <th>First name</th>
        <th>Last name</th>
        <th>ID</th>
        <th>Job Title</th>
        <th>Annual Salary</th>
        </tr>
*/

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

    $(this).parent().parent().remove()
    //THIS REMOVES THE CORRESPONDING ITEMS FROM THE DOM


    let test = $(this).closest('tr').find("#idNumber").text();
    console.log(test);
    let index = empInfo.findIndex(function (item) { return item.idNumber === test });
    console.log(index);
    empInfo.splice(index, 1);
    console.log(empInfo);
    calculateMonthly();

}




/*
for (let i = 0; i < empInfo.length; i++) {
    if (empInfo[i] === $(this).parent().id) {
        empInfo.splice(i, 1);
    }
}*/
    //let removeText = $(this).text();
    //console.log('this is removeText', removeText);



    //empInfo[$(this).remove]
    //console.log(empInfo);



/*
$(function(){
        var arr= [
          {"name": "John"},
          {"name": "Henry"}
       ];
       $('.dm').click(function(){
            var val = $(this).closest('tr').find(".name").text();
            console.log(val);
            var index = arr.findIndex(function(item) {return item.name == val})
            console.log(index)
            arr.splice(index, 1)
            console.log(arr);
        })
  })
*/