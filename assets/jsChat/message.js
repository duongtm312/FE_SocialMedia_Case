let showFriendChat= document.getElementById("showFriendsChat");
function show(){
$.ajax({
    type: "GET",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    beforeSend: function (xhr) {
        xhr.setRequestHeader ("Authorization", "Bearer " + token);
    },
    url: "http://localhost:8081/api/chat/friends",
    //xử lý khi thành công
    success: function (data) {
        showFriend(data)
    },
    error: function (err) {
        console.log(err)
    }
})
}
function showFriend(data){
    let str=""
    for (const pf of data) {
        str+=` <li data-bs-dismiss="offcanvas">
                        <!-- Chat user tab item -->
                        <a class="nav-link active text-start" id="chat-1-tab" data-bs-toggle="pill" role="tab" onclick="connect(${pf.appUser.userName})">
                          <div class="d-flex">
                            <div class="flex-shrink-0 avatar avatar-story me-2 ">
                              <img class="avatar-img rounded-circle" src="${pf.avatarSrc}" alt="">
                              <p hidden  ></p>
                            </div>
                            <div class="flex-grow-1 d-block">
                              <h6 class="mb-0 mt-1">${pf.fullName}</h6>
                            </div>
                          </div>
                        </a>
                      </li>`
    }
    showFriendChat.innerHTML=str
}
window.onload(show())