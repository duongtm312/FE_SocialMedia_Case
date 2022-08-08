getPost();
getProfile()
function getPost() {
    let token = localStorage.getItem("token");
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',

        },
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Bearer " + token);
        },
        url: "http://localhost:8081/home/postUser",
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
                                    <li><a class="dropdown-item" onclick="deletePost(${p.idPost})"> <i class="bi bi-slash-circle fa-fw pe-2"></i>Delete post</a></li>
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
                        <ul class="comment-wrap list-unstyled" id="showCmtProfile${p.idPost}">
                             <!-- Comment item START -->
                
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
    showTime()
}

function getProfile() {
    let token = localStorage.getItem("token");
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
        success: function (data) {

            changeProfile(data);
        }, error: function (err) {
            console.log("lỗi")
        }
    })
}
function changeProfile(data) {
    console.log(data)
    document.getElementById("avatar11").src = data.avatarSrc
    document.getElementById("avatar12").src = data.avatarSrc
    document.getElementById("avatar13").src = data.avatarSrc
    document.getElementById("avatar14").src = data.avatarSrc
    document.getElementById("avatar15").src = data.avatarSrc
    document.getElementById("name1").innerHTML = data.fullName
    document.getElementById("name2").innerHTML = data.fullName
    document.getElementById("job1").innerHTML = data.job
    document.getElementById("job2").innerHTML = data.job
    document.getElementById("address1").innerHTML = data.address
    document.getElementById("start").innerHTML = data.startJoin
    document.getElementById("cover").style.backgroundImage = "url(" +data.photoCoverSrc + ")"
}

function createCmtt(idPost) {
    let contentCmt = $("#cmtContentt" + idPost).val();
    console.log(contentCmt)
    let token = localStorage.getItem("token");
    let comments = {
        content: contentCmt,
        idP: idPost,
    }
    $.ajax({
        type: "POST", headers: {
            'Accept': 'application/json', 'Content-Type': 'application/json'
        }, beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Bearer " + token);
        }, url: "http://localhost:8081/home/createComment ", data: JSON.stringify(comments),
        success: function (data) {
            console.log("cmt thanh cong")
            document.getElementById("cmtContentt" + idPost).value = ""
            getPost()
        }, error: function (err) {
            console.log("loi cmt")
            console.log(err)
        }
    })
}

function createLikee(id) {
    token = localStorage.getItem("token")
    $.ajax({
        type: "POST", headers: {
            // 'Accept': 'application/json',
            'Content-Type': 'application/json'

        }, beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Bearer " + token);
        }, // data: JSON.stringify(),

        url: "http://localhost:8081/like/" + id, success: function () {
            console.log("thanh cong ")
        }, error: function (err) {
            console.log("loi")
            getPost()
            console.log(err)
        }
    })
}

function deletePost (idPost){
    let token = localStorage.getItem("token");
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',
        },
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Bearer " + token);
        },
        url: "http://localhost:8081/home/delete/" +idPost,
        success: function (data) {
            getPost()
            console.log("xoa thanh cong")
        },
        error: function (err) {
            console.log(err)
        }
    })
}

function getCommentt (idPost){
    let token = localStorage.getItem("token")
    $.ajax({

        type: "GET", headers: {
            'Accept': 'application/json', 'Content-Type': 'application/json'
        }, beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Bearer " + token);
        }, url: "http://localhost:8081/home/comment/" + idPost, //xử lý khi thành công
        success: function (data) {
            showCommentt(data, idPost)
        }, error: function (err) {
            console.log("loi")
            console.log(err)
        }
    })
}

function showCommentt(data,idPost){
    let str = ""
    for (const cmt of data) {
        str += `<li class="comment-item" >
                  <div class="d-flex position-relative">
                    <!-- Avatar -->
                    <div class="avatar avatar-xs">
                      <a href="#!"><img class="avatar-img rounded-circle" src="${cmt.profile.avatarSrc}" alt=""></a>
                    </div>
                    <div class="ms-2">
                      <!-- Comment by -->
                      <div class="bg-light rounded-start-top-0 p-3 rounded">
                        <div class="d-flex justify-content-between nav-divider">
                          <h6 class="mb-1"> <a href="#!"> ${cmt.profile.fullName} </a></h6>
                          <span class="ms-2">${cmt.timeCmt}</span>
                        </div>
                        <p class="small mb-0">${cmt.contentCmt}</p>
                      </div>
                      <!-- Comment react -->
                      <ul class="nav nav-divider py-2 small">
                        <li class="nav-item">
                          <a class="nav-link" href="#!"> Like (${cmt.numLikeCmt})</a>
                        </li>                                            
                      </ul>                 
                            </li>`
    }
    let id = "showCmtProfile" + idPost
    document.getElementById(id).innerHTML = str
    showTime()
}
function showTime () {
    let dates = document.querySelectorAll(".nav-divider > span")
    for (let i = 0; i < dates.length; i++) {
        let d = dates[i]
        d.innerHTML = moment(d.innerHTML).fromNow()
    }
}
