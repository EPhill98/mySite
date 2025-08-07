const imgArry = [
                "media/photos/hkhike.jpg",
                "media/photos/hkSunset.jpeg",
                "media/photos/cityU.HEIC",
                "media/photos/swanGrad.jpeg",
                ]
var img = 1;

function changeImage() {
    document.getElementById("homeImg").src = imgArry[img%(imgArry.length)];
    img++;
}

setInterval(changeImage, 5000);
