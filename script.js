/*go to site */ 

const siteBtn1 = document.getElementById("btn_pro1");
const siteBtn2= document.getElementById("btn_pro2");
const siteBtn3= document.getElementById("btn_pro3");
const siteBtn4= document.getElementById("btn_pro4");
const sliderAuto = document.querySelector(".skills");
const leftBtn = document.getElementById("L-slideBtn");
const rightBtn = document.getElementById("R-slideBtn");

function gotoSite(any){
    window.open(`${any}` , "_blank");
}
siteBtn1.addEventListener("click" , () => gotoSite("https://98180883.github.io/Secured-Password-generator/"));
siteBtn2.addEventListener("click" , () => gotoSite("https://98180883.github.io/movie-search-app/"));
siteBtn3.addEventListener("click" , () => gotoSite("https://accurate-weather-aqi.netlify.app/"));
siteBtn4.addEventListener("click" , () => gotoSite("https://enggdigital.netlify.app/"));

/*contact*/

const sBtn =  document.getElementById("submit");
const submitMsg = document.getElementById("submit-msg");
const contact_form =  document.querySelector(".contact-form");

sBtn.addEventListener("click" , (e) => {
e.preventDefault();
submitMsg.innerText = "";

const contactName = document.getElementById("contact-name").value.trim();
const contactMail = document.getElementById("contact-mail").value.trim();
const contactPh = document.getElementById("contact-ph").value.trim();

const query = document.getElementById("query").value.trim();
if(contactName=="" || contactMail=="" || query==""){
    submitMsg.innerText = "Each field is required" ;
     submitMsg.style.color = "red";
    return;
}
if(contactPh.length!=10 || isNaN(contactPh)){
    submitMsg.innerText = "Invalid phone number";
     submitMsg.style.color = "red";
     return;
}

    submitMsg.innerText="Query Sent Successfully";
        submitMsg.style.color = "green";
              contact_form.reset();
})

/*menu mobile*/

const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("mob-nav");

menuBtn.addEventListener("click" , () => {
 
    nav.classList.toggle("open");
})

 //slide
rightBtn.onclick = () =>
 sliderAuto.scrollBy({ left:150, behavior: "smooth" });

  leftBtn.onclick = () =>
   sliderAuto.scrollBy({ left:-150, behavior: "smooth" });
