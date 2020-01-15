// Your code goes here
const newLogo = document.querySelector('.logo-heading');

// MOUSE ENTER BELOW
newLogo.addEventListener('mouseover', function(){
    newLogo.style.color = "blue";
    newLogo.style.fontWeight = "bold";
})

// MOUSE LEAVE BELOW
newLogo.addEventListener('mouseout', function(){
    newLogo.style.color = "black";
    newLogo.style.fontWeight = "normal";
})


// CLICK BELOW 
document.querySelectorAll("a").forEach(elem => {
    elem.addEventListener('click', function(){
        elem.style.color = 'red';
    })
})

// DOUBLE CLICK BELOW
document.querySelectorAll("nav a").forEach(elem => {
    elem.addEventListener('dblclick', function(){
        elem.style.color = 'black';
    })
})

// WHEEL BELOW 
document.querySelectorAll('h2').forEach(elem => {
    elem.addEventListener('wheel', function(){
        elem.style.fontWeight = 'bold';
    })
})

// LOAD BELOW
document.querySelectorAll('img').forEach(elem => {
    elem.addEventListener('load', function(){
        elem.style.transform = 'scale(.75)';
    })
})

// MOUSEOVER BELOW
document.querySelectorAll('.text-content').forEach(elem => {
    elem.addEventListener('mouseenter', function(event){
        elem.style.color = 'red';
        event.stopPropagation();
    })
})

// MOUSEOUT BELOW
document.querySelectorAll('.text-content').forEach(elem => {
    elem.addEventListener('mouseleave', function(event){
        elem.style.color = 'black';
    })
})

// ANIMATIONSTART BELOW
const newFooter = document.querySelector('footer p');

newFooter.addEventListener('animationend', function(){
    newFooter.style.color = "red";
})

// ANIMATIONEND BELOW 
newFooter.addEventListener('animationstart', function(){
    newFooter.style.color = "blue";
})





// SECOND PART OF THE ASSIGNMENT

const outer = document.querySelector(".content-section");

outer.addEventListener('click', function(){
    outer.style.backgroundColor = "red";
})

const inner = document.querySelector(".text-content")

inner.addEventListener('click', function(e){
    inner.style.backgroundColor = "orange";
    e.stopPropagation();
})

// LAST PART OF THE ASSIGNMENT

document.querySelectorAll(".nav-link").forEach(elem => {
    elem.addEventListener("click", function(e){
        e.preventDefault();
    })
})






// propag.addEventListener('mouseenter', function(){
//     propag.style.color = "red";
//     // event.stopPropagation();
// })
// propag.addEventListener('mouseleave', function(){
//     propag.style.color = "pink";
//     // event.stopPropagation();
// })









// document.querySelectorAll('p').forEach(elem => {
//     elem.addEventListener('input', function(){
//         elem.style.color = 'blue';
//     })
// })





// document.querySelectorAll('p').forEach(elem => {
//     elem.addEventListener('select', function(){
//         elem.style.fontSize = '10rem';
//     })
// })

// document.querySelectorAll('p').forEach(elem => {
//     elem.addEventListener('keyup', function(){
//         elem.style.color = 'black';
//     })
// })

