const imgArry = ["media/photos/fujiPic.JPG",
                "media/photos/hkhike.jpg",
                "media/photos/hkSunset.jpeg"
                ]
var count = 1;

function changeImage() {
    document.getElementById("homeImg").src = imgArry[count%3];
    count++;
}

setInterval(changeImage, 5000);
