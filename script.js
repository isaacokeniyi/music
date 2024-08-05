let track = document.createElement('audio');
let title = document.querySelector('#title');
let author = document.querySelector('#author');
let album = document.querySelector('#album');
let playbtn = document.querySelector('#play');
let indexno = document.querySelector('#indexno');
let isplaying = false;
let index = 0;
let loaded = false;

// LIST OF SONGS
let musicList = [
    {
        title: "SHE LOOKS SO PERFECT",
        author: "5 SECONDS OF SUMMER",
        src: "5secondsofsummer-shelookssoperfect.mp3",
        img: "5secondsofsummer-shelookssoperfect.jpg",
    },
    {
        title: "TEETH",
        author: "5 SECONDS OF SUMMER",
        src: "5secondsofsummer-teeth.mp3",
        img: "5secondsofsummer-teeth.jpg",
    },
    {
        title: "VOODOO DOLL",
        author: "5 SECONDS OF SUMMER",
        src: "5secondsofsummer-voodoodoll.mp3",
        img: "5secondsofsummer-voodoodoll.jpg",
    },
    {
        title: "MOOD",
        author: "24kGoldn ft. iann dior",
        src: "24kGoldn - Mood (Official Video) ft. iann dior.mp3",
        img: "24kGoldn - Mood (Official Video) ft. iann dior.jpg",
    },
    {
        title: "MOOD REMIX",
        author: "24kGoldn, Justin Bieber, J Balvin, iann dior",
        src: "24kGoldn, Justin Bieber, J Balvin, iann dior - Mood (Remix - Official Lyric Video).mp3",
        img: "24kGoldn, Justin Bieber, J Balvin, iann dior - Mood (Remix - Official Lyric Video).jpg",
    },
    {
        title: "DARKSIDE",
        author: "ALAN WALKER",
        src: "alanwalker-darkside.mp3",
        img: "alanwalker-darkside.jpg",
    },
    {
        title: "FADED",
        author: "ALAN WALKER",
        src: "alanwalker-faded.mp3",
        img: "alanwalker-faded.jpg",
    },
    {
        title: "UNITY",
        author: "ALAN WALKER",
        src: "alanwalker-unity.mp3",
        img: "alanwalker-unity.jpg",
    },
    {
        title: "BREATHE IN BREATHE OUT",
        author: "ALI FT NELLY",
        src: "aliftnelly-breatheinbreatheout.mp3",
        img: "aliftnelly-breatheinbreatheout.jpg",
    },
    {
        title: "THE NIGHTS",
        author: "AVICII",
        src: "avicii-thenights.mp3",
        img: "avicii-thenights.jpg",
    },
    {
        title: "BLOODY SAMARITAN",
        author: "AYRA STARR",
        src: "ayrastarr-bloodysamaritan.mp3",
        img: "ayrastarr-bloodysamaritan.jpg",
    },
    {
        title: "SHAPE OF YOU",
        author: "ED SHEERAN",
        src: "Ed Sheeran - Shape of You (Official Music Video).mp3",
        img: "Ed Sheeran - Shape of You (Official Music Video).jpg",
    },
    {
        title: "BAD HABITS",
        author: "ED SHEERAN",
        src: "edsheeran-badhabits.mp3",
        img: "edsheeran-badhabits.jpg",
    },
    {
        title: "BEAUTIFUL PEOPLE",
        author: "ED SHEERAN",
        src: "edsheeran-beautifulpeople.mp3",
        img: "edsheeran-beautifulpeople.jpg",
    },
    {
        title: "SHIVERS",
        author: "ED SHEERAN",
        src: "edsheeran-shivers.mp3",
        img: "edsheeran-shivers.jpg",
    },
    {
        title: "GODZILLA",
        author: "EMINEM",
        src: "eminem-godzilla.mp3",
        img: "eminem-godzilla.jpg",
    },
    {
        title: "CENTURIES",
        author: "FALL OUT BOY",
        src: "falloutboy-centuries.mp3",
        img: "falloutboy-centuries.jpg",
    },
    {
        title: "THE PHOENIX",
        author: "FALL OUT BOY",
        src: "falloutboy-thephoenix.mp3",
        img: "falloutboy-thephoenix.jpg",
    },
    {
        title: "NOTHING",
        author: "FROM ASHES TO NEW",
        src: "fromashestonew-nothing.mp3",
        img: "fromashestonew-nothing.jpg",
    },
    {
        title: "WILD AT HEART",
        author: "GLORIANA",
        src: "Gloriana - Wild At Heart (Official Video).mp3",
        img: "Gloriana - Wild At Heart (Official Video).jpg",
    },
    {
        title: "BELIVER",
        author: "IMAGINE DRAGONS",
        src: "imaginedragons-believer.mp3",
        img: "imaginedragons-believer.jpg",
    },
    {
        title: "BONES",
        author: "IMAGINE DRAGONS",
        src: "imaginedragons-bones.mp3",
        img: "imaginedragons-bones.jpg",
    },
    {
        title: "ENEMY",
        author: "IMAGINE DRAGONS",
        src: "imaginedragons-enemy.mp3",
        img: "imaginedragons-enemy.jpg",
    },
    {
        title: "AINSI BAS LA VIDA",
        author: "INDILA",
        src: "indila-ainsibaslavida.mp3",
        img: "indila-ainsibaslavida.jpg",
    },
    {
        title: "WHATCHA SAY",
        author: "JASON DERULO",
        src: "jasonderulo-whatchasay.mp3",
        img: "jasonderulo-whatchasay.jpg",
    },
    {
        title: "ARMED AND DANGEROUS",
        author: "JUICE WRLD",
        src: "juicewrld-armedanddangerous.mp3",
        img: "juicewrld-armedanddangerous.jpg",
    },
    {
        title: "LUCID DREAMS",
        author: "JUICE WRLD",
        src: "juicewrld-luciddreams.mp3",
        img: "juicewrld-luciddreams.jpg",
    },
    {
        title: "GHOST",
        author: "JUSTIN BIEBER",
        src: "Justin Bieber - Ghost.mp3",
        img: "Justin Bieber - Ghost.jpg",
    },
    {
        title: "INTENTIONS",
        author: "JUSTIN BIEBER",
        src: "Justin Bieber - Intentions (Official Video (Short Version)) ft. Quavo.mp3",
        img: "Justin Bieber - Intentions (Official Video (Short Version)) ft. Quavo.jpg",
    },
    {
        title: "MURDER IN MY MIND",
        author: "KORDHELL",
        src: "kordhell-murderinmymind.mp3",
        img: "kordhell-murderinmymind.jpg",
    },
    {
        title: "BLOODY MARY",
        author: "LADY GAGA",
        src: "ladygaga-bloodymary.mp3",
        img: "ladygaga-bloodymary.jpg",
    },
    {
        title: "INDUSTRY BABY VS ET MASHUP",
        author: "LIL NAS X , KATY PERRY",
        src: "Lil Nas X, Katy Perry - Industry Baby vs. E.T. (Mashup).mp3",
        img: "Lil Nas X, Katy Perry - Industry Baby vs. E.T. (Mashup).jpg",
    },
    {
        title: "INDUSTRY BABY",
        author: "LIL NAS X",
        src: "lilnasx-industrybaby.mp3",
        img: "lilnasx-industrybaby.jpg",
    },
    {
        title: "STAR WALKIN",
        author: "LIL NAS X",
        src: "lilnasx-starwalkin.mp3",
        img: "lilnasx-starwalkin.jpg",
    },
    {
        title: "ASTRONAUT IN THE OCEAN",
        author: "MASKED WOLF",
        src: "maskedwolf-astronautintheocean.mp3",
        img: "maskedwolf-astronautintheocean.jpg",
    },
    {
        title: "WON DA MO",
        author: "MAVINS, REMA, BOY SPYCE, AYRA STARR, CRAYON, LADIPOE, MAGIXX, JOHNNY DRILLE",
        src: "Mavins, Rema, Boy Spyce, Ayra Starr, Crayon, LADIPOE, Magixx, & Johnny Drille - Won Da Mo.mp3",
        img: "Mavins, Rema, Boy Spyce, Ayra Starr, Crayon, LADIPOE, Magixx, & Johnny Drille - Won Da Mo.jpg",
    },
    {
        title: "REMEMBER THE NAME",
        author: "FORT MINOR",
        src: "Remember The Name (Official Video) - Fort Minor.mp3",
        img: "Remember The Name (Official Video) - Fort Minor.jpg",
    },
    {
        title: "DIAMONDS",
        author: "RIHANNA",
        src: "rihanna-diamonds.mp3",
        img: "rihanna-diamonds.jpg",
    },
    {
        title: "SAVAGE LOVE",
        author: "JASON DERULO",
        src: "savagelove.mp3",
        img: "savagelove.jpg",
    },
    {
        title: "STAY",
        author: "THE KID LAROI",
        src: "thekidlaroi-stay.mp3",
        img: "thekidlaroi-stay.jpg",
    },
];

// END OF LIST OF SONGS

function loadTrack(index){
    track.src = musicList[index].src;
    title.textContent = musicList[index].title;
    author.textContent = musicList[index].author;
    album.src = musicList[index].img;
    let indexnum = index+= 1;
    indexno.textContent = indexnum + "/" + musicList.length;
    track.load();
}
loadTrack(index);

function prev(){
    if(index > 0){
        index--;
        loadTrack(index);
        play();
    }else{
        index = musicList.length -1;
        loadTrack(index);
        play();
    }
}
function play(){
    track.play();
    isplaying = true;
    playbtn.src = "pause.png";
}
function pause(){
    track.pause();
    isplaying = false;
    playbtn.src = "play.png";
}
function playPause(){
    if(isplaying === false){
        play();
    }else{
        pause();
    }
}
function next(){
    if(index < musicList.length - 1){
        index++;
        loadTrack(index);
        play();
    }else{
        index = 0;
        loadTrack(index);
        play();
    }
}