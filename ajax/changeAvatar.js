getData();

function create(data) {

    let profile = {
        avatarSrc: data
    }
        $.ajax({
        type: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/home",
        data: JSON.stringify(profile),
        //xử lý khi thành công
        success: function (data) {
            getData();
        },
        error: function (err) {
            console.log(err)
        }
    })
}
function getData() {
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/home",
        //xử lý khi thành công
        success: function (data) {
            console.log("data")
            console.log(data)
            showData(data.content);
        },
        error: function (err) {
            console.log(err)
        }
    })
}
function showData(data) {
    let str = "";
    for (const d of data) {
        str += ` 
  <div class="avatar avatar-xxl mt-n5 mb-3">
                      <a href="#!" data-bs-toggle="modal" data-bs-target="#feedActionVideo"> <img src="${d.avatarSrc}" class="avatar-img rounded-circle border border-white border-3"></a>
                  </div>`
    }
    document.getElementById("show").innerHTML = str;
}


function uploadFile() {
    let fileImg = document.getElementById("img").files;
    if (fileImg.length === 0) {
        alert("ảnh chưa up");
        return;
    }
    let formData = new FormData();
    formData.append("file", fileImg[0]);
    $.ajax({
        contentType: false,
        processData: false,
        type: "POST",
        data: formData,
        url: "http://localhost:8080/products/upImg",
        success: function (data) {
            create(data);
        }
    });
}

