"use strict"

var btnAdd = document.querySelectorAll('button')[0];
var btnremove = document.querySelectorAll('button')[2];
var table = document.querySelector('table');
var nameInput = document.querySelector('#name');
var surnameInput = document.querySelector('#surname');
var ageInput = document.querySelector('#age');



btnAdd.addEventListener('click', () => {
    var name = nameInput.value;
    var surname = surnameInput.value;
    var age = ageInput.value;
    var template = `
                <tr>
                    <td>${name}</td>
                    <td>${surname}</td>
                    <td>${age}</td>
                </tr>`;
    table.innerHTML += template;

        
 if(name == "" ) {
    alert("Prašome įvesti vardą")
 } if  (surname == ""){
     alert("Prašome įvesti pavardę")
 } if  (age == "") {
     alert("Prašome įvesti amžių")
 } 

});



btnremove.addEventListener('click', () => {
    var name = nameInput.value;
    var surname = surnameInput.value;
    var age = ageInput.value;
    var template = `
                <tr>
                    <td>${name}</td>
                    <td>${surname}</td>
                    <td>${age}</td>
                </tr>`;
   
                table.innerText -= template;
    

});
