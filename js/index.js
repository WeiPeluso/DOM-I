const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//task1
const headerImg= document.querySelector("#cta-img");
headerImg.setAttribute('src',siteContent['cta']['img-src']);

const midImg= document.querySelector("#middle-img");
midImg.setAttribute('src',siteContent['main-content']['middle-img-src']);


//task2

//nav
const navs=document.querySelectorAll('a')
let keys=Object.keys(siteContent["nav"]);
navs.forEach((links,index)=>{
  links.textContent=siteContent["nav"][keys[index]];
})


//cta
document.querySelector("h1").textContent=siteContent["cta"]["h1"];
document.querySelector("button").textContent=siteContent["cta"]["button"];

//main-containt
const mainContentH4=document.querySelectorAll("h4");
const mainContentText=document.querySelectorAll(".text-content p");

let keysMainH4=[];
let keysMainText=[]
for (var key in siteContent["main-content"]) {
  if(key.includes('h4')){
    keysMainH4.push(key);
  }
  else if(key.includes('content')){
    keysMainText.push(key);
  }
}

mainContentH4.forEach((item,index)=>{
    
    item.textContent=siteContent["main-content"][keysMainH4[index]];
})

mainContentText.forEach((item,index)=>{
    
  item.textContent=siteContent["main-content"][keysMainText[index]];
})


//contact
mainContentH4Arr=Array.from(mainContentH4);
mainContentH4Arr[mainContentH4Arr.length-1].textContent=siteContent["contact"]["contact-h4"]

const contact=document.querySelectorAll(".contact p");
console.log(contact);

let keysContact=Object.keys(siteContent["contact"]);
console.log(keysContact);
contact.forEach((items,index)=>{
  items.textContent=siteContent["contact"][keysContact[index+1]];
})



//footer
document.querySelector("footer").textContent=siteContent["footer"]["copyright"]

//task 4
navs.forEach((links,index)=>{
  links.style.color="green";
})

const newLink1 = document.createElement('a');
const newLink2 = document.createElement('a');

nav=document.querySelector('nav')

newLink1.href = "#"
newLink1.textContent = "new Nav 1"
newLink2.href = "#"
newLink2.textContent = "new Nav 2"

nav.appendChild(newLink2);
nav.prepend(newLink1) ;
