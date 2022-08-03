let stompClient = null;
let username = null;
let friendname = null;
let token = localStorage.getItem("token");
let room = 0;
let messageInput = document.querySelector('#message');
let messageButton = document.querySelector('#messageButton');

function connect(name) {
    username = document.querySelector('#name').value.trim();
    friendname = name
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json'
        },
        beforeSend: function (xhr) {
            xhr.setRequestHeader ("Authorization", "Bearer " + token);
        },
        data: {
            receiver: friendname,
        },
        url: "http://localhost:8081/api/chat/room",

        //xử lý khi thành công
        success: function (data) {
            room = data
            console.log(room)
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

function sendMessage(event) {
    let messageContent = messageInput.value.trim();

    if (messageContent && stompClient) {
        var messageChat = {
            sender: username,
            receiver: friendname,
            content: messageInput.value,
            idRoom: room,
        };

        stompClient.send("/app/chat.sendMessage", {}, JSON.stringify(messageChat));
        messageInput.value = '';
    }
    event.preventDefault();
}
function onMessageReceived(payload) {
    let message = JSON.parse(payload.body);


}
messageButton.addEventListener('submit', sendMessage, true)