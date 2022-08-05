function showEdit(profile) {
    console.log("ok")
    document.getElementById("idProfile").value = profile.idProfile;
    document.getElementById("fullName").value = profile.fullName;
    document.getElementById("phoneNumber").value = profile.phoneNumber;
    document.getElementById("birthDay").value = profile.birthDay;
    document.getElementById("address").value = profile.address;
    document.getElementById("status").value = profile.status;
    document.getElementById("job").value = profile.job;
    document.getElementById("startJoin").value = profile.startJoin;
    document.getElementById("gender").value = profile.gender;
    document.getElementById("email").value = profile.appUser.email;
}

function getEdit() {
    let token = localStorage.getItem("token");
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Bearer " + token);
        },
        url: "http://localhost:8081/profiles/profile",
        //xử lý khi thành công
        success: function (data) {
            // console.log(data)
            // console.log('vao day')
            console.log(data)
            showEdit(data);
        },
        error: function (err) {
            console.log(err)
        }
    })
}

function edit() {
    let idProfile = document.getElementById("idProfile").value;
    let fullName = document.getElementById("fullName").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let birthDay = document.getElementById("birthDay").value;
    let address = document.getElementById("address").value;
    let status = document.getElementById("status").value;
    let job = document.getElementById("job").value;
    let startJoin = document.getElementById("startJoin").value;
    let gender = document.getElementById("gender").value;


    let profile = {
        idProfile: idProfile,
        fullName: fullName,
        phoneNumber: phoneNumber,
        birthDay: birthDay,
        address: address,
        status: status,
        job: job,
        startJoin: startJoin,
        gender: gender
    }
    console.log(profile)
    callEdit(profile);
}

function callEdit(profile) {
    let token = localStorage.getItem("token");

    $.ajax({
        type: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Bearer " + token);
        },
        url: "http://localhost:8081/profiles/edit",
        data: JSON.stringify(profile),
        //xử lý khi thành công
        success: function (data) {
            console.log(data)
            getEdit()

        },
        error: function (err) {
            console.log(err)
        }
    })
}

getEdit();



