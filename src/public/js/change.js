const header = document.getElementById('my-header');
const body = document.getElementById('body');
const slider = document.getElementById('my-slider');
window.addEventListener('scroll',function(){
    if(window.scrollY >= slider.offsetHeight){
        header.setAttribute('style','position : fixed ; top :0 ; right : 0 ; left : 0');
        slider.style.marginBottom = header.offsetHeight +"px";
    }
    else{
        header.setAttribute('style','position : sticky ; top : 0 ;');
        slider.style.marginBottom= 0;
    }
});
