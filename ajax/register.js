function register() {
        let userName =document.getElementById("username").value;
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
    let sameName = "This username is already exist, please try again!";
    let incorrectPassword = "Confirm password not match, please try again!";
    let createSuccess = "Create success!";
    let no_field = "Please enter all the fields!";
    let no_email = "This email is already exist";
    let not_an_email = "Not an email, try again!"

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
                document.getElementById("register-err").innerHTML =`  <p    class="small-font text-uppercase text-center py-2 text-success bg-success-light2 " >Create account success !</p>`
            },
            error(){
                document.getElementById("register-err").innerHTML =`  <p style="filter: brightness(120%)" id="messageFailed" class="small-font text-uppercase text-center py-2 text-danger bg-danger-light2 ">"Create account fail !</p>`
            }
        })
    }

// function message() {
//
//     Swal.fire({
//         position: 'top-end',
//         icon: 'success',
//         title: 'Your work has been saved',
//         showConfirmButton: false,
//         timer: 1500
//     })
// }


