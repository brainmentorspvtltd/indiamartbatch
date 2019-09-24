// Controller Code
window.addEventListener('load',bindEvents);
function bindEvents(){
   
var button = document.querySelector('#greetbt');
button.addEventListener('click',takeValues);
document.querySelector('#clear').addEventListener('click',clearAll);

// button.addEventListener('click',()=>{
//     initCap(document.querySelector('#fname').value);
// });
}

function clearAll(){
    for(let txt of document.querySelectorAll("input[type='text']")){
        txt.value = '';
        }
        document.querySelector('#fname').focus();
}

function takeValues(){
var firstName = document.querySelector('#fname').value;
var lastName = document.querySelector('#lname').value;
firstName = initCap(firstName);
lastName = initCap(lastName);
document.querySelector('#result').innerText = firstName + " "+lastName;
}