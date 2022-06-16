function show_error(key, message) {
    var error = document.getElementById(`${key}_error`);
    var set_style_error=document.querySelector(`#${key}`);
    error.innerHTML = message;
    error.style = 'color: red';
}

function delete_error(key) {
    document.getElementById(`${key}_error`).innerHTML = '';
}
var flag = true;
function check_form(e) {
    e.preventDefault();
    var email = document.getElementById('email');
    var password = document.getElementById('pass');
    var req_email = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    var req_password =/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    
    if (email.value == '') {
        show_error('email', 'Email is required');
        flag = false;
    } else if (!req_email.test(email.value)) {
        show_error('email', 'Email is not valid');
        flag = false;
    } else {
        delete_error('email');
    }

    if (password.value == '') {
        show_error('pass', 'Password is required');
        flag = false;
    } else {
        if (!req_password.test(password.value)) {
            show_error('pass', 'Password is not valid');
            flag = false;
        } else {
            delete_error('pass');
        }
            }
    if(flag) {
        window.location.assign('index.html');
    }
}