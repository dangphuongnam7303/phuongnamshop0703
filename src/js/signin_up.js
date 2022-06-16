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
var account = [];
function check_form(e) {
    e.preventDefault();
    let name_up = document.getElementById('name_up');
    var email_up = document.getElementById('email_up');
    var password_up = document.getElementById('pass_up');
    var req_password_up = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    var re_password = document.getElementById('re-pass');
    var req_email_up = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (name_up.value == '') {
        show_error('name_up', 'Name is required');
        flag = false;
    } else {
        delete_error('name_up');
    }

    if (email_up.value == '') {
        show_error('email_up', 'Email is required');
        flag = false;
    } else if (!req_email_up.test(email_up.value)) {
        show_error('email_up', 'Email is not valid');
        flag = false;

    } else {
        delete_error('email_up');
    }


    if (password_up.value == '') {
        show_error('pass_up', 'Password is required');
        flag = false;
    } else {
        if (!req_password_up.test(password_up.value)) {
            show_error('pass_up', 'Password is not valid');
            flag = false;
        } else {
            delete_error('pass_up');
        }
    }

    if (re_password.value == '') {
        show_error('repass', 'Re-Password is required');
        flag = false;
    } else {
        if (re_password.value != password_up.value) {
            show_error('repass', 'Re-Password is not match');
            flag = false;
        } else {
            delete_error('repass');
        }

    }
    if (flag) {
        localStorage.setItem('email', JSON.stringify({email: email_up.value}));
        localStorage.setItem('password', JSON.stringify({password: password_up.value}));
        window.location.assign('signin.html');



    }

}
var count = 0;
function signIn(e) {
e.preventDefault();
var email_in = document.getElementById('email_in');
var password_in = document.getElementById('pass_in');
var req_email_in = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
var req_password_in = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
if (email_in.value == '') {
    show_error('email_in', 'Email is required');
    flag = false;
}else{
    if(!req_email_in.test(email_in.value)){
        show_error('email_in', 'Email is not valid');
        flag = false;
    }else{
        if(email_in.value ==   localStorage.getItem('email')        ){
            delete_error('email_in');
            count ++;
        }else{
            show_error('email_in', 'Email is incorrect');
            flag = false;
        }
    }
}

if (password_in.value == '') {
    show_error('pass_in', 'Password is required');
    flag = false;
}
else{
    if(!req_password_in.test(password_in.value)){
        show_error('pass_in', 'Password is not valid');
        flag = false;
    }else{
        if(password_in.value == localStorage.getItem('password')){
            delete_error('pass_in');
            count ++;
        }else{
            show_error('pass_in', 'Password is incorrect');
            flag = false;
        }
}
if(count == 2){
    window.location.assign('index.html');
}
}
}
console.log(count);