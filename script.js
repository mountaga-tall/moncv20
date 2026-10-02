const header=document.querySelector('.site-header');
window.addEventListener('scroll',()=>header?.classList.toggle('scrolled',scrollY>18),{passive:true});
const menu=document.querySelector('.menu'); const nav=document.querySelector('.main-nav');
menu?.addEventListener('click',()=>{nav?.classList.toggle('open');menu.setAttribute('aria-expanded',nav?.classList.contains('open')?'true':'false')});
document.querySelectorAll('.year').forEach(e=>e.textContent=new Date().getFullYear());
