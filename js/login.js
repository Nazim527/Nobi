let passwrd = document.querySelector('#passw');
let toggleBtn = document.querySelector('#toggleBtn_psw');


toggleBtn.onclick = function() {
    if(passwrd.type === "password") {
        passwrd.setAttribute('type', 'text');
        toggleBtn.classList.add('hide');
    } else {
        passwrd.setAttribute('type', 'password');
        toggleBtn.classList.remove('hide');
    }
}