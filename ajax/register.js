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
        }
        let signUpFormObj = JSON.stringify(user);
        // console.log(signUpFormObj)
        let sameName = "This username is already exist, please try again!";
        let incorrectPassword = "Confirm password not match, please try again!";
        let createSuccess = "Create success!";
        let no_field = "Please enter all the fields!";
        let no_email = "This email is already exist";
        let not_an_email = "Not an email, try again!"
        // alert("Co vao khong")
        $.ajax({
            url: "http://localhost:8081/register",
            contentType: "application/json; charSet = utf8",
            data: signUpFormObj,
            method: "post",
            success: function (data) {
                console.log("data=========", data)
                if (data == no_field) {
                    document.getElementById("register-err").innerHTML = `  <p style="filter: brightness(120%)" id="messageFailed" class="small-font text-uppercase text-center py-2 text-danger bg-danger-light2 ">"Please enter all the field !</p>`
                    return;
                }
                if (data == sameName) {
                    document.getElementById("register-err").innerHTML = `  <p style="filter: brightness(120%)" id="messageFailed" class="small-font text-uppercase text-center py-2 text-danger bg-danger-light2 ">"This username is already exist !</p>`
                    return
                }
                if (data == incorrectPassword) {
                    document.getElementById("register-err").innerHTML = `  <p style="filter: brightness(120%)" id="messageFailed" class="small-font text-uppercase text-center py-2 text-danger bg-danger-light2 ">"Confirm password not match, try again !</p>`
                    return;
                }
                if (data == no_email){
                    document.getElementById("register-err").innerHTML = `  <p style="filter: brightness(120%)" id="messageFailed" class="small-font text-uppercase text-center py-2 text-danger bg-danger-light2 ">"This email is already exist !</p>`
                    return;
                }
                if (data == not_an_email){
                    document.getElementById("register-err").innerHTML = `  <p style="filter: brightness(120%)" id="messageFailed" class="small-font text-uppercase text-center py-2 text-danger bg-danger-light2 ">"Not an email, try again!</p>`
                    return;
                }
                if (JSON.stringify(data) == JSON.stringify(createSuccess)) {
                    document.getElementById("register-err").innerHTML =`  <p style="filter: brightness(120%)" id="messageFailed" class="small-font text-uppercase text-center py-2 text-danger bg-danger-light2 ">"Create account fail !</p>`
                }

            }
        })
    }

// function register() {
//         let userName =document.getElementById("username").value;
//         let fullName = document.getElementById("fullName").value;
//         let email = document.getElementById("email").value;
//         let passWord = document.getElementById("psw-input").value;
//         let confirmPassword = document.getElementById("confirmPassword").value;
//         let user = {
//             userName: userName,
//             fullName: fullName,
//             email: email,
//             passWord: passWord,
//             confirmPassword: confirmPassword
//         }
//
//     $.ajax({
//         type: "POST",
//         headers: {
//             //kiểu dữ liệu nhận về
//             // 'Accept': 'application/json',
//             // kiểu truyền đi
//             'Content-Type': 'application/json'
//         },
//         url: "http://localhost:8081/register",
//         data: JSON.stringify(user),
//             success: function (data) {
//                 document.getElementById("register-err").innerHTML =`  <p    class="small-font text-uppercase text-center py-2 text-success bg-success-light2 " >Create account success !</p>`
//
//             },
//             error(){
//                 document.getElementById("register-err").innerHTML =`  <p style="filter: brightness(120%)" id="messageFailed" class="small-font text-uppercase text-center py-2 text-danger bg-danger-light2 ">"Create account fail !</p>`
//             }
//         })
//     }


