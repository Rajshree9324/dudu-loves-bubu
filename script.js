// BACKGROUND MUSIC FIX
window.addEventListener("click", function () {
    let music = document.getElementById("bgMusic");
    if (music) {
        music.play();
    }
}, { once: true });

window.addEventListener("load", function () {
    if (localStorage.getItem("musicPlaying") === "true") {
        let music = document.getElementById("bgMusic");
        if (music) {
            music.play();
        }
    }
});

/* PASSWORD */
function showPassword(){
    document.getElementById("homePage").classList.add("hidden");
    document.getElementById("passwordPage").classList.remove("hidden");
}

function checkPassword(){
    let pass = document.getElementById("passwordInput").value;
    if(pass.toLowerCase() === "bubu"){
        window.location.href = "timeline.html";
    } else {
        document.getElementById("wrongPass").innerText = "Wrong password 😜";
    }
}

/* TYPEWRITER */
let text = "Dudu, you are my safe place, my happiness, my forever. I want to laugh with you, fight with you, grow old with you. You are my heart ❤️. You are my unexpected gift ever! Na mudivu paniten neeye ponalum ennala pogamudiyathu ini...and I will not . I need you in all situations. Namma sernthu ellathayum face panikalam. Unaku na Enaku nee irukrapo verenna venum...Arugil irundhal aravanaithu solirupen tholaivil irukirai thoodhu anupukiren! ❤️";
let i = 0;

function typeWriter(){
    if(i < text.length){
        document.getElementById("loveLetter").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}

if(document.getElementById("loveLetter")){
    typeWriter();
}

/* SLIDESHOW */
let slides = ["images/photo1.jpeg",
              "images/photo2.jpeg",
              "images/photo3.jpeg",
              "images/photo4.jpeg",
              "images/photo5.jpeg"
            ];
let slideIndex = 0;

setInterval(function(){
    let img = document.getElementById("slideImage");
    if(img){
        slideIndex = (slideIndex+1)%slides.length;
        img.src = slides[slideIndex];
    }
},3000);

/* MOVE NO BUTTON */
function moveNo(btn){
    btn.style.position="absolute";
    btn.style.top=Math.random()*80+"vh";
    btn.style.left=Math.random()*80+"vw";
}

/* YES */

function yesClicked() {
    alert("He said YESSSS!!!! 😍");
}

document.addEventListener("DOMContentLoaded", function () {

    const yesBtn = document.getElementById("yesBtn");

    if (yesBtn) {
        yesBtn.addEventListener("click", yesClicked); {
            alert("He said YESSS!!!! 💕");
        };
    }
});

/* CONTRACT */
function signContract(){
    if(document.getElementById("agreeBox").checked){
        document.getElementById("contractResult").innerText="Contract Signed Forever 💕";
    } else {
        document.getElementById("contractResult").innerText="Othukitu than aaganum vera vali illa!!! 😏";
    }
}

/* SPARKLING BACKGROUND */
const canvas = document.getElementById("sparkleCanvas");
if(canvas){
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];

    for(let i=0;i<100;i++){
        particles.push({
            x:Math.random()*canvas.width,
            y:Math.random()*canvas.height,
            radius:Math.random()*2,
            alpha:Math.random()
        });
    }

    function animate(){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        particles.forEach(p=>{
            ctx.beginPath();
            ctx.arc(p.x,p.y,p.radius,0,2*Math.PI);
            ctx.fillStyle="rgba(255,192,203,"+p.alpha+")";
            ctx.fill();
        });
        requestAnimationFrame(animate);
    }
    animate();
}

/* CINEMATIC AUTO STORY */

const storyLines = [
    "Namma kadha ennaya vida unaku than nalla theriyum...", 
    "I think it started from Isha Yoga !!! 💫",
    "Nee starting la irunthu love panratha munnadiye solirukalamnu than ipo varaium thonum.. ❤️",
    "Then namma connect aanathu IV apo thana? Actually unna summa pakave enaku romba pudikum.. 😌",
    "Then 3rd year apothan close aanathum anom ivelo aagitom...Actually enaku Antha anbu va romba pudichurunthuchu!! 💕",
    "Heyyy!! Ipovum than but antha days were soo soo good enoda college days ke meaning vandha mathri irunthuchu serious ah! 💍",
    "Nee epdi ennaya first connect panikitenu therla but nee thiru va and na shobana va connect agitom",
    "Actually apove nan yosichiruken love lam ilaa random ah intha mathri life partner kedacha nalla irukumey nu",
    "And then nammaloda first bike ride antha rain laa ....then namma tripss....Sneharitham..",
    "Kumitipathi Murugan kovil, Chavadi Kaliamman kovil, Tiruparangundram, Chavadi veetu vasal,",
    "Mukkiyama namma ella tea kadayum( happy hours, mds, sona, unique bakery), Ukkadam lakes",
    "Paaren evlo suthirukomnu..namma again Coimbatore vandha namaku ivelo memories iruku daa",
    "Maximum ipo varaikume un thoughts en thoughts, universe, nature, god than nammala serthu vachrukarunu na strong ah Namburen",
    "So, ithukaprmum namma journey poite than irukum..",
    "Love you soo muchhh! 💕"
];

let storyIndex = 0;

function showStory() {
    const storyElement = document.getElementById("storyText");

    if (storyElement && storyIndex < storyLines.length) {
        storyElement.style.opacity = 0;

        setTimeout(() => {
            storyElement.innerText = storyLines[storyIndex];
            storyElement.style.opacity = 1;
            storyIndex++;
        }, 10000);

        setTimeout(showStory, 8000);
    }

    if (storyIndex === storyLines.length) {
        setTimeout(() => {
            window.location.href = "proposal.html";
        }, 5000);
    }
}

if (document.getElementById("storyText")) {
    showStory();
}














