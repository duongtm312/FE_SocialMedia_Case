function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("psw-input").value;

    let appUser = {
        userName: username,
        passWord: password,
    };
    $.ajax({
        type: "POST",
        headers: {
            //kiểu dữ liệu nhận về
            // 'Accept': 'application/json',
            // kiểu truyền đi
            'Content-Type': 'application/json'
        },
            url: "http://localhost:8081/login",
        data: JSON.stringify(appUser),
        //xử lý khi thành công
        success: function (data) {
            localStorage.setItem("token", data);
            location.href = "index.html"
        },
        error: function (err) {
            document.getElementById('messageLogin').innerHTML = "Login fail ! Try again please !";
        }
    })
    event.preventDefault();

}