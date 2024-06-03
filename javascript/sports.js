class SportHobbie {
    constructor(name, desc, img1, img2) {
        this.name = name;
        this.desc = desc;
        this.img1 = img1
        this.img2 = img2
    }
}

s1 = new SportHobbie("Volleyball",
    `I have been playing volleyball for around 8 years after joining my local team in Stafford. 
        Ever since, I have become hugely passionate about the sport. 
        After a few years, I was offered the chance to become a <b>Qualified Referee</b> through a course paid for by my local club. 
        Since then, I have refereed a number of games for my local club and the university. <br><br>

        I joined the Swansea University team in my first year and made the first team. 
        I was then made <b>captain</b> at the start of my second year. 
        This was a great season for our team, winning the division and promotion, and I was honored to lead a great squad. 
        Furthermore, I was elected as the <b>Club Development Officer</b>, where I organized a weekly intramural league focusing on getting new players interested in the sport. <br><br>
    
        During my year abroad, I joined a social club hosted by CityU Hong Kong and met some great friends.
        I am happy to return to Swansea's club as the <b>Treasurer</b> for the 24/25 season!`,
    "../media/photos/volleyball.jpeg",
    "../media/photos/v1.JPG");
s2 = new SportHobbie("Bouldering",
    `More recently, I have become a climber! After having some experience with rock climbing when I was younger 
        and joining the club at my high school for only £1 per session, 
        I rediscovered my passion for solving small, physical challenges. <br><br>

        I made use of a great student deal during my time in Hong Kong 
        and enjoyed bouldering during the quieter periods. 
        This was a great hobby that I could do by myself or with friends to take a nice break 
        from the busy city and punishing humidity.`,
    "../media/photos/b1.jpg",
    "../media/photos/b2.HEIC");

s3 = new SportHobbie("Hiking + Outdoor",
    `Another hobby I rediscovered during my time in Hong Kong was hiking. 
        Hiking proved to be a great way to meet other like-minded students, 
        as well as explore my new home. I have been fortunate enough to see some amazing sights, 
        such as reaching Lion Rock's peak just in time to watch a beautiful sunset. 
        Additionally, a friend and I set out to complete the MacLehose Trail,
        a 100km long trail that stretches along the region.<br><br>

        I also got the opportunity to enjoy paddle boarding along Sai Kung's beautiful coast and kayaking. `,
    "../media/photos/jzpp.jpg",
    "../media/photos/hkhike.jpg");


lst = [s1, s2, s3];


function pressMe(x) {
    document.getElementById("cardJSH").innerHTML = lst[x].name;
    document.getElementById("cardJSB").innerHTML = lst[x].desc;
    document.getElementById("hobbieImg1").src = lst[x].img1;
    document.getElementById("hobbieImg2").src = lst[x].img2;
}