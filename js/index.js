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


// IMAGES
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const headerImg = document.querySelector('#cta-img');
headerImg.src = 'img/header-img.png';
headerImg.alt = 'image of a code snippet';

const middleImg = document.querySelector('#middle-img');
middleImg.src = 'img/mid-page-accent.jpg';
middleImg.alt = 'Image of code snippets across the screen';


// NAVIGATION
const navItems = document.querySelectorAll('a');
navItems[0].textContent = 'Services';
navItems[1].textContent = 'Product';
navItems[2].textContent = 'Vision';
navItems[3].textContent = 'Features';
navItems[4].textContent = 'About';
navItems[5].textContent = 'Contact';
navItems.forEach( function (currentValue) {
  currentValue.style.color= 'green';
});
//navItems[0].style.color = 'green'; for individual customization

//Create 2 New Navigation Items
const firstNavItem = document.createElement('a');
firstNavItem.href = '#';
firstNavItem.textContent = 'First';
firstNavItem.style.color = 'green';

const lastNavItem = document.createElement('a');
lastNavItem.href = '#';
lastNavItem.textContent = 'Last';
lastNavItem.style.color = 'green';

// Create DOM node for 'nav' section to prepend and append new child items
const navigation = document.querySelector('nav'); //selects the first 'nav' selector in html file
navigation.appendChild(lastNavItem);
navigation.prepend(firstNavItem);


// CALL TO ACTION TEXT AND BUTTON
//const ctaSection = document.querySelector('.cta');
//ctaSection.style.display = 'flex';
//ctaSection.style.justifyContent = 'center'; 

const bigText = document.querySelector('h1');
bigText.innerHTML = 'DOM <br>IS <br> AWESOME';

const ctaBtn = document.querySelector('button');
ctaBtn.textContent = 'Get Started';




// CONTENT TEXT
const mainContentHeaders = document.querySelectorAll('h4');
mainContentHeaders[0].textContent = 'FEATURES';
mainContentHeaders[1].textContent = 'ABOUT';
mainContentHeaders[2].textContent = 'SERVICES';
mainContentHeaders[3].textContent = 'PRODUCT';
mainContentHeaders[4].textContent = 'VISION';
mainContentHeaders[5].textContent = 'CONTACT'
mainContentHeaders[5].style.color = 'blue'

const mainContentParagraph = document.querySelectorAll('p');
mainContentParagraph[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
mainContentParagraph[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
mainContentParagraph[2].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
mainContentParagraph[3].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
mainContentParagraph[4].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
mainContentParagraph[5].innerHTML = '123 Way 456 Street,<br> Somewhere, USA';
mainContentParagraph[6].textContent = '1 (888) 888-8888';
mainContentParagraph[7].textContent = 'sales@greatidea.io';
mainContentParagraph[5].style.color = 'blue';
mainContentParagraph[6].style.color = 'blue';
mainContentParagraph[7].style.color = 'blue';
mainContentParagraph[8].style.color = 'blue';
