let stompClient = null;
let token = localStorage.getItem("token");
let room = 0;
let messageInput = document.getElementById("messageInput")
let showMessage = document.getElementById('showMessage')
let imgSrcMessage = document.getElementById('imgSrcMessage')
let nameMessage = document.getElementById('nameMessage')
let summitChat = document.getElementById("summitMessage")

function loadImgAndName(name) {
    localStorage.setItem("nameFriend", name);
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
            name: name
        },
        url: "http://localhost:8081/api/chat/name",
        //xử lý khi thành công
        success: function (data) {
            nameMessage.innerText = data.fullName;
            imgSrcMessage.src = data.avatarSrc
            localStorage.setItem("imgSrc", data.avatarSrc);
            loadChatMessage(name, data.avatarSrc)
        },
        error: function (err) {
            console.log(err)
        }
    })

}

function loadChatMessage(name, img) {
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
            idRoom: room,
        },
        url: "http://localhost:8081/api/chat",
        //xử lý khi thành công
        success: function (data) {
            getChat(data, img, name)
        },
        error: function (err) {
            console.log(err)
        }
    })

}

function getChat(data, img, name) {
    let str = "";
    for (const m of data) {
        if (m.sender.userName == name) {
            str += `<!-- Chat message left -->
                  <div class="d-flex mb-1">
                    <div class="flex-shrink-0 avatar avatar-xs me-2">
                      <img class="avatar-img rounded-circle" src="${img}" alt="">
                    </div>
                    <div class="flex-grow-1">
                      <div class="w-100">
                        <div class="d-flex flex-column align-items-start timeAGO">
                          <div class="bg-light text-secondary p-2 px-3 rounded-2">${m.contentMessage}</div>
                          <span class="small my-2 ">${m.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>
            `
        } else {
            str += `      <!-- Chat message right -->
                  <div class="d-flex justify-content-end text-end mb-1">
                    <div class="w-100">
                      <div class="d-flex flex-column align-items-end">
                        <div class="bg-primary text-white p-2 px-3 rounded-2">${m.contentMessage}</div>
                        <div class="d-flex my-2 timeAGO">
                          <span class="small text-secondary ">${m.time}</span>
                          <div class="small ms-2"><i class="fa-solid fa-check-double text-info"></i></div>
                        </div>
                      </div>
                    </div>
                  </div>`
        }
    }
    showMessage.innerHTML = str
    summitChat.innerHTML = `
              <button class="btn btn-sm btn-secondary-soft ms-2"><i class="fa-solid fa-paperclip fs-6"></i></button>
              <button class="btn btn-sm btn-primary ms-2"><i class="fa-solid fa-paper-plane fs-6" id="messageButton" onclick="getUserOn('${name}')" ></i></button>`

    showTime()
}

function connect(name) {
    friendname = name
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json'
        },
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Bearer " + token);
        },
        data: {
            receiver: friendname,
        },
        url: "http://localhost:8081/api/chat/room",

        //xử lý khi thành công
        success: function (data) {
            loadImgAndName(name, data)
            room = data
            let socket = new WebSocket('ws://localhost:8081/socket/websocket');
            stompClient = Stomp.over(socket);
            stompClient.connect({}, onConnected, onError);
        }
    });
}

function onConnected() {
    // Subscribe to the Public Topic
    stompClient.subscribe('/chatroom/public/' + room, onMessageReceived);
}

function onError(error) {
    console.log(error)
}

function getUserOn(name) {
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Bearer " + token);
        },
        url: "http://localhost:8081/api/chat/on",
        //xử lý khi thành công
        success: function (data) {
            console.log(data)
            sendMessage(name, data)
        },
        error: function (err) {
            console.log(err)
        }
    })
}

function sendMessage(name, data) {
    console.log("ok")
    let messageContent = messageInput.value;
    if (messageContent && stompClient) {
        var messageChat = {
            sender: data,
            receiver: {
                userName: name
            },
            contentMessage: messageContent,
            roomChat: {
                idRoom: room
            }
        };

        stompClient.send("/app/chat.sendMessage", {}, JSON.stringify(messageChat));
        messageInput.value = '';
        console.log("done")
    }
    event.preventDefault();
}

function onMessageReceived(payload) {
    let imgSrc = localStorage.getItem("imgSrc");
    let nameFriend = localStorage.getItem("nameFriend");
    console.log(nameFriend)
    let message = JSON.parse(payload.body);
    if (message.receiver.userName != nameFriend) {
        console.log("vo")
        let str = `<!-- Chat message left -->
                  <div class="d-flex mb-1">
                    <div class="flex-shrink-0 avatar avatar-xs me-2">
                      <img class="avatar-img rounded-circle" src="${imgSrc}" alt="">
                    </div>
                    <div class="flex-grow-1">
                      <div class="w-100">
                        <div class="d-flex flex-column align-items-start timeAGO">
                          <div class="bg-light text-secondary p-2 px-3 rounded-2">${message.contentMessage}</div>
                          <span class="small my-2 " >${message.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>
            `
        showMessage.innerHTML += str
    }else {
        let str=`  <!-- Chat message right -->
                  <div class="d-flex justify-content-end text-end mb-1">
                    <div class="w-100">
                      <div class="d-flex flex-column align-items-end">
                        <div class="bg-primary text-white p-2 px-3 rounded-2">${message.contentMessage}</div>
                        <div class="d-flex my-2 timeAGO">
                          <span class="small text-secondary ">${message.time}</span>
                          <div class="small ms-2"><i class="fa-solid fa-check-double text-info"></i></div>
                        </div>
                      </div>
                    </div>
                  </div>`
        showMessage.innerHTML+=str
    }
    showTime()
}
function showTime () {
    let dates = document.querySelectorAll(".timeAGO > span")
    for (let i = 0; i < dates.length; i++) {
        let d = dates[i]
        d.innerHTML = moment(d.innerHTML).fromNow()

    }
}