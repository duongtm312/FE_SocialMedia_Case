let myKeysValues= window.location.search;
let urlParams = new URLSearchParams(myKeysValues);
let userFriend = urlParams.get("user");
let token = localStorage.getItem("token")
console.log(userFriend)

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
            showProfileFriend()
        }, error: function (err) {
        }
    })
}

function showPro(profile) {
    document.getElementById("avatar12").src = profile.avatarSrc
    document.getElementById("avatar13").src = profile.avatarSrc
    document.getElementById("avatar14").src = profile.avatarSrc
    document.getElementById("name2").innerHTML = profile.fullName
    document.getElementById("job1").innerHTML = profile.job
}
function showProfileFriend() {
    $.ajax({
        type: "GET", headers: {
            //kiểu dữ liệu nhận về
            'Accept': 'application/json', // kiểu truyền đi
            // 'Content-Type': 'application/json'
        }, beforeSend: function (xhr) {
            console.log(token)
            xhr.setRequestHeader("Authorization", "Bearer " + token);
        }
        , url: "http://localhost:8081/api/chat/name?name=" +userFriend,
        //xử lý khi thành công
        success: function (profile) {
            showProFriend(profile)
        }, error: function (err) {
            console.log(this.url)
        }
    })
}
function showProFriend(profile) {
    document.getElementById("avatar11").src = profile.avatarSrc
    document.getElementById("name1").innerHTML = profile.fullName
    document.getElementById("job2").innerHTML = profile.job
    document.getElementById("address1").innerHTML = profile.address
    document.getElementById("start").innerHTML = profile.startJoin
    document.getElementById("cover").src = profile.photoCoverSrc
}
function getPost() {
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',

        },
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Bearer " + token);
        }, data: {
            userFriend: userFriend,
        },
        url: "http://localhost:8081/home/getPostFr",
        success: function (data) {
            showPostUser(data)
        },
        error: function (err) {
            console.log(err)
        }
    })
}

function showPostUser(data) {
    let str = "";
    for (const p of data) {
        str += `<div class="card-header border-0 pb-0">
                        <div class="d-flex align-items-center justify-content-between">
                            <div class="d-flex align-items-center">
                                <!-- Avatar -->
                                <div class="avatar avatar-story me-2">
                                    <a href="#!"> <img class="avatar-img rounded-circle" src="${p.profile.avatarSrc}" alt=""> </a>
                                </div>
                                <!-- Info -->
                                <div>
                                    <div class="nav nav-divider">
                                        <h6 class="nav-item card-title mb-0"> <a href="#!"> ${p.profile.fullName} </a></h6>
                                        <span class="nav-item small"> ${p.timePost}</span>
                                    </div>
                                    <p class="mb-0 small"></p>
                                </div>
                            </div>
                            <!-- Card feed action dropdown START -->
                            <div class="dropdown">
                                <a href="#" class="text-secondary btn btn-secondary-soft-hover py-1 px-2" id="cardFeedAction1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="bi bi-three-dots"></i>
                                </a>
                                <!-- Card feed action dropdown menu -->
                                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="cardFeedAction1">
                                    <li><a class="dropdown-item" href="#"> <i class="bi bi-bookmark fa-fw pe-2"></i>Save post</a></li>
                                    <li><a class="dropdown-item" href="#"> <i class="bi bi-person-x fa-fw pe-2"></i>Unfollow lori ferguson </a></li>
                                    <li><a class="dropdown-item" href="#"> <i class="bi bi-x-circle fa-fw pe-2"></i>Hide post</a></li>
                                    <li><a class="dropdown-item" href="#"> <i class="bi bi-slash-circle fa-fw pe-2"></i>Block</a></li>
                                    <li><hr class="dropdown-divider"></li>
                                    <li><a class="dropdown-item" href="#"> <i class="bi bi-flag fa-fw pe-2"></i>Report post</a></li>
                                </ul>
                            </div>
                            <!-- Card feed action dropdown END -->
                        </div>
                    </div>
                    <!-- Card header END -->
                    <!-- Card body START -->
                    <div class="card-body">
                        <p>${p.contentPost}</p>
                        <!-- Card img -->
                        <img  class="card-img" src="${p.photoPostSrc}" alt="Post">
                        <!-- Feed react START -->
                       
                        <ul class="nav nav-stack py-3 small">
                            <li class="nav-item">
                                <a class="nav-link active" href="#!" onclick="createLikee(${p.idPost})"> <i class="bi bi-hand-thumbs-up-fill pe-1"></i>Liked (${p.numLikePost})</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#!" onclick="getCommentt(${p.idPost})"> <i class="bi bi-chat-fill pe-1"></i>Comments (${p.numCommentPost})</a>
                            </li>
                            <!-- Card share action START -->
                            <li class="nav-item dropdown ms-sm-auto">
                                <a class="nav-link mb-0" href="#" id="cardShareAction8" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="bi bi-reply-fill flip-horizontal ps-1"></i>Share (3)
                                </a>
                               
                                <!-- Card share action dropdown menu -->
                                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="cardShareAction8">
                                    <li><a class="dropdown-item" href="#"> <i class="bi bi-envelope fa-fw pe-2"></i>Send via Direct Message</a></li>
                                    <li><a class="dropdown-item" href="#"> <i class="bi bi-bookmark-check fa-fw pe-2"></i>Bookmark </a></li>
                                    <li><a class="dropdown-item" href="#"> <i class="bi bi-link fa-fw pe-2"></i>Copy link to post</a></li>
                                    <li><a class="dropdown-item" href="#"> <i class="bi bi-share fa-fw pe-2"></i>Share post via …</a></li>
                                    <li><hr class="dropdown-divider"></li>
                                    <li><a class="dropdown-item" href="#"> <i class="bi bi-pencil-square fa-fw pe-2"></i>Share to News Feed</a></li>
                                </ul>
                            </li>
                            <!-- Card share action END -->
                        </ul>
                        <!-- Feed react END -->
                        
                        <div class="d-flex mb-3">
                            <!-- Avatar -->
                            <div class="avatar avatar-xs me-2">
                                <a href="#!"> <img class="avatar-img rounded-circle" src="${p.profile.avatarSrc}" alt=""> </a>
                            </div>
                            <!-- Comment box  -->
                            
                                <textarea class="form-control pe-4 bg-light" rows="1" id="cmtContentt${p.idPost}" placeholder="Add a comment..."></textarea>
                                <a class="btn" onclick="createCmtt(${p.idPost})"> Send</a>
                            
                        </div>
                        <!-- Comment wrap START -->
                        <ul class="comment-wrap list-unstyled" id="cmtProfile${p.idPost}">
                             <!-- Comment item START -->
                <li class="comment-item">
                  <div class="d-flex position-relative">
                    <!-- Avatar -->
                    <div class="avatar avatar-xs">
                      <a href="#!"><img class="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt=""></a>
                    </div>
                    <div class="ms-2">
                      <!-- Comment by -->
                      <div class="bg-light rounded-start-top-0 p-3 rounded">
                        <div class="d-flex justify-content-between">
                          <h6 class="mb-1"> <a href="#!"> Frances Guerrero </a></h6>
                          <small class="ms-2">5hr</small>
                        </div>
                        <p class="small mb-0">Removed demands expense account in outward tedious do. Particular way thoroughly unaffected projection.</p>
                      </div>
                      <!-- Comment react -->
                      <ul class="nav nav-divider py-2 small">
                        <li class="nav-item">
                          <a class="nav-link" href="#!"> Like (3)</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#!"> Reply</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#!"> View 5 replies</a>
                        </li>
                      </ul>
                            
                                    <!-- Comment item END -->
                                </ul>
                            </li>
                        </ul>
                        <!-- Comment wrap END -->
                    </div>
                    <!-- Card body END -->
                    <!-- Card footer START -->
                    <div class="card-footer border-0 pt-0">
                        <!-- Load more comments -->
                      
                </div>
                `
    }
    document.getElementById("showPostUser").innerHTML = str;
}
getPost()
window.onload(showProfile())