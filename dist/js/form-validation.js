// form validation

const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('password-confirm');

// show error

function showError(input, message){

    const formValidation = input.parentElement;
    formValidation.classList = 'form-validation error';

    const errorMessage = formValidation.querySelector('p');
    errorMessage.innerText = message;
}
// valid error
function validError(input){

    const formValidation = input.parentElement;
    formValidation.classList = 'form-validation valid';
}

// event listener
form.addEventListener('submit', (e) =>{

    e.preventDefault();

    checkRequired([name, email, password, passwordConfirm]);
    checkLenghth(name, 3, 30);
    checkLenghth(password, 8, 25);
    checkLenghth(passwordConfirm, 8, 25);
    passwordMatch(password, passwordConfirm);
})

// check required field

function checkRequired(inputArr){

    inputArr.forEach(function(input){

        if (input.value.trim() === '') {
            
            showError(input, `${getFieldName(input)} is required`);
        }else{

            validError(input);
        }
    })
}

// get field name

function getFieldName(input){

    return input.name.charAt(0).toUpperCase() + input.name.slice(1);
}


// check length field

function checkLenghth(input, min, max){

    if (input.value.length < min) {
        
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    
    }else if (input.value.length > max) {
        
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    }
}

// password match

function passwordMatch(input1, input2){

    if (input1.value !== input2.value) {
        
        showError(input2, 'Password is not match');
    }
}