class SportHobbie {
    constructor(name, desc, date) {
        this.name = name;
        this.desc = desc;
        this.date = date;
    }
}

s1 = new SportHobbie("Volleyball",
                    `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi exercitationem ducimus neque maiores asperiores
                        culpa ratione facere magni, repudiandae vel, dolores ab, dolorem aliquid dignissimos nobis ea perferendis
                        laboriosam illum!`,
                    "7 Years");
s2 = new SportHobbie("Bouldering",
                    `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi exercitationem ducimus neque maiores asperiores
                        culpa ratione facere magni, repudiandae vel, dolores ab, dolorem aliquid dignissimos nobis ea perferendis
                        laboriosam illum!`,
                    "1 Year");


lst = [s1, s2];


function pressMe(x) {
    document.getElementById("cardJSH").innerHTML = lst[x].name;
    document.getElementById("cardJSB").innerHTML = lst[x].desc;
    document.getElementById("cardJSF").innerHTML = lst[x].date;
}