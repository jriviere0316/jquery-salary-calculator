$(document).ready(onReady)
function onReady() {
    console.log('JQ JS');

    $('#addInfoButton').on('click', addEmpItem);





}


let empInfo = [];

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
    empInfo.push(newEmpObject)
    console.log(empInfo);
    displayEmployee();
}



function displayEmployee() {
    let el = $('#employeeTable');
    el.empty();
    for (let i = 0; i < empInfo.length; i++) {
        el.append(
            `<tr>
        <th>${ empInfo[i].first} </th>+
        <th>${empInfo[i].last}</th> +
        <th>${empInfo[i].id}</th> +
        <th>${empInfo[i].title}</th> +
        <th>${empInfo[i].salary}</th> +
        </tr>`);
    }

}
/*function displayInventory(){
    console.log( 'in displayInventory' );
    // target an ul element on DOM
    let el = $( '#inventoryOut' );
    // empty el
    el.empty();
    // loop through inventory
    for( let i=0; i<inventory.length; i++ ){
        // append each item to the ul
        el.append( `<li>${ inventory[i].size } & ${ inventory[i].color }:
            ${ inventory[i].description }</li>` );
    } // end for
} // end displayInventory*/



