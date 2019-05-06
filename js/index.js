/**** Create 10 unique event listeners ****/

// 1. mouseover - turn button background to blue
const btn = document.querySelector('.btn');

btn.addEventListener('mouseover', function(event){
  event.target.style.backgroundColor='blue';
});

// 2. click - turn navs into blue after clicking
const navs = document.querySelector('a');

navs.addEventListener('click', function(event){
    event.target.style.backgroundColor='yellow';
});

// 3. dblclick - double click the footer, turns navigation bar to blue
const footer = document.querySelector('.footer');
const navContainer = document.querySelector('.nav-container');

footer.addEventListener('dblclick', function(event){
    //alert("alerted");
    navContainer.style.backgroundColor='blue';
  });

// 4. Copy - copy any text, show alert "please cite your sources"
document.addEventListener('copy', (event) => {
    alert("Please cite your sources");
});

// 5. Keydown - press anykey, font color changes to purple
document.addEventListener('keydown', (event) => {
    event.target.style.color='purple';
});

// 6. Load - alert shows when the page is fully loaded
window.addEventListener('load', event => {
    alert ('The page is fully loaded');
})

// 7. Focus - when people click on SSN before typing, it gets highlighted purple
const ssn = document.querySelector('input[type="ssn"]');

ssn.addEventListener('focus', (event) => {
  event.target.style.background = 'purple';    
});

// 8. Contextmenu - right clicking on footer changes color of nav bar

footer.addEventListener('contextmenu', function(event){
    navContainer.style.backgroundColor='pink';
  });

// 9. Mousemove - putting mouse over the image caues an alert
const funBusImg = document.querySelector('img[src="img/fun-bus.jpg"]');

funBusImg.addEventListener('mousemove', (event) => {
  alert("Do not hover over the bus"); 
});

// 10. Paste - cannot paste name into Name section
const name = document.querySelector('input[class="name"]');

name.addEventListener('paste', (event) => {
    alert("You must write this out yourself");
});


/**** Nest two similar events and prevent the event propagation ****/
const mainContent = document.querySelector('body');
mainContent.addEventListener('click', function(eventObject){
 console.log(`body fired!`); 
  eventObject.stopPropagation();
});

/**** Stop navigation from items from refreshing the page by using preventDefault() ****/
const formSubmit = document.querySelector('.form-submit');
formSubmit.addEventListener('click', function(event){
  event.preventDefault();
});