const header=document.querySelector('.site-header');
window.addEventListener('scroll',()=>header?.classList.toggle('scrolled',scrollY>18),{passive:true});
const menu=document.querySelector('.menu'); const nav=document.querySelector('.main-nav');
menu?.addEventListener('click',()=>{nav?.classList.toggle('open');menu.setAttribute('aria-expanded',nav?.classList.contains('open')?'true':'false')});
document.querySelectorAll('.year').forEach(e=>e.textContent=new Date().getFullYear());


/* Experience page pointer depth */
const expHero=document.querySelector('.experience-hero');
const expItems=document.querySelectorAll('.experience-hero .reveal, .timeline-item');
if(expHero && window.matchMedia('(pointer:fine)').matches){
  expHero.addEventListener('pointermove',event=>{
    const rect=expHero.getBoundingClientRect();
    const x=((event.clientX-rect.left)/rect.width)*100;
    const y=((event.clientY-rect.top)/rect.height)*100;
    expHero.style.setProperty('--mx',x+'%');
    expHero.style.setProperty('--my',y+'%');
  },{passive:true});
}
if(window.matchMedia('(pointer:fine)').matches){
  document.querySelectorAll('.timeline-item').forEach(card=>{
    card.addEventListener('pointermove',event=>{
      const r=card.getBoundingClientRect();
      const px=(event.clientX-r.left)/r.width;
      const py=(event.clientY-r.top)/r.height;
      const rx=(.5-py)*4;
      const ry=(px-.5)*5;
      card.style.setProperty('--tx',(px*100)+'%');
      card.style.setProperty('--ty',(py*100)+'%');
      card.style.transform='perspective(1200px) translateY(-5px) rotateX('+rx+'deg) rotateY('+ry+'deg)';
    });
    card.addEventListener('pointerleave',()=>{
      card.style.transform='';
    });
  });
}
