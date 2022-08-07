getPost();
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
        str += ` 
                    <!-- Card header START -->
                    <div class="card-header border-0 pb-0">
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
                                <a class="nav-link active" href="#!"> <i class="bi bi-hand-thumbs-up-fill pe-1"></i>Liked (${p.numLikePost})</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#!"> <i class="bi bi-chat-fill pe-1"></i>Comments (${p.numCommentPost})</a>
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

                        <!-- Add comment -->
<!--                        <div class="d-flex mb-3">-->
<!--                            &lt;!&ndash; Avatar &ndash;&gt;-->
<!--                            <div class="avatar avatar-xs me-2">-->
<!--                                <a href="#!"> <img class="avatar-img rounded-circle" src="assets/images/avatar/12.jpg" alt=""> </a>-->
<!--                            </div>-->
<!--                            &lt;!&ndash; Comment box  &ndash;&gt;-->
<!--                            <form class="position-relative w-100">-->
<!--                                <textarea class="form-control pe-4 bg-light" rows="1" placeholder="Add a comment..."></textarea>-->
<!--                            </form>-->
<!--                        </div>-->
                        <!-- Comment wrap START -->
                        <ul class="comment-wrap list-unstyled">
                            <!-- Comment item START -->
                            <li class="comment-item">
                                <div class="d-flex position-relative">
                                    <!-- Avatar -->
<!--                                    <div class="avatar avatar-xs">-->
<!--                                        <a href="#!"><img class="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt=""></a>-->
<!--                                    </div>-->
<!--                                    <div class="ms-2">-->
<!--                                        &lt;!&ndash; Comment by &ndash;&gt;-->
<!--                                        <div class="bg-light rounded-start-top-0 p-3 rounded">-->
<!--                                            <div class="d-flex justify-content-between">-->
<!--                                                <h6 class="mb-1"> <a href="#!"> Frances Guerrero </a></h6>-->
<!--                                                <small class="ms-2">5hr</small>-->
<!--                                            </div>-->
<!--                                            <p class="small mb-0">Removed demands expense account in outward tedious do. Particular way thoroughly unaffected projection.</p>-->
<!--                                        </div>-->
<!--                                        &lt;!&ndash; Comment react &ndash;&gt;-->
<!--                                        <ul class="nav nav-divider py-2 small">-->
<!--                                            <li class="nav-item">-->
<!--                                                <a class="nav-link" href="#!"> Like (3)</a>-->
<!--                                            </li>-->
<!--                                            <li class="nav-item">-->
<!--                                                <a class="nav-link" href="#!"> Reply</a>-->
<!--                                            </li>-->
<!--                                            <li class="nav-item">-->
<!--                                                <a class="nav-link" href="#!"> View 5 replies</a>-->
<!--                                            </li>-->
<!--                                        </ul>-->
<!--                                    </div>-->
                                </div>
                                <!-- Comment item nested START -->
                                <ul class="comment-item-nested list-unstyled">
                                    <!-- Comment item START -->
                                    <li class="comment-item">
                                        <div class="d-flex">
                                            <!-- Avatar -->
<!--                                            <div class="avatar avatar-xs">-->
<!--                                                <a href="#!"><img class="avatar-img rounded-circle" src="assets/images/avatar/06.jpg" alt=""></a>-->
<!--                                            </div>-->
                                            <!-- Comment by -->
                                            <div class="ms-2">
<!--                                                <div class="bg-light p-3 rounded">-->
<!--&lt;!&ndash;                                                    <div class="d-flex justify-content-between">&ndash;&gt;-->
<!--&lt;!&ndash;                                                        <h6 class="mb-1"> <a href="#!"> Lori Stevens </a> </h6>&ndash;&gt;-->
<!--&lt;!&ndash;                                                        <small class="ms-2">2hr</small>&ndash;&gt;-->
<!--&lt;!&ndash;                                                    </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                                    <p class="small mb-0">See resolved goodness felicity shy civility domestic had but Drawings offended yet answered Jennings perceive.</p>&ndash;&gt;-->
<!--&lt;!&ndash;                                                </div>&ndash;&gt;-->
<!--                                                &lt;!&ndash; Comment react &ndash;&gt;-->
<!--                                                <ul class="nav nav-divider py-2 small">-->
<!--                                                    <li class="nav-item">-->
<!--                                                        <a class="nav-link" href="#!"> Like (5)</a>-->
<!--                                                    </li>-->
<!--                                                    <li class="nav-item">-->
<!--                                                        <a class="nav-link" href="#!"> Reply</a>-->
<!--                                                    </li>-->
<!--                                                </ul>-->
<!--                                            </div>-->
                                        </div>
                                    </li>
                                    <!-- Comment item END -->
                                    <!-- Comment item START -->
                                    <li class="comment-item">
                                        <div class="d-flex">
                                            <!-- Avatar -->
<!--                                            <div class="avatar avatar-story avatar-xs">-->
<!--                                                <a href="#!"><img class="avatar-img rounded-circle" src="assets/images/avatar/07.jpg" alt=""></a>-->
<!--                                            </div>-->
                                            <!-- Comment by -->
                                            <div class="ms-2">
<!--                                                <div class="bg-light p-3 rounded">-->
<!--                                                    <div class="d-flex justify-content-between">-->
<!--                                                        <h6 class="mb-1"> <a href="#!"> Billy Vasquez </a> </h6>-->
<!--                                                        <small class="ms-2">15min</small>-->
<!--&lt;!&ndash;                                                    </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                                    <p class="small mb-0">Wishing calling is warrant settled was lucky.</p>&ndash;&gt;-->
<!--&lt;!&ndash;                                                </div>&ndash;&gt;-->
<!--                                                &lt;!&ndash; Comment react &ndash;&gt;-->
<!--                                                <ul class="nav nav-divider py-2 small">-->
<!--                                                    <li class="nav-item">-->
<!--                                                        <a class="nav-link" href="#!"> Like</a>-->
<!--                                                    </li>-->
<!--                                                    <li class="nav-item">-->
<!--                                                        <a class="nav-link" href="#!"> Reply</a>-->
<!--                                                    </li>-->
<!--                                                </ul>-->
<!--                                            </div>-->
<!--                                        </div>-->
                                    </li>
                                    <!-- Comment item END -->
                                </ul>
                                <!-- Load more replies -->
<!--                                <a href="#!" role="button" class="btn btn-link btn-link-loader btn-sm text-secondary d-flex align-items-center mb-3 ms-5" data-bs-toggle="button" aria-pressed="true">-->
<!--                                    <div class="spinner-dots me-2">-->
<!--                                        <span class="spinner-dot"></span>-->
<!--                                        <span class="spinner-dot"></span>-->
<!--                                        <span class="spinner-dot"></span>-->
<!--                                    </div>-->
<!--&lt;!&ndash;                                    Load more replies&ndash;&gt;-->
<!--                                </a>-->
                                <!-- Comment item nested END -->
                            </li>
                            <!-- Comment item END -->
                            <!-- Comment item START -->
                            <li class="comment-item">
<!--                                <div class="d-flex">-->
<!--                                    &lt;!&ndash; Avatar &ndash;&gt;-->
<!--                                    <div class="avatar avatar-xs">-->
<!--                                        <a href="#!"><img class="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt=""></a>-->
<!--                                    </div>-->
<!--                                    &lt;!&ndash; Comment by &ndash;&gt;-->
<!--                                    <div class="ms-2">-->
<!--                                        <div class="bg-light p-3 rounded">-->
<!--                                            <div class="d-flex justify-content-between">-->
<!--                                                <h6 class="mb-1"> <a href="#!"> Frances Guerrero </a> </h6>-->
<!--                                                <small class="ms-2">4min</small>-->
<!--                                            </div>-->
<!--                                            <p class="small mb-0">Removed demands expense account in outward tedious do. Particular way thoroughly unaffected projection.</p>-->
<!--                                        </div>-->
<!--                                        &lt;!&ndash; Comment react &ndash;&gt;-->
<!--                                        <ul class="nav nav-divider pt-2 small">-->
<!--                                            <li class="nav-item">-->
<!--                                                <a class="nav-link" href="#!"> Like (1)</a>-->
<!--                                            </li>-->
<!--                                            <li class="nav-item">-->
<!--                                                <a class="nav-link" href="#!"> Reply</a>-->
<!--                                            </li>-->
<!--                                            <li class="nav-item">-->
<!--                                                <a class="nav-link" href="#!"> View 6 replies</a>-->
<!--                                            </li>-->
<!--                                        </ul>-->
<!--                                    </div>-->
<!--                                </div>-->
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
                            <div class="spinner-dots me-2">
                                <span class="spinner-dot"></span>
                                <span class="spinner-dot"></span>
                                <span class="spinner-dot"></span>
                            </div>

                        </a>
                    </div>
<!--                    <div class="card">-->

<!--                        <div class="border-bottom">-->
<!--                            <p class="small mb-0 px-4 py-2"><i class="bi bi-heart-fill text-danger pe-1"></i>Sam Lanson likes this post</p>-->
<!--                        </div>-->
<!--                    </div>-->
                    <!-- Card footer END -->
                `
    }
    document.getElementById("showPostUser").innerHTML = str;
}