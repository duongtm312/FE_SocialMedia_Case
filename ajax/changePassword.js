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
        url: "http://localhost:8081/changePassword" ,
        data: JSON.stringify(changePassword),
        success: function (data) {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Change Password Success',
                showConfirmButton: false,
                timer: 1500
            })
            document.getElementById("oldPassword").value = ""
            document.getElementById("psw-input").value = ""
            document.getElementById("confirmNewPassword").value = ""
        },
        error: function (err) {
            document.getElementById('changePasswordError').innerHTML = `  <p style="filter: brightness(120%)" id="messageFailed" class="small-font text-uppercase text-center py-2 text-danger bg-danger-light2 ">Change password fail ! Please try again !</p>`
        }
    })

}