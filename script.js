const ids = [
    "loading",
    "hero",
    "caught",
    "cake",
    "celebration",
    "memoryIntro",
    "vault",
    "memories",
    "letter",
    "gift",
    "fakeEnd",
    "finale"
];

function go(id) {
    ids.forEach(x => {
        const section = document.getElementById(x);

        if (section) {
            section.classList.add("hidden");
        }
    });

    const target = document.getElementById(id);

    if (target) {
        target.classList.remove("hidden");
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
}

setTimeout(() => go("hero"), 4300);
function dontClick(){blast(220);shake();setTimeout(()=>go("caught"),900)}
function showCake(){go("cake")}
function blow(){document.querySelectorAll(".candle b").forEach(x=>x.style.display="none");blast(350);shake();setTimeout(()=>go("celebration"),1400)}
function memoryIntro(){go("memoryIntro")}
function showVault(){go("vault");setTimeout(()=>document.getElementById("passwordInput").focus(),300)}
function checkVault(){
  const input=document.getElementById("passwordInput");
  const msg=document.getElementById("vaultMessage");
  const pass=input.value.trim();
  if(pass==="7/9/2006"){
    msg.textContent="❤️ ACCESS GRANTED... UNLOCKING ALL MEMORIES...";
    input.disabled=true;
    blast(250); shake();
    setTimeout(memoryAttack,1200);
  }else{
    msg.textContent="❌ WRONG PASSWORD 😭 TRY AGAIN, DETECTIVE.";
    input.value="";
    input.focus();
    shake();
  }
}
document.addEventListener("keydown",e=>{if(!document.getElementById("vault").classList.contains("hidden")&&e.key==="Enter")checkVault()});
function memoryAttack(){
  go("memories");
  blast(320);
  setTimeout(()=>document.querySelectorAll(".shot").forEach((x,i)=>setTimeout(()=>x.classList.add("show"),i*280)),300);
  setTimeout(()=>document.querySelectorAll(".g").forEach((x,i)=>{x.style.opacity="0";x.style.transform="scale(.7) rotate(-5deg)";setTimeout(()=>{x.style.transition=".6s";x.style.opacity="1";x.style.transform="none"},i*170)}),1800);
}
function showLetter(){go("letter")}
function blast(n=150){let box=document.getElementById("confetti");for(let i=0;i<n;i++){let e=document.createElement("i"),side=Math.random()>.5?0:100;e.style.cssText=`position:absolute;left:${side}%;top:${10+Math.random()*65}%;width:${4+Math.random()*8}px;height:${8+Math.random()*18}px;background:hsl(${Math.random()*360},85%,60%);border-radius:${Math.random()>.5?"50%":"0"};transition:all ${1+Math.random()*2}s cubic-bezier(.1,.8,.2,1)`;box.appendChild(e);requestAnimationFrame(()=>{e.style.left=Math.random()*100+"%";e.style.top=Math.random()*115+"%";e.style.transform=`rotate(${Math.random()*1400}deg)`;e.style.opacity=0});setTimeout(()=>e.remove(),3200)}}
function shake(){document.body.animate([{transform:"translate(0)"},{transform:"translate(-8px,4px)"},{transform:"translate(8px,-4px)"},{transform:"translate(0)"}],{duration:350,iterations:2})}
document.querySelectorAll(".shot,.g:not(.locked)").forEach(x=>x.onclick=()=>{let im=x.querySelector("img");document.getElementById("bigImg").src=im.src;document.getElementById("lightbox").classList.add("show")});
let typed=false;function openLetter(){let e=document.getElementById("envelope");e.classList.add("open");if(!typed){typed=true;
let text=`I wanted to make you something a little different, because you're not just another person in my life. You're a whole collection of memories, laughs, random moments, inside jokes and stories I never want to forget.
إنتِ بجد من ألطف وأحن وأريح الناس اللي قابلتهم في حياتي، ووجودك فيها فرق معايا أكتر مما تتخيلي. بحب ضحكتك، طريقتك، هزارك، وحتى جنانك اللي قرب يجلطني كذا مرة. 😂❤️
أنا بحبك جدًا جدًا، وبحب كل الذكريات اللي بينا، ونفسي نفضل نعمل ذكريات أكتر وأكتر سوا.
يارب تفضلي دايمًا مبسوطة، وضحكتك متفارقش وشك، وتكون سنتك الجديدة حلوة على قد قلبك. ❤️
Happy birthday to one of the sweetest souls I've ever known. I love you more than words can say. ❤️`;

let i=0,el=document.getElementById("letterText"),t=setInterval(()=>{el.textContent+=text[i++];if(i>=text.length){clearInterval(t);document.getElementById("secretBtn").classList.remove("hidden")}},15)}}
function showGift(){go("gift")}function openGift(el){el.classList.add("open");document.getElementById("giftHint").textContent="Okay... now pick a reason ❤️";document.getElementById("reasons").classList.remove("hidden")}
const reasons = [
    "عشان إنتِ واحدة من ألطف وأريح الناس اللي عرفتهم في حياتي. ❤️",
    "عشان عندك موهبة غريبة جدًا في إنك تخليني أضحك وأنا أصلًا كنت ناوية أتعصب منك. ❤️😂",
    "عشان إنتِ حرفيًا بتقربي تجلطي الواحد، وبعدين تعملي حاجة لطيفة تخليه يقول: خلاص معلش دي روحي برضه. 😭❤️",
    "عشان الحياة ببساطة بتبقى أمتع، وأدفى، وأعلى صوتًا، ومجنونة شوية بوجودك فيها. وبصراحة، مش هحبها بأي شكل تاني. ❤️"
];


let r = 0;

function nextReason() {
    document.getElementById("reason").textContent = reasons[r];

    r++;

    if (r >= reasons.length) {
        document.getElementById("finishBtn").classList.remove("hidden");
        blast(80);
    }
}

function sike(){
    blast(500);
    shake();

    setTimeout(()=>{
        go("finale");
        finalPics();
        blast(300);
    },600);
}

function finalPics(){
    let b=document.querySelector(".finalPhotos");

    for(let i=1;i<12;i++){
        let im=document.createElement("img");

        im.src=`img/photo${i}.jpg`;

        im.style.left=Math.random()*90+"%";
        im.style.top=Math.random()*85+"%";
        im.style.animationDelay=Math.random()*3+"s";

        b.appendChild(im);
    }
}