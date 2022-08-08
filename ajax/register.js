function register() {
    let userName = document.getElementById("username").value;
    let fullName = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let passWord = document.getElementById("psw-input").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let user = {
        userName: userName,
        fullName: fullName,
        email: email,
        passWord: passWord,
        confirmPassword: confirmPassword
    };


    $.ajax({
        type: "POST",
        headers: {
            //kiểu dữ liệu nhận về
            // 'Accept': 'application/json',
            // kiểu truyền đi
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8081/register",
        data: JSON.stringify(user),
        success: function (data) {

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Creat account Success',
                showConfirmButton: false,
                timer: 1500
            })
        },
        error() {
            document.getElementById("register-err").innerHTML = `  <p style="filter: brightness(120%)" id="messageFailed" class="small-font text-uppercase text-center py-2 text-danger bg-danger-light2 ">"Create account fail !</p>`
        }
    })
}

function checkUser() {
    let userName = document.getElementById("username").value;
    $.ajax({
        type: "GET",
        headers: {
            //kiểu dữ liệu nhận về
            // 'Accept': 'application/json',
            // kiểu truyền đi
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8081/register/user",
        data: {
            userName: userName,
        },
        success: function (data) {
            document.getElementById("register-err").innerHTML = `  <p style="filter: brightness(120%)" id="messageFailed" class="small-font text-uppercase text-center py-2 text-danger bg-danger-light2 ">"Account already exists!</p>`
        },
        error() {

        }
    })
}
function checkMail() {
    let email = document.getElementById("email").value;
    $.ajax({
        type: "GET",
        headers: {
            //kiểu dữ liệu nhận về
            // 'Accept': 'application/json',
            // kiểu truyền đi
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8081/register/mail",
        data: {
            email: email,
        },
        success: function (data) {
            document.getElementById("register-err").innerHTML = `  <p style="filter: brightness(120%)" id="messageFailed" class="small-font text-uppercase text-center py-2 text-danger bg-danger-light2 ">"Email already exists!</p>`
        },
        error() {

        }
    })
}
function checkPassWord() {
    let passWord = document.getElementById("psw-input").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    if (passWord!=confirmPassword){
        document.getElementById("register-err").innerHTML = `  <p style="filter: brightness(120%)" id="messageFailed" class="small-font text-uppercase text-center py-2 text-danger bg-danger-light2 ">"Passwords do not match!</p>`
    }
}