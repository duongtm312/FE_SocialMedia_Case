getEditAbout()
function getEditAbout() {
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
            console.log(data)
            showEditAbout(data);
            changeProfile(data)
        },
        error: function (err) {
            console.log(err)
            console.log("loi")
        }
    })
}
function showEditAbout(data){
    let str =`<div class="card-header border-0 pb-0">
                        <h5 class="card-title"> Profile Info</h5>
                    </div>
                    <!-- Card header END -->
                    <!-- Card body START -->
                    <div class="card-body">
                        <div class="rounded border px-3 py-2 mb-3">
                            <div class="d-flex align-items-center justify-content-between">
                                <h6>Overview</h6>
                            </div>
                            <p>He moonlights difficult engrossed it, sportsmen. Interested has all Devonshire difficulty gay assistance joy. Handsome met debating sir dwelling age material. As style lived he worse dried. Offered related so visitors we private removed. Moderate do subjects to distance. </p>
                        </div>
                        <div class="row g-4">
                         <div class="col-sm-6 col-lg-6">
                                <!-- Status START -->
                                <div class="d-flex align-items-center rounded border px-3 py-2">
                                    <!-- Date -->
                                    <p class="mb-0">
                                        <i class="bi bi-heart fa-fw me-2" ></i> Name: <strong> ${data.fullName} </strong>
                                    </p>
                                </div>
                                <!-- Status END -->
                            </div>  
                         <div class="col-sm-6 col-lg-6">
                                <!-- Status START -->
                                <div class="d-flex align-items-center rounded border px-3 py-2">
                                    <!-- Date -->
                                    <p class="mb-0">
                                        <i class="bi bi-heart fa-fw me-2" ></i> Status: <strong> ${data.status} </strong>
                                    </p>
                                </div>
                                <!-- Status END -->
                            </div>  
                            <div class="col-sm-6 col-lg-6">
                                <!-- Birthday START -->
                                <div class="d-flex align-items-center rounded border px-3 py-2">
                                    <!-- Date -->
                                    <p class="mb-0">
                                        <i class="bi bi-calendar-date fa-fw me-2" ></i> Birthday <strong> ${data.birthDay} </strong>

                                    </p>
                                </div>
                                <!-- Birthday END -->
                            </div>
                            <div class="col-sm-6 col-lg-6">
                                <!-- Status START -->
                                <div class="d-flex align-items-center rounded border px-3 py-2">
                                    <!-- Date -->
                                    <p class="mb-0">
                                        <i class="bi bi-heart fa-fw me-2" ></i> Phone: <strong> ${data.phoneNumber} </strong>
                                    </p>
                                </div>
                                <!-- Status END -->
                            </div>
                            <div class="col-sm-6 col-lg-6">
                                <!-- Designation START -->
                                <div class="d-flex align-items-center rounded border px-3 py-2">
                                    <!-- Date -->
                                    <p class="mb-0">
                                        <i class="bi bi-briefcase fa-fw me-2"></i> <strong> ${data.job} </strong>
                                    </p>
                                </div>
                                <!-- Designation END -->
                            </div>
                            <div class="col-sm-6 col-lg-6">
                                <!-- Lives START -->
                                <div class="d-flex align-items-center rounded border px-3 py-2">
                                    <!-- Date -->
                                    <p class="mb-0">
                                        <i class="bi bi-geo-alt fa-fw me-2"></i> Lives in: <strong> ${data.address} </strong>
                                    </p>
                                </div>
                                <!-- Lives END -->
                            </div>
                            <div class="col-sm-6 col-lg-6">
                                <!-- Joined on START -->
                                <div class="d-flex align-items-center rounded border px-3 py-2">
                                    <!-- Date -->
                                    <p class="mb-0">
                                        <i class="bi bi-geo-alt fa-fw me-2"></i> Joined on: <strong> ${data.startJoin} </strong>
                                    </p>
                                </div>
                                <!-- Joined on END -->
                            </div>
                            <div class="col-sm-6 col-lg-6">
                                <!-- Joined on START -->
                                <div class="d-flex align-items-center rounded border px-3 py-2">
                                    <!-- Date -->
                                    <p class="mb-0">
                                        <i class="bi bi-envelope fa-fw me-2"></i> Email: <strong> ${data.appUser.email} </strong>
                                    </p>
                                </div>
                                <!-- Joined on END -->
                            </div>
                        </div>
                    </div>
                    <!-- Card body END -->
                </div>
                <!-- Card feed item END -->

                <!-- Card feed item START -->
                <div class="card">
                    <!-- Card header START -->
                    <div class="card-header d-sm-flex justify-content-between border-0 pb-0">
                        <h5 class="card-title">Interests</h5>
                        <a class="btn btn-primary-soft btn-sm" href="#!"> See all</a>
                    </div>
                    <!-- Card header END -->
                    <!-- Card body START -->
                    <div class="card-body">
                        <div class="row g-4">
                            <div class="col-sm-6 col-lg-4">
                                <!-- Interests item START -->
                                <div class="d-flex align-items-center position-relative">
                                    <div class="avatar">
                                        <img class="avatar-img" src="assets/images/logo/04.svg" alt="">
                                    </div>
                                    <div class="ms-2">
                                        <h6 class="mb-0"> <a class="stretched-link" href="#"> Oracle </a></h6>
                                        <p class="small mb-0">7,546,224 followers</p>
                                    </div>
                                </div>
                                <!-- Interests item END -->
                            </div>
                            <div class="col-sm-6 col-lg-4">
                                <!-- Interests item START -->
                                <div class="d-flex align-items-center position-relative">
                                    <div class="avatar">
                                        <img class="avatar-img" src="assets/images/logo/13.svg" alt="">
                                    </div>
                                    <div class="ms-2">
                                        <h6 class="mb-0"> <a class="stretched-link" href="#"> Apple </a></h6>
                                        <p class="small mb-0">102B followers</p>
                                    </div>
                                </div>
                                <!-- Interests item END -->
                            </div>
                            <div class="col-sm-6 col-lg-4">
                                 Interests item START 
                                <div class="d-flex align-items-center position-relative">
                                    <div class="avatar">
                                        <img class="avatar-img rounded-circle" src="assets/images/avatar/placeholder.jpg" alt="">
                                    </div>
                                    <div class="ms-2">
                                        <h6 class="mb-0"> <a class="stretched-link" href="#"> Elon musk </a></h6>
                                        <p class="small mb-0"> CEO and Product Architect of Tesla, Inc 41B followers</p>
                                    </div>
                                </div>`

    document.getElementById("showProfile").innerHTML = str
}
function changeProfile(data) {
    document.getElementById("avatar11").src = data.avatarSrc
    document.getElementById("avatar12").src = data.avatarSrc
    document.getElementById("avatar13").src = data.avatarSrc
    document.getElementById("name1").innerHTML = data.fullName
    document.getElementById("name2").innerHTML = data.fullName
    document.getElementById("job1").innerHTML = data.job
    document.getElementById("job2").innerHTML = data.job
    document.getElementById("address1").innerHTML = data.address
    document.getElementById("start").innerHTML = data.startJoin
    document.getElementById("cover1").style.backgroundImage = "url(" +data.photoCoverSrc + ")"
}
