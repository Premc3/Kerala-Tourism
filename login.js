
let email= document.getElementById("inputEmail3");
let error = document.getElementById("error");
let error1 = document.getElementById("error1");
let pwd = document.getElementById("inputPassword3");

function validatepwd(){   
    let regexp1 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if(regexp1.test(pwd.value)){
        error1.innerText = "Valid";
        error1.style.color = "green";
        return true;
    }
    else{
        error1.innerHTML = "Invalid";
        error1.style.color = " red";
        pwd.style.border="1px solid red"
        return false;
    }
}
function validate(){
    let regexp =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (regexp.test(email.value)){
        error.innerText = "Valid";
        error.style.color = "green";
        return true;
    }
    else{
        error.innerHTML = "Invalid";
        error.style.color = " red";
        email.style.border="1px solid red"
        return false;
    }
}
