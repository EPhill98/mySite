const imgArry = ["media/photos/fujiPic.JPG",
                "media/photos/hkhike.jpg",
                "media/photos/hkSunset.jpeg"
                ]
var img = 1;

function changeImage() {
    document.getElementById("homeImg").src = imgArry[img%3];
    img++;
}

setInterval(changeImage, 5000);
