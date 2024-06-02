class SportHobbie {
    constructor(name, desc, img1, img2) {
        this.name = name;
        this.desc = desc;
        this.img1 = img1
        this.img2 = img2
    }
}

s1 = new SportHobbie("Volleyball",
    `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi exercitationem ducimus neque maiores asperiores
                        culpa ratione facere magni, repudiandae vel, dolores ab, dolorem aliquid dignissimos nobis ea perferendis
                        laboriosam illum!`,
    "../media/photos/volleyball.jpeg",
    "../media/photos/v1.JPG");
s2 = new SportHobbie("Bouldering",
    `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi exercitationem ducimus neque maiores asperiores
                        culpa ratione facere magni, repudiandae vel, dolores ab, dolorem aliquid dignissimos nobis ea perferendis
                        laboriosam illum!`,
    "../media/photos/b1.jpg",
    "../media/photos/b2.HEIC");

s3 = new SportHobbie("Hiking + Outdoor",
    `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi exercitationem ducimus neque maiores asperiores
                        culpa ratione facere magni, repudiandae vel, dolores ab, dolorem aliquid dignissimos nobis ea perferendis
                        laboriosam illum!`,
    "../media/photos/jzpp.jpg",
    "../media/photos/hkhike.jpg");


lst = [s1, s2, s3];


function pressMe(x) {
    document.getElementById("cardJSH").innerHTML = lst[x].name;
    document.getElementById("cardJSB").innerHTML = lst[x].desc;
    document.getElementById("hobbieImg1").src = lst[x].img1;
    document.getElementById("hobbieImg2").src = lst[x].img2;
}