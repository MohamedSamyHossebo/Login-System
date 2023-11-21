// SignUp Page
var eName = document.getElementById('entername');
var eEmail = document.getElementById('enteremail');
var ePassword = document.getElementById('enterpassword');
var sUpU = document.getElementById('signupU');
var iCorrectU = document.getElementById('incorrectU');

// Array
var acc = JSON.parse(localStorage.getItem('user')) || [];
var signEmailInput = document.getElementById('signEmail');
var signPasswordInput = document.getElementById('signPassword');

// SignUp function
function store() {
    var accInfo = {
        en: eName.value,
        em: eEmail.value,
        ep: ePassword.value
    }
    acc.push(accInfo);
    localStorage.setItem('user', JSON.stringify(acc));
    clearForm();
}

// Sign In function
function SignIn() {
    if (signEmailInput.value == "" || signPasswordInput.value == "") {
        document.getElementById('message').innerHTML = `<p class="text-danger">All inputs are required</p>`;
    } else {
        checkUser();
    }
}

// Check user function
function checkUser() {
    for (let i = 0; i < acc.length; i++) {
        if (signEmailInput.value == acc[i].em && signPasswordInput.value == acc[i].ep) {
            let y = acc[i].en; // Fix: Change acc[i].eName to acc[i].en
            localStorage.setItem('userName', y);
            location.href = "home.html";
            break;
        }
    }
}

// Clear Function
function clearForm() {
    eName.value = "";
    eEmail.value = "";
    ePassword.value = "";
}
