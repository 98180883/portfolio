/*go to site */ 

const siteBtn2= document.getElementById("btn_pro2");
const siteBtn3= document.getElementById("btn_pro3");
const siteBtn4= document.getElementById("btn_pro4");

function gotoSite(any){
    window.open(`https://${any}.netlify.app` , "_blank");
}

siteBtn2.addEventListener("click" , () => gotoSite("calculate-simple"));
siteBtn3.addEventListener("click" , () => gotoSite("accurate-weather-aqi"));
siteBtn4.addEventListener("click" , () => gotoSite("enggdigital"));

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
const nav = document.getElementById("nav");

menuBtn.addEventListener("click" , () => {
 
    nav.classList.toggle("open");
})


/*dark mode*/
const savedTheme = localStorage.getItem("theme");

if(savedTheme==="dark"){
    document.body.classList.add("dark");
}
const toggleBtn =document.getElementById("theme-toggle");

toggleBtn.addEventListener("click" , () =>{
    document.body.classList.toggle("dark");
// save on reload
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
})
 