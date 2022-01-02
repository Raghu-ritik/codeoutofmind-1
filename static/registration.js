var Form1 = document.getElementById("Form1");
var Form2 = document.getElementById("Form2");
var Form3 = document.getElementById("Form3");

var Next1 = document.getElementById("Next1");
var Next2 = document.getElementById("Next2");
var Back1 = document.getElementById("Back1");
var Back2 = document.getElementById("Back2");

var progress = document.getElementById("progess")
var flag1 = true;
var flag2 = true;
var flag3 = true;
var temp1 = false;
var temp2 = false;
var temp3 = false;
Back1.onclick = function(){
    Form1.style.left = "40px";
    Form2.style.left = "450px";
    progress.style.width = "120px";
}
Back2.onclick = function(){
    Form2.style.left = "40px";
    Form3.style.left = "450px";
    progress.style.width = "240px";

}

const form1 = document.getElementById('Form1');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

const form2 = document.getElementById('Form2');
const medium = document.getElementById("Medium");
const github = document.getElementById("github");
const linkedin = document.getElementById("linkedin");

const form3 = document.getElementById('Form3');
const fname = document.getElementById('fname');
const lname = document.getElementById('Lastname');
const mobno = document.getElementById('mobno');

let Next1btn = document.getElementById('Next1');
Next1btn.addEventListener('click', f=> {
    f.preventDefault();
    Next1Checkval();
    if (flag1==true && flag2==true && flag3==true){
        temp1=true;
    }
    Next1.onclick = function(){
    Form1.style.left = "-450px";
    Form2.style.left = "40px";
    progress.style.width = "240px";
}
});

function Next1Checkval(){
console.log("This is in function !");
const emailValue = email.value.trim();
const passwordValue = password.value.trim();
const password2Value = password2.value.trim();

if(emailValue === '') {
setErrorFor(email, 'Email cannot be blank');
flag1=false;
} else if (!isEmail(emailValue)) {
setErrorFor(email, 'Not a valid email');
flag1=false;
} else {
    flag1=true;
setSuccessFor(email);

}

if(passwordValue === '') {
    setErrorFor(password, 'Password cannot be blank');
    flag2=false;
} else {
    flag2=true;
    setSuccessFor(password);
}

if(password2Value === '') {
    setErrorFor(password2, 'Confirm Password cannot be blank');
    flag3=false;
} else if(passwordValue !== password2Value) {
    setErrorFor(password2, 'Passwords does not match');
    flag3=false;
} else{
    flag3=true;
    setSuccessFor(password2);
}
}

let Next2btn = document.getElementById('Next2');
Next2btn.addEventListener('click', f=> {
    f.preventDefault();
    
    Next2Checkval();
    if(flag1 == true && flag2 == true && flag3 == true){
        temp2 = true;
    }
    Next2.onclick = function(){
    Form2.style.left = "-450px";
    Form3.style.left = "40px";
    progress.style.width = "360px";
}
});
function Next2Checkval(){
    const medValue = medium.value.trim();
    const gitValue = github.value.trim();
    const linkValue = linkedin.value.trim();
    
    if(medValue === '') {
        setErrorFor(medium, 'medium value cannot be blank');
        flag1=false;
    } else {
        setSuccessFor(medium);
        flag1=true;

    }
    if(gitValue === '') {
        setErrorFor(github, 'github link cannot be blank');
        flag2=false;
    } else {
        setSuccessFor(github);
        flag2=true;
    }
    if(linkValue === '') {
        setErrorFor(linkedin, 'linkedin link cannot be blank');
        flag3=false;
    } else {
        setSuccessFor(linkedin);
        flag3=true;
    }

}
let subfom = document.getElementById('registration_form');
let Subm_btn = document.getElementById('Subm_btn');
Subm_btn.addEventListener('click', e => {
    console.log("Default is to !");
    e.preventDefault();
    
    checkInputs();
    if(flag1 == true && flag2 == true && flag3 == true){
        temp3 = true;
    }
    if(temp1==true && temp2==true && temp3==true){
        subfom.submit();
    }
});



function checkInputs() {
// trim to remove the whitespaces
const fnameValue = fname.value.trim();
const lnameValue = lname.value.trim();
const mobnoValue = mobno.value.trim();


if(fnameValue === '') {
setErrorFor(fname, 'First name cannot be blank');
flag1=false;
} else {
    flag1=true;
setSuccessFor(fname);
}
if(lnameValue === '') {
setErrorFor(lname, 'Last name cannot be blank');
flag2=false;
} else {
    flag2=true;
setSuccessFor(lname);
}
if(mobnoValue === '') {
setErrorFor(mobno, 'Mobile number cannot be blank');
flag3=false;
} else {
    flag3=true;
setSuccessFor(mobno);

}



}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control1 error';
    small.innerText = message;
}  
function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control1 success';
} 
function isEmail(email) {
return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

