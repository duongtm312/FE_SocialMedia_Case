function acceptFriend(user){
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Bearer " + token);
        },
        data: {
            user: user,
        },
        url: "http://localhost:8081/acceptFriend",
        //xử lý khi thành công
        success: function (data) {
        },
        error: function (err) {
            console.log(err)
        }

    })
}
function deleteAdd(user){
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Bearer " + token);
        },
        data: {
            user: user,
        },
        url: "http://localhost:8081/deleteAdd",
        //xử lý khi thành công
        success: function (data) {
        },
        error: function (err) {
            console.log(err)
        }

    })
}