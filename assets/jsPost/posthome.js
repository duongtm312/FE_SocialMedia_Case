

let token = localStorage.getItem("token");
postHome();
showProfile()

function postHome (){
    $.ajax({
        type: "GET",
        headers: {
            //kiểu dữ liệu nhận về
            'Accept': 'application/json',
            // kiểu truyền đi
             'Content-Type': 'application/json'
        },
        beforeSend: function (xhr) {
            console.log(token)
            xhr.setRequestHeader ("Authorization", "Bearer " + token);
        },
        url: "http://localhost:8081/home/post",
        // data: JSON.stringify(),
        //xử lý khi thành công
        success: function (data) {
            console.log("thành công")
            console.log(data)
            // showProfile()
            show(data);
        },
        error: function (err) {
            console.log("lỗi")
        }
    })
}

function show(data) {
    console.log("show")
    let str = "";
    for (const p of data) {
        str += `<div class="card-header border-0 pb-0">
            <div class="d-flex align-items-center justify-content-between"> 
              <div class="d-flex align-items-center">
                <!-- Avatar -->
                <div class="avatar avatar-story me-2">
                  <a href="#!"> <img class="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt=""> </a>
                </div>
                <!-- Info -->
                <div>
                  <div class="nav nav-divider">
                    <h6 class="nav-item card-title mb-0"> <a href="#!"> ${p.appUser.userName} </a></h6>
                    <span class="nav-item small" > ${p.timePost}</span>
                  </div>
                </div>
              </div>
              <!-- Card feed action dropdown START -->
              <div class="dropdown">
                <a href="#" class="text-secondary btn btn-secondary-soft-hover py-1 px-2" id="cardFeedAction" data-bs-toggle="dropdown" aria-expanded="false">
                  <i class="bi bi-three-dots"></i>
                </a>
                <!-- Card feed action dropdown menu -->
                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="cardFeedAction">
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
            <img class="card-img" src="${p.photoPostSrc}" alt="Post">
            <!-- Feed react START -->
            <ul class="nav nav-stack py-3 small">
              <li class="nav-item">
                <a class="nav-link active" href="#!"> <i class="bi bi-hand-thumbs-up-fill pe-1"></i>Liked (${p.numLikePost})</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#!"> <i class="bi bi-chat-fill pe-1"></i>Comments (${p.numCommentPost})</a>
              </li>
              <!-- Card share action START -->
              <li class="nav-item dropdown ms-sm-auto">
                <a class="nav-link mb-0" href="#" id="cardShareAction" data-bs-toggle="dropdown" aria-expanded="false">
                  <i class="bi bi-reply-fill flip-horizontal ps-1"></i>Share (3)
                </a>
                <!-- Card share action dropdown menu -->
                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="cardShareAction">
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

            <!-- Add comment -->
            <div class="d-flex mb-3">
              <!-- Avatar -->
              <div class="avatar avatar-xs me-2">
                <a href="#!"> <img class="avatar-img rounded-circle" src="assets/images/avatar/12.jpg" alt=""> </a>
              </div>
              <!-- Comment box  -->
              <form class="w-100">
                <textarea data-autoresize class="form-control pe-4 bg-light" rows="1" placeholder="Add a comment..."></textarea>
              </form>
            </div>
            <!-- Comment wrap START -->
            <ul class="comment-wrap list-unstyled">
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
                  </div>
                </div>
                <!-- Comment item nested START -->
                <ul class="comment-item-nested list-unstyled">
                  <!-- Comment item START -->
                  <li class="comment-item">
                    <div class="d-flex">
                      <!-- Avatar -->
                      <div class="avatar avatar-xs">
                        <a href="#!"><img class="avatar-img rounded-circle" src="assets/images/avatar/06.jpg" alt=""></a>
                      </div>
                      <!-- Comment by -->
                      <div class="ms-2">
                        <div class="bg-light p-3 rounded">
                          <div class="d-flex justify-content-between">
                            <h6 class="mb-1"> <a href="#!"> Lori Stevens </a> </h6>
                            <small class="ms-2">2hr</small>
                          </div>
                          <p class="small mb-0">See resolved goodness felicity shy civility domestic had but Drawings offended yet answered Jennings perceive.</p>
                        </div>
                        <!-- Comment react -->
                        <ul class="nav nav-divider py-2 small">
                          <li class="nav-item">
                            <a class="nav-link" href="#!"> Like (5)</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="#!"> Reply</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
                <!-- Load more replies -->
                <a href="#!" role="button" class="btn btn-link btn-link-loader btn-sm text-secondary d-flex align-items-center mb-3 ms-5" data-bs-toggle="button" aria-pressed="true">
                </a>
                <!-- Comment item nested END -->
              </li>
              <!-- Comment item END -->

            </ul>
            <!-- Comment wrap END -->
          </div>
          <!-- Card body END -->
          <!-- Card footer START -->
          <div class="card-footer border-0 pt-0">
            <!-- Load more comments -->
            <a href="#!" role="button" class="btn btn-link btn-link-loader btn-sm text-secondary d-flex align-items-center" data-bs-toggle="button" aria-pressed="true">
            </a>
          </div>`
    }
    document.getElementById("showhome").innerHTML = str;
}
function showProfile(){
    $.ajax({
        type: "GET",
        headers: {
            //kiểu dữ liệu nhận về
            'Accept': 'application/json',
            // kiểu truyền đi
            // 'Content-Type': 'application/json'
        },
        beforeSend: function (xhr) {
            console.log(token)
            xhr.setRequestHeader ("Authorization", "Bearer " + token);
        },
        url: "http://localhost:8081/home/profile",
        // data: JSON.stringify(),
        //xử lý khi thành công
        success: function (dataProfile) {
            console.log("thành công")
            console.log(dataProfile)
            showDateProfile(dataProfile);
        },
        error: function (err) {
            console.log("lỗi")
        }
    })
}

function showDateProfile(dataProfile){
    let str = `<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasSideNavbar">
            <!-- Offcanvas header -->
            <div class="offcanvas-header">
              <button type="button" class="btn-close text-reset ms-auto" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>

            <!-- Offcanvas body -->
            <div class="offcanvas-body d-block px-2 px-lg-0">
              <!-- Card START -->
              <div class="card overflow-hidden">
                <!-- Cover image -->
                <div class="h-50px" style="background-image:url(${dataProfile.photoCoverSrc}); background-position: center; background-size: cover; background-repeat: no-repeat;"></div>
                  <!-- Card body START -->
                  <div class="card-body pt-0">
                    <div class="text-center">
                    <!-- Avatar -->
                    <div class="avatar avatar-lg mt-n5 mb-3">
                      <a href="#!"><img class="avatar-img rounded border border-white border-3" src="${dataProfile.avatarSrc}" alt=""></a>
                    </div>
                    <!-- Info -->
                    <h5 class="mb-0"> <a href="#!">${dataProfile.fullName} </a> </h5>
                    <small>C0322G1</small>
                    <p class="mt-3">Bug nhiều chán qá rồi</p>

                    <!-- User stat START -->
                    <div class="hstack gap-2 gap-xl-3 justify-content-center">
                      <!-- User stat item -->
                      <div>
                        <h6 class="mb-0">256</h6>
                        <small>Post</small>
                      </div>
                      <!-- Divider -->
                      <div class="vr"></div>
                      <!-- User stat item -->
                      <div>
                        <h6 class="mb-0">2.5K</h6>
                        <small>Friend</small>
                      </div>

                    </div>
                    <!-- User stat END -->
                  </div>

                  <!-- Divider -->
                  <hr>

                  <!-- Side Nav START -->
                  <ul class="nav nav-link-secondary flex-column fw-bold gap-2">
                    <li class="nav-item">
                      <a class="nav-link" href="my-profile.html"> <img class="me-2 h-20px fa-fw" src="assets/images/icon/home-outline-filled.svg" alt=""><span>Feed </span></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="my-profile-connections.html"> <img class="me-2 h-20px fa-fw" src="assets/images/icon/person-outline-filled.svg" alt=""><span>Connections </span></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="blog.html"> <img class="me-2 h-20px fa-fw" src="assets/images/icon/earth-outline-filled.svg" alt=""><span>Latest News </span></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="events.html"> <img class="me-2 h-20px fa-fw" src="assets/images/icon/calendar-outline-filled.svg" alt=""><span>Events </span></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="groups.html"> <img class="me-2 h-20px fa-fw" src="assets/images/icon/chat-outline-filled.svg" alt=""><span>Groups </span></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="notifications.html"> <img class="me-2 h-20px fa-fw" src="assets/images/icon/notification-outlined-filled.svg" alt=""><span>Notifications </span></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="settings.html"> <img class="me-2 h-20px fa-fw" src="assets/images/icon/cog-outline-filled.svg" alt=""><span>Settings </span></a>
                    </li>
                  </ul>
                  <!-- Side Nav END -->
                </div>
                <!-- Card body END -->
                <!-- Card footer -->
                <div class="card-footer text-center py-2">
                  <a class="btn btn-link btn-sm" href="my-profile.html">View Profile </a>
                </div>
              </div>
              <!-- Card END -->

              <!-- Helper link START -->
              <ul class="nav small mt-4 justify-content-center lh-1">
                <li class="nav-item">
                  <a class="nav-link" href="my-profile-about.html">About</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="settings.html">Settings</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link"  href="http://www.bootstrapmb.comlogin">Support </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link"  href="">Docs </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="help.html">Help</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="privacy-and-terms.html">Privacy & terms</a>
                </li>
              </ul>
              <!-- Helper link END -->
              <!-- Copyright -->
              <p class="small text-center mt-1">©2022 <a class="text-body"  href="http://www.bootstrapmb.com/"> Webestica </a></p>
            </div>
          </div>`

    document.getElementById("profile").innerHTML = str;
}

function uploadFile () {
    console.log("vào up file")
    let fileImg = document.getElementById("img").files;
    console.log(fileImg)
    let formData = new FormData();
    formData.append("file", fileImg[0]);
    $.ajax({
        contentType: false,
        processData: false,
        type: "POST",
        data: formData,
        beforeSend: function (xhr) {
            xhr.setRequestHeader ("Authorization", "Bearer " + token);
        },
        url: "http://localhost:8081/home/upImg",
        success: function (data) {
            console.log(data)
            createPost(data);
        }
    });
}
function createPost(data) {
    let contentPost = $("#stt").val();
    let post = {
        contentPost: contentPost,
        photoPostSrc: data,
    }
    $.ajax({
        type: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        beforeSend: function (xhr) {
            xhr.setRequestHeader ("Authorization", "Bearer " + token);
        },
        url: "http://localhost:8081/home/createPost ",
        data: JSON.stringify(post),
        //xử lý khi thành công
        success: function (data) {

        },
        error: function (err) {
            console.log(err)
        }
    })
}