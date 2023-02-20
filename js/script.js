/* ========================= Typing animmation ============================== */
var typed = new Typed(".typing",{
        
    strings: ["","Java Developer"],
    typeSpeed:60,
    backspace:30,
    loop:true
   
}) ;
/* ========================= Aside ============================== */
const nav = document.querySelector(".nav"),
navList = nav.querySelectorAll("li"),
totalNavLsit = navList.length,
allSection = document.querySelectorAll(".section"),
totalSection = allSection.length;
for(let i=0; i<totalNavLsit; i++)
{
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function()
    {
        removeBackSection();
        for(let j=0; j<totalNavLsit; j++)
        {
            if(navList[j].querySelector("a").classList.contains("active"))
            {
                addBackSection(j);
                // allSection[j].classList.add("back-section");
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active")
        showSection(this);
        if(window.innerWidth < 1200)
        {
            asideSectionTogglerBtn();
        }
    })
}
function removeBackSection()
{
    for(let i=0; i<totalSection; i++)
    {
        allSection[i].classList.remove("back-section");
    }
      
}
function addBackSection(num)
{
    allSection[num].classList.add("back-section");
}
function showSection(element)
{
    for(let i=0; i<totalSection; i++)
    {
        allSection[i].classList.remove("active");
    }
    const target =element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active")
   
}
function updateNav(element)
{
    for(let i =0; i<totalNavLsit; i++)
    {
        navList[i].querySelector("a").classList.remove("active");
        const target =element.getAttribute("href").split("#")[1];
        if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
        {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}
document.querySelector(".hire-me").addEventListener("click",function()
{
    const sectionIndex = this.getAttribute("data-section-index");
    // console.log(sectionIndex);
   showSection(this);
   updateNav(this);
   removeBackSection();
   addBackSection(sectionIndex);
})
const navTogglerBtn = document.querySelector(".nav-toggler"),
aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", ()  =>
{
    asideSectionTogglerBtn();
})
function asideSectionTogglerBtn()
{
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for(let i=0 ; i<totalSection; i++)
    {
        allSection[i].classList.toggle("open");
    }
}
/* ========================= Email ============================== */

function sendemail()
{
    
    const fname =document.getElementById('fname');
const email =document.getElementById('email');
const Subject =document.getElementById('Subject');
const Message =document.getElementById('Message');

const submit =document.getElementsByClassName('contact-form')[0];

submit.addEventListener('submit',(e) => 
{
    e.preventDefault();
    console.log("Clicked");

    // write
    let ebody = `
<b>Name : </b>${fname.value}
<br>
<b>Email : </b>${email.value}
<br>
<b>Subject : </b>${Subject.value}
<br>
<b>Message : </b>${Message.value}
<br>
`

    //Email code 
    Email.send({
        SecureToken : "aa0c3762-0b07-42fd-94a0-32253f9333bf",
        To : 'RECIVEREMAIL@gmail.com',
        From : 'SENDEREMAIL@gmail.com',
        Subject : Subject.value,
        Body :ebody
    }).then(
      message => alert(message)
    );

});
}

//  aa0c3762-0b07-42fd-94a0-32253f9333bf