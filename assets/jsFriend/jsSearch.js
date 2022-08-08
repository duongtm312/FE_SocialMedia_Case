let searchFriends = document.getElementById("searchFriends")
let token = localStorage.getItem("token");

function searchFriend() {
    let name = document.getElementById("searchInput").value
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
            name: name,
        },
        url: "http://localhost:8081/search",
        //xử lý khi thành công
        success: function (data) {
            showSearchFriend(data)
        },
        error: function (err) {
            console.log(err)
        }
    })
}

function showSearchFriend(proFile) {
    let str = ""
    for (const p of proFile) {
        str += `  <li id="'${p.appUser.userName}'">
                <div class="rounded badge-unread d-sm-flex border-0 mb-1 p-3 position-relative">
                  <!-- Avatar -->
                  <div class="avatar text-center">
                    <img class="avatar-img rounded-circle" src="${p.avatarSrc}" alt="">
                  </div>
                  <!-- Info -->
                  <div class="mx-sm-3 my-2 my-sm-0">
                    <p class=" mb-2"><b>${p.fullName}</b> Address: ${p.address}, Gender: ${p.gender}, Job: ${p.job}</p>
                  <!-- Button -->
                  <div class="d-flex">
                    <button class="btn btn-sm py-1 btn-primary me-2" onclick="addFriend('${p.appUser.userName}')" id="'${p.appUser.userName}'">Add Friend </button>
           
                  </div>
                </div>
               
              </li>`
    }
    searchFriends.innerHTML = str
}


function addFriend(user) {

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
        url: "http://localhost:8081/addFriend",
        //xử lý khi thành công
        success: function (data) {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Add Friend Success',
                showConfirmButton: false,
                timer: 1500
            })
        },
        error: function (err) {
            console.log(err)
        }

    })
}

function showProfile() {
    $.ajax({
        type: "GET", headers: {
            //kiểu dữ liệu nhận về
            'Accept': 'application/json', // kiểu truyền đi
            // 'Content-Type': 'application/json'
        }, beforeSend: function (xhr) {
            console.log(token)
            xhr.setRequestHeader("Authorization", "Bearer " + token);
        }, url: "http://localhost:8081/home/profile", // data: JSON.stringify(),
        //xử lý khi thành công
        success: function (profile) {
            showPro(profile)
        }, error: function (err) {
        }
    })
}

function showPro(profile) {
    document.getElementById("avatar11").src = profile.avatarSrc
    document.getElementById("avatar12").src = profile.avatarSrc
    document.getElementById("name1").innerHTML = profile.fullName
    document.getElementById("job1").innerHTML = profile.job
}
window.onload(showProfile())