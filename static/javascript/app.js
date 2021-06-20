// let showmenu  = document.querySelector(".menu");

// function show() {
// 	showmenu.style.display = "block";

// } 

// window.onclick = function(event) {
//   if (event.target == showmenu ) {
//     showmenu.style.display = "none";
//   }
// }

const showMenu = ()=>{
const menu= document.getElementById('icon');
const navLinks = document.getElementById('menu')
menu.addEventListener('click', ()=>{
  navLinks.classList.toggle('open-menu')
})
}
showMenu()
//sticky navbar

window.addEventListener('scroll', ()=>{
const navBar= document.querySelector('.main-nav');
const content = document.querySelector('.md-content')
navBar.classList.toggle('sticky',window.scrollY > 0)
content.style.position ='fixed'
console.log('Sticky')
})