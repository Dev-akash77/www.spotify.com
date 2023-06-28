let menue=document.querySelector('.menue_main');
let cros=document.querySelector('.fa-xmark');
let bar=document.querySelector('.fa-bars');
let html=document.querySelector('html');
let body=document.querySelector('body');

bar.onclick=()=>{
  menue.style.transform='translateX(0%)';
 html.style.overflowY='hidden'
  menue.style.overflowY='hidden'
body.style.overflowY='hidden'

}

cros.onclick = () => {
  menue.style.transform = 'translateX(200%)';
html.style.overflowY= 'auto'
  menue.style.overflowY= 'auto'
 body.style.overflowY= 'auto'
}