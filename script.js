let error = document.querySelector('.err');
let submit = document.querySelector('#submit');
let emailInp = document.querySelector('.input');

submit.addEventListener('click', handleSubmit);

function handleSubmit(e) {
    e.preventDefault();

    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(emailInp.value.match(validRegex)){
        alert("Valid email address!");
        return true;
    }else {
        error.innerText = "Please enter a valid email";
    }

};
