let token = localStorage.getItem("token")
function changePassword(){
    console.log("vao doi pass")

    let oldPassword = document.getElementById("oldPassword").value;
    let newPassword = document.getElementById("psw-input").value;
    let confirmNewPassword = document.getElementById("confirmNewPassword").value;

    let changePassword = {
        oldPassword: oldPassword,
        newPassword: newPassword,
        confirmNewPassword: confirmNewPassword
    }

    $.ajax({
        type: "POST",
        headers: {

            //kiểu dữ liệu nhận về
            // 'Accept': 'application/json',
            // kiểu truyền đi
            'Content-Type': 'application/json'
        },
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Bearer " + token);
        },
        url: "http://localhost:8081/changePassword  " ,
        data: JSON.stringify(changePassword),
        success: function (data) {
            console.log(data)
            location.href = "settings.html"
        },
        error: function (err) {
            document.getElementById('changePasswordError').innerHTML = "Login fail ! Try again please !";
        }
    })

}