let email= document.getElementById("inputEmail4");
let error = document.getElementById("error");
let error1 = document.getElementById("error1")
let pwd = document.getElementById("inputPassword4");
let phone = document.getElementById("phone")

function validate(){
    let regexp =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (regexp.test(email.value)){
        error.innerText = "Valid";
        error.style.colour = "green";
        return true;
    }
    else{
        error.innerHTML = "Invalid";
        error.style.colour = " red";
        return false;
    }
}
function validatepwd(){   
    if(pwd.value.trim() ==""){
        alert("Password is empty");
        return false;
    }
    else if(pwd.value.length<8){
        alert(" Password length is too short");
        pwd.style.border = "1px solid red";
        return false;
    }
    else{
        return true;
    }
}

function validatephone(){
    let phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    if (phoneno.test(phone.value)){
        return true;
    }
    else{
        error1.innerHTML = "Invalid";
        error1.style.colour = " red";
        return false;
    }
}