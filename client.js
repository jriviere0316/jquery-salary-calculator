$(document).ready(onReady)
function onReady() {
    console.log('JQ JS');

    $('#addInfoButton').on('click', addItem);





}


let empInfo = [];

function addEmpItem() {
    console.log('ya clicked me');

}


function addCar() {
    //console.log( 'in addCar');
    let year = document.getElementById('year').value;
    let make = document.getElementById('make').value;
    let model = document.getElementById('model').value;
    let price = document.getElementById('price').value;
    let image = document.getElementById('image').value;


    newCar(year, make, model, price, image);
    $('#year').val('');
    $('#make').val('');
    $('#model').val('');
    $('#price').val('');
    $('#image').val('');

    displayCars();
    calculateTotalCarCost();
    manage();
    playAudio();
}//END addCar