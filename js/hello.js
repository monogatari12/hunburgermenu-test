// window.alert("hello! from js file");
'use strict'
// function toggleNav() {
//     var body = document.body;
//     var hamburger = document.getElementById('js-hamburger');
//     var blackBg = document.getElementById('js-black-bg');
  
//     hamburger.addEventListener('click', function() {
//       body.classList.toggle('nav-open');
//     });
//     blackBg.addEventListener('click', function() {
//       body.classList.remove('nav-open');
//     });
// }
// toggleNav();
//コンストでも動くか試し=>ok!
function toggleNav(){
  const body = document.body;
  const hamburger = document.getElementById('js-hamburger');
  const blackBg = document.getElementById('js-black-bg');
  hamburger.addEventListener('click',function(){
    body.classList.toggle('nav-open');
  });
  blackBg.addEventListener('click',function(){
    body.classList.remove('nav-open');
  });
}
toggleNav();