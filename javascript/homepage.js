const imgArry = ["media/photos/fujiPic.JPG",
                "media/photos/hkhike.jpg",
                "media/photos/hkSunset.jpeg",
                "media/photos/volleyball.jpeg"]
var count = 0;

function changeImage() {
    document.getElementById("homeImg").src = imgArry[count%4];
    count++;
}

setInterval(changeImage, 5000);
